import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OnePlatform from "../assets/images/one-platform.png";
import OnlineStore from "../assets/images/online-store.png";
import TransparentSystem from "../assets/images/transparent-system.png";
import ForEveryone from "../assets/images/for-everyone.png";
import EasyGrowth from "../assets/images/easyy-growth.png";

const HelpSucceedSection = () => {
  useEffect(() => {
    const section = document.querySelector(".grid__boxes");
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
    <section className="section section__2 pb-4 pt-4">
      <div className="section__inner">
        <div className="section__header">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="text-center">
                  <h2 className="section__header-heading">
                    We Help You Succeed
                  </h2>
                  <p>The only company that works for your profitability!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__body">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="grid__boxes">
                  <div className="box-1 card">
                    <div className="card__title text-center">
                      <h4 className="h4">One Platform</h4>
                      <p>Manage everything from one place.</p>
                    </div>
                    <div className="card__asset">
                      <img src={OnePlatform} alt="one platform" />
                    </div>
                  </div>
                  <div className="box-2 card">
                    <div className="card__title text-center">
                      <h4 className="h4">Free Online Store</h4>
                      <p>
                        Create your shop instantly, <br />
                        no coding required.
                      </p>
                    </div>
                    <div className="card__asset">
                      <img src={OnlineStore} alt="Free Online Store" />
                    </div>
                  </div>
                  <div className="box-3 card">
                    <div className="card__title text-center">
                      <h4 className="h4">Transparent System</h4>
                      <p>
                        No setup fees, <br />
                        no hidden charges.
                      </p>
                    </div>
                    <div className="card__asset">
                      <img src={TransparentSystem} alt="Transparent System" />
                    </div>
                  </div>
                  <div className="box-4 card">
                    <div className="card__title text-center">
                      <h4 className="h4">For Everyone</h4>
                      <p>
                        Wholesalers and retailers <br />
                        both benefit.
                      </p>
                    </div>
                    <div className="card__asset">
                      <img src={ForEveryone} alt="For Everyone" />
                    </div>
                  </div>
                  <div className="box-5 card">
                    <div className="card__title text-center">
                      <h4 className="h4">Easy Growth</h4>
                      <p>
                        Manage, monitor, and scale <br />
                        your business online.
                      </p>
                    </div>
                    <div className="card__asset">
                      <img src={EasyGrowth} alt="Easy Growth" />
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

export default HelpSucceedSection;
