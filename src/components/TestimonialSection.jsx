import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSection = () => {
  const remToPx = (rem) =>
    rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

  return (
    <section className="section testimonial_section pb-4 pt-4">
      <div className="section__inner">
        <div className="section__header">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="text-center">
                  <h2 className="section__header-heading">Testimonials</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__body">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <Swiper
                  className="slider_testimonial_wrapper"
                  modules={[Pagination, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={remToPx(1.5)}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: remToPx(1.5) },
                    992: { slidesPerView: 3, spaceBetween: remToPx(1.5) },
                    1024: { slidesPerView: 4, spaceBetween: remToPx(1.5) },
                  }}
                >
                  <SwiperSlide className="testimonial_slide swiper-slide card">
                    <div className="review">
                      <p>
                        Selling online was confusing for me earlier, but JD Web
                        & Ship made the whole process simple. I could upload my
                        products easily and started getting orders in no time.
                      </p>
                    </div>
                    <div className="reviewers">
                      <span className="name">Ramesh Kumar,</span>
                      {/* <span className="designation">Wholesaler</span> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
                    <div className="review">
                      <p>
                        What I liked the most is how easy it is to build a store
                        here. Even without any technical knowledge, I created my
                        shop and the support team guided me step by step.
                      </p>
                    </div>
                    <div className="reviewers">
                      <span className="name">Pooja Shah,</span>
                      {/* <span className="designation">Retailer</span> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
                    <div className="review">
                      <p>
                        As a wholesaler, reaching new customers was always a
                        challenge. With JD Web & Ship, I found a fair and
                        transparent way to sell online, and it also saved me a
                        lot of effort.
                      </p>
                    </div>
                    <div className="reviewers">
                      <span className="name">Arjun Patel,</span>
                      {/* <span className="designation">Retailer</span> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
                    <div className="review">
                      <p>
                        I was already using Shopify, but connecting it with JD
                        Web & Ship was very smooth. Now I can manage my products
                        and sales in one place without any hassle.
                      </p>
                    </div>
                    <div className="reviewers">
                      <span className="name">Sneha Verma ,</span>
                      {/* <span className="designation">Retailer</span> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
                    <div className="review">
                      <p>
                        For me, the best thing about JD Web & Ship is the
                        simplicity. It’s affordable, easy to use, and lets me
                        focus fully on my business instead of technical work.
                      </p>
                    </div>
                    <div className="reviewers">
                      <span className="name">Mohammed Ali,</span>
                      {/* <span className="designation">Retailer</span> */}
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide className="testimonial_slide swiper-slide card">
                    <div className="review">
                      <p>
                        “Creating my store was so easy. Now I can sell directly
                        to my customers and grow without worrying about extra
                        costs.”
                      </p>
                    </div>
                    <div className="reviewers">
                      <span className="name">Priya Shah,</span>
                      <span className="designation">Retailer</span>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
