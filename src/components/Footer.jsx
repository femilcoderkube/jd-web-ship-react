import React from "react";
import BrandLogo from "../assets/images/Brand_Logo.svg";
import EnvelopeIcon from "../assets/images/enevlope.svg";
import CallIcon from "../assets/images/call.svg";
import FacebookIcon from "../assets/images/Facebook.svg";
import InstagramIcon from "../assets/images/Instagram.svg";
import TwitterIcon from "../assets/images/Twitter.svg";
import GooglePlay from "../assets/images/download-buttons/google-play.svg";
import AppleStore from "../assets/images/download-buttons/apple-store.svg";
import { Link, useNavigate } from "react-router-dom";
// import ShopifyStore from "../assets/images/download-buttons/shopify-store.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    // Use setTimeout to ensure scroll happens after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Fallback with smooth behavior
    }, 100); // Delay of 0ms ensures it runs after navigation
  };

  return (
    <footer className="footer" id="main-footer">
      <div className="footer__inner bg-dark pt-4 pb-4">
        <div className="container">
          <div className="row footer_top">
            <div className="footer_wrapper">
              <div className="footer_widget">
                <div className="footer_widget_slogn">
                  <h2 className="h2">
                    Empower your business with our logistic solutions, your
                    catalyst for growth.
                  </h2>
                </div>
                <div className="footer_widget_contact">
                  <ul className="footer_links">
                    <li className="footer_link">
                      <a href="#">
                        <span className="icon">
                          <img src={EnvelopeIcon} alt="" />
                        </span>
                        <span className="text">supprt@jdwebnship.com</span>
                      </a>
                    </li>
                    <li className="footer_link">
                      <a href="#">
                        <span className="icon">
                          <img src={CallIcon} alt="" />
                        </span>
                        <span className="text">+91 9876543210</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_widget">
                <div className="footer_widget_title">
                  <h4 className="h4">Quick Links</h4>
                </div>
                <div className="footer_widget_links">
                  <ul className="footer_links">
                    <li className="footer_link">
                      <Link
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate("/about");
                        }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="footer_link">
                      <Link
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate("/contact");
                        }}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="footer_link">
                      <a href="/terms">Terms Condition</a>
                    </li>
                    <li className="footer_link">
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_widget">
                <div className="footer_widget_title">
                  <h4 className="h4">Social Links</h4>
                </div>
                <div className="footer_widget_links">
                  <ul className="footer_links">
                    <li className="footer_link">
                      <a href="#">
                        <span className="icon">
                          <img src={FacebookIcon} alt="" />
                        </span>
                        <span className="text">Facebook</span>
                      </a>
                    </li>
                    <li className="footer_link">
                      <a href="#">
                        <span className="icon">
                          <img src={InstagramIcon} alt="" />
                        </span>
                        <span className="text">Instagram</span>
                      </a>
                    </li>
                    <li className="footer_link">
                      <a href="#">
                        <span className="icon">
                          <img src={TwitterIcon} alt="" />
                        </span>
                        <span className="text">Twitter</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer_bottom flex-wrap align-items-center justify-content-between">
            <div className="footer__nav-logo">
              <a className="footer__logo" href="/">
                <img className="in-svg" src={BrandLogo} alt="logo" />
              </a>
            </div>
            <div className="footer_nav-downloads">
              <a href="#">
                <img className="in-svg" src={GooglePlay} alt="google play" />
              </a>
              <a href="#">
                <img className="in-svg" src={AppleStore} alt="apple store" />
              </a>
              <a href="#">
                <img
                  className="in-svg"
                  // src={ShopifyStore}
                  alt="shopify store"
                />
              </a>
            </div>
          </div>
          <div className="row footer_copyrights flex-wrap align-items-center justify-content-center">
            <div className="footer__copytext">
              <p>© 2025 All rights reserved. JDwebnship</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
