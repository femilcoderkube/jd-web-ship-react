import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import HeroGraphic from "../assets/images/hero-section-graphic.svg";

const HeroSection = () => {
  const textRef = useRef(null); // Ref for h1 element
  const sectionRef = useRef(null); // Ref for section element
  const contentRef = useRef(null); // Ref for animation-content

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

    // Run Splitting on the h1 element
    const splitResult = Splitting({ target: textRef.current, by: "words" });
    const words = splitResult[0]?.words || [];

    if (words.length === 0) {
      console.warn("Splitting failed: No words found");
      return;
    }

    // GSAP animation for .word elements
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

    tl.from(
      contentRef.current,
      {
        opacity: 0,
        duration: 1.3,
        x: "10em",
        transformOrigin: "0% 100%",
        ease: "ease",
      },
      "-=100%",
    );

    // ScrollTrigger animation for the section
    const tline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1, // Smoother scrubbing
        start: "top top", // Start when section top hits viewport top
        end: "bottom top", // End when section bottom hits viewport top
        anticipatePin: 1, // Prevent jumpiness
      },
    });

    tline.to(sectionRef.current, { y: "25vh", duration: 1 });
    tline.to(contentRef.current, { opacity: 0, duration: 1 }, "-=0.5");

    // Cleanup
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
              We ship success, <br />
              You win customers.
            </h1>
            <p>Start Free. Grow Limitless. Zero Fees.</p>
            <a className="btn btn-primary" href="#">
              Get Started For Free
            </a>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="hero-section__assets animation-content"
              ref={contentRef}
            >
              <img className="in-svg" src={HeroGraphic} alt="Hero Graphic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
