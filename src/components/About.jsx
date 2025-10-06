import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import v1 from "../assets/images/v1.svg";
import v2 from "../assets/images/v2.svg";
import v3 from "../assets/images/v3.svg";
import v4 from "../assets/images/v4.svg";
import v5 from "../assets/images/v5.svg";
import v6 from "../assets/images/v6.svg";
import v7 from "../assets/images/v7.svg";
import mission from "../assets/images/mission.jpg";
import vision from "../assets/images/vision.jpg";
import promise from "../assets/images/promise.jpg";

import "../css/about.css";

const AboutSection = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Additional refs for other sections' text animations
  const otherTextRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero-like animation for the first section
    if (!textRef.current || !sectionRef.current || !contentRef.current) {
      console.warn("AboutSection hero-like refs not found:", {
        textRef: textRef.current,
        sectionRef: sectionRef.current,
        contentRef: contentRef.current,
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

    // Uncomment if you want content slide-in like hero
    // tl.from(
    //   contentRef.current,
    //   {
    //     opacity: 0,
    //     duration: 1.3,
    //     x: "10em",
    //     transformOrigin: "0% 100%",
    //     ease: "ease",
    //   },
    //   "-=100%"
    // );

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
    // tline.to(contentRef.current, { opacity: 0, duration: 1 }, "-=0.5");

    // Animate other headings with simpler stagger (no splitting for brevity, or add if needed)
    otherTextRefs.current.forEach((textEl) => {
      if (!textEl) return;
      gsap.fromTo(
        textEl,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });

    // Animate value cards on scroll
    const cards = document.querySelectorAll(".jd_values-card .card");
    gsap.set(cards, { opacity: 0, y: "50px" });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }),
      start: "top 80%",
    });

    // Animate mission/vision/promise rows
    const rowSelectors = [
      ".jd_about-mission",
      ".jd_about-vision",
      ".jd_about-promise",
    ];
    rowSelectors.forEach((selector) => {
      const rows = document.querySelectorAll(selector);
      rows.forEach((row) => {
        gsap.set(row, { opacity: 0, y: "30px" });
        ScrollTrigger.create({
          trigger: row,
          onEnter: () =>
            gsap.to(row, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            }),
          start: "top 85%",
        });
      });
    });

    // Simple scroll movement for other sections (lighter than hero)
    const otherSections = document.querySelectorAll(
      ".section.jd_about, .section.jd_values, .section.jd_trust"
    );
    otherSections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(sec, { y: self.progress * -10 + "vh", duration: 0.3 });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([
        words,
        contentRef.current,
        sectionRef.current,
        ...otherTextRefs.current,
      ]);
    };
  }, []);

  return (
    <>
      {/* First section mimicking HeroSection exactly */}
      <section
        className="section hero-section animation-section about"
        ref={sectionRef}
      >
        <div className="section__inner container">
          <div className="hero-section__content row align-items-center">
            <div className="col-md-8 col-12 text-center mx-auto">
              <h1 className="h1 js-animated-text" ref={textRef}>
                About Us
              </h1>
              <p ref={contentRef}>
                At JDwebnship, we believe that every business, whether it is a
                small retail shop, a growing wholesaler, or an online seller,
                deserves access to simple, affordable, and reliable shipping
                solutions. We are a leading shipping aggregator in India,
                providing one platform that connects you with top courier
                partners, free tools to sell online, and dedicated support to
                help your business grow without unnecessary costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section jd_about">
        <div className="container">
          <div className="row">
            <div className="col-md-11 col-12 mx-auto">
              <div className="jd_about-cont text-center">
                <h2 ref={(el) => (otherTextRefs.current[0] = el)}>
                  Who We Are
                </h2>
                <p>
                  JDwebnship was founded with a vision to remove the barriers
                  that many businesses face when it comes to shipping and
                  selling. From retailers in local markets to wholesalers
                  supplying across states, logistics is often one of the biggest
                  challenges. That is where we come in.
                </p>
                <p>
                  We provide a cost-free, technology-driven platform that
                  combines shipping, eCommerce, and integrations all in one
                  place. Unlike other services, we do not charge any setup fees
                  or hidden costs. Our goal is simple: make logistics
                  stress-free so you can focus on what truly matters, your
                  customers and your growth.
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
                <h2 ref={(el) => (otherTextRefs.current[1] = el)}>
                  Our Mission
                </h2>
                <p className="font-weight-light">
                  Our mission is to empower businesses of every size with
                  smarter, cost-free shipping and selling solutions. We believe
                  that logistics and technology should work for you, not against
                  you. That is why we offer a platform that eliminates extra
                  costs and provides everything you need to manage sales and
                  deliveries with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="row jd_about-vision">
            <div className="col-md-8">
              <div className="jd_about-vision-cont">
                <h2 ref={(el) => (otherTextRefs.current[2] = el)}>
                  Our Vision
                </h2>
                <p className="font-weight-light">
                  We aim to become India’s most reliable and customer-first
                  shipping aggregator, supporting not just eCommerce sellers but
                  also retailers and wholesalers who want to expand their reach.
                  Our vision is to build a future where businesses of all sizes
                  can sell and deliver without worrying about logistics or
                  technology barriers.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="jd_about-vision-img">
                <img src={vision} alt="" />
              </div>
            </div>
          </div>
          <div className="row jd_about-mission jd_about-promise">
            <div className="col-md-4">
              <div className="jd_about-mission-img">
                <img src={promise} alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="jd_about-mission-cont">
                <h2 ref={(el) => (otherTextRefs.current[3] = el)}>
                  Our Promise
                </h2>
                <p className="font-weight-light">
                  At JDwebnship, we grow when you grow. Our promise is to always
                  keep our platform transparent, affordable, and
                  business-friendly. Whether you are shipping a single order or
                  managing thousands, you will always have our full support to
                  succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section jd_values" id="features">
        <div className="container">
          <div className="row">
            <div className="col-12 jd_values-title">
              <h2 ref={(el) => (otherTextRefs.current[4] = el)}>
                What We Offer
              </h2>
              <p>
                At JDwebnship, we go beyond just shipping. We provide a complete
                package to help you sell and deliver smarter:
              </p>
            </div>
          </div>
          <div className="row jd_values-card">
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v1} alt="" />
                </div>
                <h4>Free Website to Start Selling Instantly</h4>
                <p>
                  You do not need to spend money or time building an online
                  store. We provide you with a ready-to-use website where you
                  can upload your products and start selling immediately.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v2} alt="" />
                </div>
                <h4>Free Shopify Integration</h4>
                <p>
                  Already selling on Shopify? You can easily connect your
                  Shopify store to JDwebnship for seamless order management and
                  direct shipping.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v3} alt="" />
                </div>
                <h4>No Cost to Join</h4>
                <p>
                  We do not charge for using our platform. There are no setup
                  fees or hidden charges, only transparent services designed to
                  support your business.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v4} alt="" />
                </div>
                <h4>Multiple Courier Options</h4>
                <p>
                  Compare courier partners, choose the best delivery option, and
                  save on shipping costs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v5} alt="" />
                </div>
                <h4>Nationwide Coverage</h4>
                <p>
                  Deliver to customers across India with trusted logistics
                  partners.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v6} alt="" />
                </div>
                <h4>Real-Time Tracking</h4>
                <p>
                  Track every order in one simple and user-friendly dashboard.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <img src={v7} alt="" />
                </div>
                <h4>Cash on Delivery Support</h4>
                <p>
                  Handle COD orders with ease and receive settlements without
                  delays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section jd_trust">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 ref={(el) => (otherTextRefs.current[5] = el)}>
                Why Retailers and Wholesalers Trust Us
              </h2>
              <p>
                We understand the unique challenges faced by retailers and
                wholesalers in India such as tight margins, competitive markets,
                and the constant demand for faster deliveries. JDwebnship is
                designed to give you a competitive advantage by providing:
              </p>
              <ul>
                <li>
                  An affordable way to sell online without large investments.
                </li>
                <li>
                  A wide network of courier partners to ensure faster and
                  reliable deliveries
                </li>
                <li>
                  Efficient tools to manage bulk orders which are especially
                  helpful for wholesalers
                </li>
                <li>
                  Savings through competitive shipping rates and free selling
                  tools.
                </li>
              </ul>
              <p>
                By combining logistics with technology, we make sure your
                products reach customers on time which helps you build trust and
                repeat sales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
