import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

import Envelope from "../assets/images/enevlope.svg";
import Call from "../assets/images/call.svg";
import MapPin from "../assets/images/map-pin.svg";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import Twitter from "../assets/images/Twitter.svg";

import MapImg from "../assets/images/map.jpg";

import "../css/terms.css";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero-like animation for the first section
    if (!textRef.current || !sectionRef.current || !contentRef.current) {
      console.warn("ContactSection hero-like refs not found:", {
        textRef: textRef.current,
        sectionRef: sectionRef.current,
        contentRef: contentRef.current,
      });
      return;
    }

    const splitResult = Splitting({ target: textRef.current, by: "words" });
    const words = splitResult[0]?.words || [];

    if (words.length === 0) {
      console.warn("Splitting failed: No words found for main heading");
      return;
    }

    const tl = gsap.timeline();
    tl.set(words, { x: "1em", opacity: 0, ease: "power1.inOut" });
    tl.to(words, {
      opacity: 1,
      x: "0em",
      duration: 1.3,
      stagger: { from: "left", amount: 1.25 },
      transformOrigin: "0% 100%",
      ease: "ease",
    });

    // Uncomment if you want content slide-in like hero
    // tl.from(
    //   contentRef.current,
    //   {
    //     opacity: 0,
    //     duration: 1.3,
    //     x: "10em",
    //     transformOrigin: "0% 100%",
    //     ease: "ease",
    //   },
    //   "-=100%"
    // );

    const tline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        start: "top top",
        end: "bottom top",
        anticipatePin: 1,
      },
    });

    tline.to(sectionRef.current, { y: "25vh", duration: 1 });
    // tline.to(contentRef.current, { opacity: 0, duration: 1 }, "-=0.5");

    // Animate contact blocks on scroll
    const blocks = document.querySelectorAll(".jd-contact-block");
    gsap.set(blocks, { opacity: 0, y: "30px" });

    ScrollTrigger.batch(blocks, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }),
      start: "top 80%",
    });

    // Animate form on scroll
    const form = document.querySelector(".jd_contact-card");
    if (form) {
      gsap.set(form, { opacity: 0, x: "50px" });
      ScrollTrigger.create({
        trigger: form,
        onEnter: () =>
          gsap.to(form, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          }),
        start: "top 85%",
      });
    }

    // Simple scroll movement for the main contact section (lighter)
    const contactSection = document.querySelector(".section.jd_contact");
    if (contactSection) {
      ScrollTrigger.create({
        trigger: contactSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(contactSection, {
            y: self.progress * -10 + "vh",
            duration: 0.3,
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([words, contentRef.current, sectionRef.current]);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone_number: Yup.string(),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://apistage.jdwebnship.com/api/contact-us",
          values
        );
        if (response) {
          toast.success("Mail Send Successfully");
          resetForm();
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Failed to send message.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <Toaster />
      {/* Hero Section */}
      <section
        className="section hero-section animation-section contact"
        ref={sectionRef}
      >
        <div className="section__inner container">
          <div className="hero-section__content row align-items-center">
            <div className="col-md-8 col-12 text-center mx-auto">
              <h1 className="h1 js-animated-text" ref={textRef}>
                We're Here to Help!
              </h1>
              <p ref={contentRef}>
                Have questions? Need a custom quote? Or just want to learn more
                about how JD Web and Ship can transform your logistics? Reach
                out to our friendly team – we're always happy to assis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section jd_contact">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-lg-6">
              <div className="jd_contact-content">
                <div className="jd-contact-block">
                  <h4>Contact Information</h4>
                  <ul className="flex-dir-col">
                    <li>
                      <a
                        className="flex align-items-center hover-link"
                        href="mailto:info@jdwebandship.com"
                      >
                        <span className="icon-bg">
                          <img src={Envelope} alt="Email" />
                        </span>
                        info@jdwebandship.com
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex align-items-center hover-link"
                        href="tel:+919876543210"
                      >
                        <span className="icon-bg">
                          <img src={Call} alt="Phone" />
                        </span>
                        +91 9876543210
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex align-items-center hover-link"
                        href="https://maps.app.goo.gl/RcDoGytNG36BPNhL6"
                        target="_blank"
                      >
                        <span className="icon-bg">
                          <img src={MapPin} alt="Location" />
                        </span>
                        404, Green Atria, Anand Mahal Road, Above United Green
                        Hospital, Adajan, Surat, Gujarat - 395009
                      </a>
                    </li>
                  </ul>
                </div>
                <hr />

                <div className="jd-contact-block">
                  <h4>Operating Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM – 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <hr />

                <div className="jd-contact-block">
                  <h4>Social Media</h4>
                  <ul className="flex flex-dir-row">
                    <li>
                      <a
                        className="flex align-items-center hover-link"
                        href="#"
                      >
                        <span className="icon-bg">
                          <img src={Facebook} alt="Facebook" />
                        </span>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex align-items-center hover-link"
                        href="#"
                      >
                        <span className="icon-bg">
                          <img src={Instagram} alt="Instagram" />
                        </span>
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex align-items-center hover-link"
                        href="#"
                      >
                        <span className="icon-bg">
                          <img src={Twitter} alt="Twitter" />
                        </span>
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="jd-contact-block img">
                  <img src={MapImg} alt="Map" />
                  <div className="map-overlay">
                    <a
                      href="https://maps.app.goo.gl/RcDoGytNG36BPNhL6"
                      target="_blank"
                    >
                      View Map
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="jd_contact-card">
                <h2>Send Us a Message.</h2>
                {/* <p>
                  Have questions? Need a custom quote? Or just want to learn
                  more about how JD Web and Ship can transform your logistics?
                  Reach out to our friendly team – we're always happy to assist
                </p> */}
                <form
                  className="jd_contact_form"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label htmlFor="fname">
                          First Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstname &&
                          formik.errors.firstname && (
                            <span className="text-danger">
                              {formik.errors.firstname}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label htmlFor="lname">
                          Last Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <span className="text-danger">
                            {formik.errors.lastname}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          Email <span>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <span className="text-danger">
                            {formik.errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number (optional)</label>
                        <input
                          type="tel"
                          name="phone_number"
                          value={formik.values.phone_number}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label htmlFor="subject">
                          Subject <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.subject && formik.errors.subject && (
                          <span className="text-danger">
                            {formik.errors.subject}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          Message <span>*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="7"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.message && formik.errors.message && (
                          <span className="text-danger">
                            {formik.errors.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-primary md-block w-100"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
