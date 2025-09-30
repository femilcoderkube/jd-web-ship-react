import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import SvgInline from "./SvgInline"; // Import the new component
import HeroGraphic from "../assets/images/hero-section-graphic.svg";

const HeroSection = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current || !sectionRef.current || !contentRef.current) {
      console.warn("HeroSection refs not found:", {
        textRef: textRef.current,
        sectionRef: sectionRef.current,
        contentRef: contentRef.current,
      });
      return;
    }

    const splitResult = Splitting({ target: textRef.current, by: "words" });
    const words = splitResult[0]?.words || [];

    if (words.length === 0) {
      console.warn("Splitting failed: No words found");
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([words, contentRef.current, sectionRef.current]);
    };
  }, []);

  return (
    <section
      className="section hero-section animation-section"
      ref={sectionRef}
    >
      <div className="section__inner container">
        <div className="hero-section__content row align-items-center">
          <div className="col-12 col-lg-6">
            <h1 className="h1 js-animated-text" ref={textRef}>
              Simplify Your Shipping – All in One Place
            </h1>
            <p>
              We are India's trusted shipping aggregator, helping businesses
              save time, reduce costs, and deliver faster.
            </p>
            <a className="btn btn-primary" href="#">
              Get Started For Free
            </a>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="hero-section__assets animation-content"
              ref={contentRef}
            >
              <SvgInline
                src={HeroGraphic}
                className="in-svg"
                id="hero-graphic"
                alt="Hero Graphic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
