"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HomePage() {
  const problems = [
    "High MOQ from China suppliers",
    "Unpredictable landed cost & duties",
    "Quality issues and damaged stock",
    "Dead inventory risk",
    "Cash stuck in imports",
    "Payment delays and logistics chaos",
  ];

  const solutions = [
    "Low MOQ support: Start with 50-100 per SKU",
    "Guaranteed landed cost: Know your exact cost and profit before buying",
    "Pre-import QC: Quality check before dispatch",
    "Ready-to-sell goods: Barcode, size tag, packaging, private label",
    "Faster access to trends: Get edge with trending items",
  ];

  return (
    <>
      <section className="hero-hm__section">
        <div className="hero-hm__container">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".hero-hm__nav-btn--next",
              prevEl: ".hero-hm__nav-btn--prev",
            }}
            className="hero-hm__swiper"
          >
            {/* Slide 1: Gadgets */}
            <SwiperSlide
              style={{
                backgroundImage:
                  'url("https://static.vecteezy.com/system/resources/previews/001/381/216/non_2x/special-offer-sale-banner-with-megaphone-free-vector.jpg")',
              }}
            >
              {/* <div className="hero-hm__content">
                <h2>Spend Your<br />Salary Smartly</h2>
                <div className="hero-hm__badge">
                  get upto <span>85% off</span>
                </div>
              </div> */}
            </SwiperSlide>

            {/* Slide 2: Womens Day */}
            <SwiperSlide
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2070&auto=format&fit=crop")',
              }}
            >
              <div className="hero-hm__content hero-hm__content--center hero-hm__content--womens">
                <h2>
                  Women's Day <span>special sale</span>
                </h2>
                <div className="hero-hm__badge">
                  get upto <span>80% off</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3: Free Shipping */}
            <SwiperSlide
              style={{
                backgroundColor: "#1110111c",
                backgroundImage:
                  'url("https://www.metrojunction.co/images/offer-1.jpg")',
                backgroundBlendMode: "overlay",
              }}
            >
              {/* <div className="hero-hm__content hero-hm__content--right hero-hm__content--shipping">
                <h2>SHOP FREELY WITH<br /><span>DEODAP</span> FREE SHIPPING</h2>
                <div className="hero-hm__fees">₹0 FEES</div>
                <div className="hero-hm__low">LOWEST PRICE</div>
              </div> */}
            </SwiperSlide>

            {/* Navigation Buttons */}
            <div className="hero-hm__nav-btn hero-hm__nav-btn--prev">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="hero-hm__nav-btn hero-hm__nav-btn--next">
              <i className="fas fa-chevron-right"></i>
            </div>
          </Swiper>
        </div>
      </section>

      <section id="top-selling" className="hm_category_section section-padding">
        <div className="container">
          <h3 className="text-center mb-4">Top Selling</h3>
          <div className="row g-3">
            <div className="col-6 col-6 col-md-2">
              <div className="ctategory_card_hm">
                <div className="category_img-warpper">
                  <img
                    src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery-500x500.jpg"
                    alt="ccateimges"
                  />
                  <p>Top Selling</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="ctategory_card_hm">
                <div className="category_img-warpper">
                  <img
                    src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery-500x500.jpg"
                    alt="ccateimges"
                  />
                  <p>Top Selling</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="ctategory_card_hm">
                <div className="category_img-warpper">
                  <img
                    src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery-500x500.jpg"
                    alt="ccateimges"
                  />
                  <p>Top Selling</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="ctategory_card_hm">
                <div className="category_img-warpper">
                  <img
                    src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery-500x500.jpg"
                    alt="ccateimges"
                  />
                  <p>Top Selling</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="ctategory_card_hm">
                <div className="category_img-warpper">
                  <img
                    src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery-500x500.jpg"
                    alt="ccateimges"
                  />
                  <p>Top Selling</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="ctategory_card_hm">
                <div className="category_img-warpper">
                  <img
                    src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery-500x500.jpg"
                    alt="ccateimges"
                  />
                  <p>Top Selling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="top-treanding" className="section-padding hm_top_treanding_section">
        <div className="container">
          <h3 className="text-center mb-4">Top Treanding</h3>

          <div className="row g-3">
            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_treanding_card">
                <div className="hm_top_treanding_img-warpper">
                  <img
                    src="https://images.meesho.com/images/marketing/1744634871107.webp"
                    alt="ccateimges"
                  />
                </div>
                <p>Top Treanding</p>
              </div>
            </div>

            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_treanding_card">
                <div className="hm_top_treanding_img-warpper">
                  <img
                    src="https://images.meesho.com/images/marketing/1744634780426.webp"
                    alt="ccateimges"
                  />
                </div>
                <p>Top Treanding</p>
              </div>
            </div>

            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_treanding_card">
                <div className="hm_top_treanding_img-warpper">
                  <img
                    src="https://images.meesho.com/images/marketing/1744634725496.webp"
                    alt="ccateimges"
                  />
                </div>
                <p>Top Treanding</p>
              </div>
            </div>

            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_treanding_card">
                <div className="hm_top_treanding_img-warpper">
                  <img
                    src="https://images.meesho.com/images/marketing/1744634937295.webp"
                    alt="ccateimges"
                  />
                </div>
                <p>Top Treanding</p>
              </div>
            </div>

            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_treanding_card">
                <div className="hm_top_treanding_img-warpper">
                  <img
                    src="https://images.meesho.com/images/marketing/1744634654837.webp"
                    alt="ccateimges"
                  />
                </div>
                <p>Top Treanding</p>
              </div>
            </div>
            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_treanding_card">
                <div className="hm_top_treanding_img-warpper">
                  <img
                    src="https://images.meesho.com/images/marketing/1744634654837.webp"
                    alt="ccateimges"
                  />
                </div>
                <p>Top Treanding</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="how-itworks" className="section-padding how-it-works">
        <div className="container">
          <h3 className="text-center mb-2">How It Works</h3>
          <p className="text-center text-muted mb-4">
            Left side is the challenge. Right side is our clear solution.
          </p>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="how-it-works__panel how-it-works__panel--problem h-100">
                <h4>Problems</h4>
                <ul className="how-it-works__list">
                  {problems.map((item, index) => (
                    <li key={item}>
                      <span>{index + 1}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="how-it-works__panel how-it-works__panel--solution h-100">
                <h4>Our Solutions</h4>
                <ul className="how-it-works__list">
                  {solutions.map((item, index) => (
                    <li key={item}>
                      <span>{index + 1}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="section-padding">
        <div className="container">
          <h3 className="text-center mb-4">Why Choose Us</h3>
          <p className="text-center text-muted mb-0">
            Competitive pricing, reliable delivery, and strong product variety
            for drop shipping growth.
          </p>
        </div>
      </section>

      <section id="contact-us" className="section-padding bg-light">
        <div className="container text-center">
          <h3 className="mb-3">Contact Us</h3>
          <p className="mb-1">Email: care@deodap.com</p>
          <p className="mb-0">Phone: +91 9638666607</p>
        </div>
      </section>
    </>
  );
}
