import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

import Envelope from "../assets/images/enevlope.svg";
import Call from "../assets/images/call.svg";
import MapPin from "../assets/images/map-pin.svg";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import Twitter from "../assets/images/Twitter.svg";

import MapImg from "../assets/images/map.jpg";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

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
    <div className="main-content smooth-scroll" id="smooth-wrapper">
      {/* Hero Section */}

      <div id="smooth-content">
        <section className="section hero-section animation-section">
          <div className="section__inner container">
            <div className="hero-section__content row align-items-center">
              <div className="col-12 text-center">
                <h1 className="h1 js-animated-text">Contact Us</h1>
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
                          href="mailto:support@jdwebnship.com"
                        >
                          <span className="icon-bg">
                            <img src={Envelope} alt="Email" />
                          </span>
                          support@jdwebnship.com
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
                          href="#"
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
                    <h4>Business Hours</h4>
                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
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
                      <a href="#">View Map</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-6">
                <div className="jd_contact-card">
                  <h2>How can we help?</h2>
                  <p>
                    "We’d love to hear from you. Whether you have a question,
                    feedback, or just want to connect — our team is here"
                  </p>
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
                          {formik.touched.lastname &&
                            formik.errors.lastname && (
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
    </div>
  );
};

export default ContactSection;
