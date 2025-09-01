import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductIcon from "../assets/images/features-icons/product.svg";
import MiddlemenIcon from "../assets/images/features-icons/middlemen.svg";
import SetupIcon from "../assets/images/features-icons/setup.svg";
import SecureIcon from "../assets/images/features-icons/secure.svg";
import StoreIcon from "../assets/images/features-icons/store.svg";
import TrackingIcon from "../assets/images/features-icons/tracking.svg";
// import MobileFriendlyIcon from "../assets/images/features-icons/mobile-friendly.svg";

const FeaturesSection = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".animate-circle");
    const radius = 15.5;
    const total = circles.length;

    circles.forEach((circle, i) => {
      const angle = (i / total) * Math.PI * 2;
      const x = `${Math.cos(angle) * radius}rem`;
      const y = `${Math.sin(angle) * radius}rem`;

      gsap.fromTo(
        circle,
        { x: 0, y: 0, opacity: 0, scale: 0.5 },
        {
          x,
          y,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: ".features-section",
            start: "top center",
            once: true,
          },
        },
      );
    });
  }, []);

  return (
    <section className="features-section pb-6 pt-6 pin-section" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="features-wrap">
              <div className="features">
                <div className="feature animate-circle" data-number="1">
                  <div className="_icon">
                    <img className="in-svg" src={ProductIcon} alt="" />
                  </div>
                  <div className="_title">
                    <h6 className="h6">Unlimited Product Uploads</h6>
                  </div>
                </div>
                <div className="feature animate-circle" data-number="2">
                  <div className="_icon">
                    <img className="in-svg" src={MiddlemenIcon} alt="" />
                  </div>
                  <div className="_title">
                    <h6 className="h6">No Middlemen</h6>
                  </div>
                </div>
                <div className="feature animate-circle" data-number="3">
                  <div className="_icon">
                    <img className="in-svg" src={SetupIcon} alt="" />
                  </div>
                  <div className="_title">
                    <h6 className="h6">No Setup Cost</h6>
                  </div>
                </div>
                <div className="feature" data-number="4">
                  <div className="_icon">
                    <img className="in-svg" src={SecureIcon} alt="" />
                  </div>
                  <div className="_title">
                    <h6 className="h6">Safe & Secure</h6>
                  </div>
                </div>
                <div className="feature animate-circle" data-number="4">
                  <div className="_icon">
                    <img className="in-svg" src={StoreIcon} alt="" />
                  </div>
                  <div className="_title">
                    <h6 className="h6">Easy Store Creation</h6>
                  </div>
                </div>
                <div className="feature animate-circle" data-number="4">
                  <div className="_icon">
                    <img className="in-svg" src={TrackingIcon} alt="" />
                  </div>
                  <div className="_title">
                    <h6 className="h6">Order & Payment Tracking</h6>
                  </div>
                </div>
                <div className="feature animate-circle" data-number="4">
                  <div className="_icon">
                    {/* <img className="in-svg" src={MobileFriendlyIcon} alt="" /> */}
                  </div>
                  <div className="_title">
                    <h6 className="h6">Mobile-Friendly</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="features_section_header">
              <div className="section__header">
                <h2 className="section__header-heading">
                  Everything You Need to Sell Smarter
                </h2>
                <p>
                  From product uploads to order management, we’ve got all the
                  tools you need in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
