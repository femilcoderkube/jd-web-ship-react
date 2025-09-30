import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PricingSection = () => {
  useEffect(() => {
    const section = document.querySelector(".cards");
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
    <section className="section pricing_section pb-4 pt-6">
      <div className="section__inner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="section__header">
                <div className="text-center">
                  <h2 className="section__header-heading">Pricing</h2>
                  <p>
                    We don't charge you anything. Use our platform, manage your
                    shipments, and even get a free website.
                  </p>
                </div>
              </div>
              <div className="section__body">
                <div className="cards">
                  <div className="card-1 card">
                    <div className="card__title text-center">
                      <h2 className="h1">₹0</h2>
                      <h4 className="h4">Subscription Fee</h4>
                      <p>No monthly or yearly charges.</p>
                    </div>
                  </div>
                  <div className="card-2 card">
                    <div className="card__title text-center">
                      <h2 className="h1">₹0</h2>
                      <h4 className="h4">Website Setup & Maintenance</h4>
                      <p>Get your free business website with no cost.</p>
                    </div>
                  </div>
                  <div className="card-3 card">
                    <div className="card__title text-center">
                      <h2 className="h1">0%</h2>
                      <h4 className="h4">
                        Commission
                        {/* on <br />
                        Marketing Spend */}
                      </h4>
                      <p> You keep 100% of your earnings.</p>
                    </div>
                  </div>
                  <div className="card-4 card">
                    <div className="card__title text-center">
                      <h2 className="h1">₹0</h2>
                      <h4 className="h4">Hidden Charges</h4>
                      <p>Pay only your courier fees, nothing extra.</p>
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

export default PricingSection;
