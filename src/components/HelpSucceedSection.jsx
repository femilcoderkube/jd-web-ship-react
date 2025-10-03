import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import allInOne from "../assets/images/success-icons/all-in-One.svg";
import freeWebsite from "../assets/images/success-icons/free-website.svg";
import realTime from "../assets/images/success-icons/real-time-tracking.svg";
import integration from "../assets/images/success-icons/seamless-integration.svg";
import shipRate from "../assets/images/success-icons/shipping-rates.svg";

const HelpSucceedSection = () => {
  useEffect(() => {
    const section = document.querySelector(".grid__boxes");
    const cardItems = section.querySelectorAll(".card");

    gsap.set(cardItems, { opacity: 0, y: 50 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          once: true,
        },
      })
      .to(cardItems, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });
  }, []);

  return (
    <section className="section section__2 pb-4 pt-4">
      <div className="section__inner">
        <div className="section__header">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="text-center">
                  <h2 className="section__header-heading">
                    We Help You Succeed
                  </h2>
                  <p>The only company that works for your profitability!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__body">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="grid__boxes help-success-cards">
                  <div className="box-1 help-success-card">
                    <div className="card__asset">
                      <img src={allInOne} alt="one platform" />
                    </div>
                    <div className="card__title text-center">
                      <h6 className="h6">All-in-One Shipping Platform </h6>
                      <p>
                        Access multiple courier partners on a single platform
                        for easy and fast shipping .
                      </p>
                    </div>
                  </div>
                  <div className="box-2 help-success-card">
                    <div className="card__asset">
                      <img src={shipRate} alt="Free Online Store" />
                    </div>
                    <div className="card__title text-center">
                      <h6 className="h6">Best Shipping Rates</h6>
                      <p>
                        Save money with discounted rates across India’s leading
                        courier services, ideal for wholesalers and retailers
                      </p>
                    </div>
                  </div>
                  <div className="box-3 help-success-card">
                    <div className="card__asset">
                      <img src={freeWebsite} alt="Transparent System" />
                    </div>
                    <div className="card__title text-center">
                      <h6 className="h6">Free Website</h6>
                      <p>
                        Start selling online instantly with a free website
                        connected to our shipping services.
                      </p>
                    </div>
                  </div>
                  <div className="box-4 help-success-card">
                    <div className="card__asset">
                      <img src={integration} alt="For Everyone" />
                    </div>
                    <div className="card__title text-center">
                      <h6 className="h6">Seamless Integration</h6>
                      <p>
                        Connect your Shopify store to our platform for automatic
                        order processing, easy shipping management, and
                        real-time tracking
                      </p>
                    </div>
                  </div>
                  <div className="box-5 help-success-card">
                    <div className="card__asset">
                      <img src={realTime} alt="Easy Growth" />
                    </div>
                    <div className="card__title text-center">
                      <h6 className="h6">Real-Time Tracking</h6>
                      <p>
                        Keep your customers informed with live shipment updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSucceedSection;
