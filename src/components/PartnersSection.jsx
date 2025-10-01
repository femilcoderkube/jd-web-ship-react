import React from "react";
import shadowfax from "../assets/images/shadowfax.png";
import bluedart from "../assets/images/bluedart.png";
import delhivery from "../assets/images/delhivery.png";
import xpressbees from "../assets/images/xpressbees.png";

const PartnersSection = () => {
  const partnerImages = [shadowfax, bluedart, delhivery, xpressbees];

  return (
    <section className="section partners_section pb-6 pt-4">
      <div className="section__inner">
        <div className="section__header">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="text-center">
                  <h2 className="section__header-heading">
                    Partners who support us
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__body">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="slider_partners_wrapper">
                  {[1, 2].map((_, slideIndex) => (
                    <div className="slider_partners" key={slideIndex}>
                      {partnerImages.map((image, imgIndex) => (
                        <div className="partner_slide card" key={`${slideIndex}-${imgIndex}`}>
                          <img src={image} alt={`Partner ${imgIndex + 1}`} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;