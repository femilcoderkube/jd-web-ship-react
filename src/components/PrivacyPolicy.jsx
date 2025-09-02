import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="main-content smooth-scroll" id="smooth-wrapper">
      <div id="smooth-content">
        {/* Hero Section */}
        <section className="section hero-section animation-section">
          <div className="section__inner container">
            <div className="hero-section__content row align-items-center">
              <div className="col-12 text-center">
                <h1 className="h1 js-animated-text">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="section jd_terms">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 ml-auto mr-auto jd_terms-col">
                <div className="jd_terms-con">
                  <p>
                    At JDwebnship, we value your privacy and are committed to
                    protecting your personal information. This Privacy Policy
                    explains how we collect, use, and safeguard the information
                    you provide when you use our website, mobile application, or
                    services.
                  </p>

                  <p>
                    We may collect personal details such as your name, email
                    address, phone number, and payment information when you sign
                    up, place an order, or contact us. Additionally, we may
                    collect non-personal information like your device type,
                    browser, IP address, and browsing behavior to help us
                    improve our services and provide a better user experience.
                  </p>

                  <p>
                    The information we collect is primarily used to process your
                    requests, deliver our services, improve website
                    functionality, and communicate important updates. We may
                    also use your details to send promotional offers or
                    newsletters, but only if you have opted in. You always have
                    the option to unsubscribe from marketing communications at
                    any time.
                  </p>

                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. However, we may share information with
                    trusted service providers who assist us in operating our
                    business, such as payment processors, delivery partners, or
                    IT support teams. These third parties are required to keep
                    your information secure and confidential.
                  </p>

                  <p>
                    To protect your data, we use industry-standard security
                    measures including encryption, secure servers, and
                    restricted access. While we do our best to keep your
                    information safe, please understand that no method of online
                    transmission is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>

                  <p>
                    Our website or app may include links to third-party
                    websites. Once you leave our platform, we are not
                    responsible for how those websites handle your information,
                    and we recommend reviewing their privacy policies.
                  </p>

                  <p>
                    You have the right to access, update, or delete your
                    personal information at any time by contacting us directly.
                    If you have any questions about how we handle your data,
                    please reach out to us at{" "}
                    <a
                      className="hover-link"
                      href="mailto:support@jdwebnship.com"
                    >
                      support@jdwebnship.com
                    </a>{" "}
                    or call us at <a href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a>
                    .
                  </p>

                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for legal and regulatory
                    reasons. Any updates will be posted on this page with a
                    revised "Last Updated" date. By continuing to use our
                    services, you agree to the terms of the updated Privacy
                    Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
