import React from "react";
import Envelope from "../assets/images/enevlope.svg";
import Call from "../assets/images/call.svg";
import MapPin from "../assets/images/map-pin.svg";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import Twitter from "../assets/images/Twitter.svg";
import BrandLogo from "../assets/images/Brand_Logo.svg";
import MapImg from "../assets/images/map.jpg";

const ContactSection = () => {
  return (
    <div className="main-content smooth-scroll" id="smooth-wrapper">
      {/* Hero Section */}
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
                        123 Business Street, City, Country – ZIP
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
                <form className="jd_contact_form">
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label htmlFor="fname">
                          First Name <span>*</span>
                        </label>
                        <input type="text" id="fname" name="fname" required />
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label htmlFor="lname">
                          Last Name <span>*</span>
                        </label>
                        <input type="text" id="lname" name="lname" required />
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          Email <span>*</span>
                        </label>
                        <input type="email" id="email" name="email" required />
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number (optional)</label>
                        <input type="tel" id="phone" name="phone" />
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" />
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label htmlFor="message">Message box</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="7"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-primary md-block w-100"
                      >
                        Send Message
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
