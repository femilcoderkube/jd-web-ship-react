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
                        “I listed my products within an hour and started getting
                        orders the same day. No fees, no stress – just pure
                        business.”
                      </p>
                    </div>
                    <div className="reviewers">
                      <span className="name">Ramesh Gupta,</span>
                      <span className="designation">Wholesaler</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial_slide swiper-slide card">
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
                  </SwiperSlide>
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
