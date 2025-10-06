import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import "../css/terms.css";

const PrivacyPolicy = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero-like animation for the first section
    if (!textRef.current || !sectionRef.current) {
      console.warn("PrivacySection hero-like refs not found:", {
        textRef: textRef.current,
        sectionRef: sectionRef.current,
      });
      return;
    }

    const splitResult = Splitting({ target: textRef.current, by: "words" });
    const words = splitResult[0]?.words || [];

    if (words.length === 0) {
      console.warn("Splitting failed: No words found for main heading");
      return;
    }

    const tl = gsap.timeline();
    tl.set(words, { x: "1em", opacity: 0, ease: "power1.inOut" });
    tl.to(words, {
      opacity: 1,
      x: "0em",
      duration: 1.3,
      stagger: { from: "left", amount: 1.25 },
      transformOrigin: "0% 100%",
      ease: "ease",
    });

    const tline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        start: "top top",
        end: "bottom top",
        anticipatePin: 1,
      },
    });

    tline.to(sectionRef.current, { y: "25vh", duration: 1 });

    // Animate privacy content paragraphs on scroll
    const paragraphs = document.querySelectorAll(".jd_terms-con p");
    gsap.set(paragraphs, { opacity: 0, y: "20px" });

    ScrollTrigger.batch(paragraphs, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
        }),
      start: "top 80%",
    });

    // Simple scroll movement for the main privacy section (lighter)
    const privacySection = document.querySelector(".section.jd_terms");
    if (privacySection) {
      ScrollTrigger.create({
        trigger: privacySection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(privacySection, {
            y: self.progress * -10 + "vh",
            duration: 0.3,
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([words, sectionRef.current]);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="section hero-section animation-section terms"
        ref={sectionRef}
      >
        <div className="section__inner container">
          <div className="hero-section__content row align-items-center">
            <div className="col-12 text-center">
              <h1 className="h1 js-animated-text" ref={textRef}>
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section jd_terms" ref={contentRef}>
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
                  browser, IP address, and browsing behavior to help us improve
                  our services and provide a better user experience.
                </p>

                <p>
                  The information we collect is primarily used to process your
                  requests, deliver our services, improve website functionality,
                  and communicate important updates. We may also use your
                  details to send promotional offers or newsletters, but only if
                  you have opted in. You always have the option to unsubscribe
                  from marketing communications at any time.
                </p>

                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. However, we may share information with trusted
                  service providers who assist us in operating our business,
                  such as payment processors, delivery partners, or IT support
                  teams. These third parties are required to keep your
                  information secure and confidential.
                </p>

                <p>
                  To protect your data, we use industry-standard security
                  measures including encryption, secure servers, and restricted
                  access. While we do our best to keep your information safe,
                  please understand that no method of online transmission is
                  100% secure, and we cannot guarantee absolute security.
                </p>

                <p>
                  Our website or app may include links to third-party websites.
                  Once you leave our platform, we are not responsible for how
                  those websites handle your information, and we recommend
                  reviewing their privacy policies.
                </p>

                <p>
                  You have the right to access, update, or delete your personal
                  information at any time by contacting us directly. If you have
                  any questions about how we handle your data, please reach out
                  to us at{" "}
                  <a
                    className="hover-link"
                    href="mailto:support@jdwebnship.com"
                  >
                    support@jdwebnship.com
                  </a>{" "}
                  or call us at <a href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a>.
                </p>

                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for legal and regulatory reasons.
                  Any updates will be posted on this page with a revised "Last
                  Updated" date. By continuing to use our services, you agree to
                  the terms of the updated Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
