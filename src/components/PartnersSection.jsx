import React from "react";

const PartnersSection = () => {
  const partnerImages = [
    "https://www.lynk.ie/wp-content/uploads/2024/04/Frame.png",
    "https://www.lynk.ie/wp-content/uploads/2024/04/Frame-1.png",
    "https://www.lynk.ie/wp-content/uploads/2024/04/Frame-2.png",
    "https://www.lynk.ie/wp-content/uploads/2024/04/Frame-3.png",
  ];

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
                  {[1, 2].map((_, index) => (
                    <div className="slider_partners" key={index}>
                      {partnerImages.map((src, i) => (
                        <div className="partner_slide card" key={i}>
                          <img src={src} alt="" />
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
