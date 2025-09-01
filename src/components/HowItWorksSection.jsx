import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HowItWorks from "../assets/images/how-it-work.png";

const HowItWorksSection = () => {
  const sectionRef = useRef(null); // Ref for the section
  const timelineRef = useRef(null); // Ref for the timeline ul
  const fillRef = useRef(null); // Ref for the timeline-line-fill

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const list = timelineRef.current;
    const fill = fillRef.current;
    const listItems = list ? list.querySelectorAll("li") : [];

    if (!section || !list || !fill || listItems.length === 0) {
      console.warn("One or more elements not found:", {
        section,
        list,
        fill,
        listItems,
      });
      return;
    }

    // Create GSAP timeline for pinning and fill animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top", // Start pinning when section top hits viewport top
        end: `+=${listItems.length * 200}`, // Adjust duration based on list items
        pin: true, // Pin the section
        scrub: 1, // Smooth scrubbing
        anticipatePin: 1, // Prevent jumpiness
      },
    });

    // Animate the timeline fill line
    gsap.set(fill, { scaleY: 0, transformOrigin: "top left" });
    tl.to(fill, { scaleY: 1, ease: "none", duration: 1 });

    // Animate each list item
    listItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top top",
        end: `+=${listItems.length * 200}`,
        scrub: 1,
        onEnter: () => {
          item.classList.add("active");
        },
        onLeaveBack: () => {
          item.classList.remove("active");
        },
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([fill, listItems]);
    };
  }, []);

  return (
    <section
      className="timeline-section pb-6 pt-4 pin-section"
      id="timeline"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="howit_works_wrapper">
              <div className="section__header">
                <h2 className="section__header-heading">How It Works</h2>
                <p>
                  Your journey to selling online made easy, fast, and completely
                  free.
                </p>
              </div>
              <div className="section__assets">
                <img src={HowItWorks} alt="How It Works Graphic" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="timeline-wrap">
              <div className="timeline-line">
                <div className="timeline-line-fill" ref={fillRef}></div>
              </div>
              <ul className="timeline" ref={timelineRef}>
                <li className="card" data-number="1">
                  <div className="card__title">
                    <h4 className="h4">Create Your Store</h4>
                    <p>
                      Set up your free online store in just minutes—no hidden
                      charges, no setup fee.
                    </p>
                  </div>
                </li>
                <li className="card" data-number="2">
                  <div className="card__title">
                    <h4 className="h4">Add Your Products</h4>
                    <p>
                      Upload your products easily with images, details, and
                      pricing—ready for customers to explore.
                    </p>
                  </div>
                </li>
                <li className="card" data-number="3">
                  <div className="card__title">
                    <h4 className="h4">Start Selling</h4>
                    <p>
                      Share your store link, attract buyers, and grow your sales
                      without paying any commission.
                    </p>
                  </div>
                </li>
                <li className="card" data-number="4">
                  <div className="card__title">
                    <h4 className="h4">Manage & Grow</h4>
                    <p>
                      Track orders, connect with customers, and manage
                      everything from one simple dashboard.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
