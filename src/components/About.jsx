import React from "react";
import v1 from "../assets/images/v1.svg";
import v2 from "../assets/images/v2.svg";
import v3 from "../assets/images/v3.svg";
import v4 from "../assets/images/v4.svg";
import v5 from "../assets/images/v5.svg";
import mission from "../assets/images/mission.jpg";
import vision from "../assets/images/vision.jpg";

const AboutSection = () => {
  return (
    <main className="main-content smooth-scroll">
      {/* <div id="smooth-content"> */}
      <section className="section hero-section animation-section about">
        <div className="section__inner container">
          <div className="hero-section__content row align-items-center">
            <div className="col-12 text-center">
              <h1 className="h1 js-animated-text">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section jd_about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="jd_about-cont text-center">
                <h2>Our Story</h2>
                <p>
                  At JD WebnShip, our vision was of an India where logistics
                  weren't an obstacle but an opportunity. Recognizing a gap in
                  India's shipping ecosystem that hindered businesses from
                  accessing courier services efficiently nationwide, we sought
                  to bridge it.
                </p>
              </div>
            </div>
          </div>
          <div className="row jd_about-mission">
            <div className="col-md-4">
              <div className="jd_about-mission-img">
                <img src={mission} alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="jd_about-mission-cont">
                <h2>Our Mission</h2>
                <p className="font-weight-medium">
                  Empowering Indian Businesses Through Smarter Shipping.
                </p>
                <p className="font-weight-light">
                  Our Mission is to streamline logistics for every Indian
                  business, whether large or small, by providing an accessible
                  platform that connects them with reliable, cost-effective
                  shipping solutions. These solutions maximise efficiency,
                  reliability, and convenience, thereby supporting growth by
                  simplifying shipping complexities.
                </p>
              </div>
            </div>
          </div>

          <div className="row jd_about-vision">
            <div className="col-md-8">
              <div className="jd_about-vision-cont">
                <h2>Our Vision</h2>
                <p className="font-weight-medium">
                  The Future of Logistics, Today.
                </p>
                <p className="font-weight-light">
                  As India's premier shipping aggregator, our goal is to be at
                  the forefront of innovation. By continually developing and
                  improving our platform, we aim to incorporate cutting-edge
                  technology, expand our network, and establish new benchmarks
                  for customer satisfaction. Our vision for India's future is
                  that every business can ship easily with confidence, while
                  contributing to the creation of an even stronger nation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="jd_about-vision-img">
                <img src={vision} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section jd_values" id="features">
        <div className="container">
          <div className="row">
            <div className="col-12 jd_values-title">
              <h2>Our Values</h2>
              <p>The Pillars of Our Promise</p>
            </div>
          </div>
          <div className="row jd_values-card">
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v1} alt="" />
                </div>
                <h4>Customer Centricity</h4>
                <p>
                  At our core, customer success is of utmost importance. Our
                  focus is on listening, adapting, and providing customized
                  solutions tailored to each client's unique requirements.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v2} alt="" />
                </div>
                <h4>Innovation</h4>
                <p>
                   At our core, we continually seek better ways to serve you by
                  harnessing the efficiency and simplicity of technology for
                  greater service excellence.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v3} alt="" />
                </div>
                <h4>Transparency</h4>
                <p>
                  At our core, we believe in clear pricing, tracking, and
                  communication - in short, being honest every step of the way.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v4} alt="" />
                </div>
                <h4>Reliability</h4>
                <p>
                  We partner exclusively with top providers to ensure your
                  shipment arrives at its destination safely and on schedule.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v5} alt="" />
                </div>
                <h4>Integrity</h4>
                <p>
                  We operate with the highest ethical standards, cultivating
                  trust with every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </main>
  );
};

export default AboutSection;
