"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HomePage() {
  const analysisMetrics = [
    "Vendor Availability on Amazon",
    "Vendor Availability on Flipkart",
    "Average Sale / Month",
    "Competition Score",
    "Demand Score",
  ];

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

  const profitInputs = [
    "Average Price from China / pc",
    "Discount for bigger quantity",
    "Freight Cost / Landed / GST / Duties",
    "Packaging Cost",
    "Private Label",
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

      <section className="section-padding electronics-coming-soon">
        <div className="container">
          <div className="electronics-coming-soon__card text-center">
            <p className="electronics-coming-soon__badge mb-2">Coming Soon</p>
            <h3 className="mb-2">Electronics</h3>
            <p className="mb-0">New electronics category is launching shortly.</p>
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

      <section id="business-analysis" className="section-padding business-analysis">
        <div className="container">
          <div className="business-analysis__heading">
            <h3 className="text-center mb-2">Business Analysis</h3>
            <p className="text-center text-muted mb-4">
              Powerful feature set to quickly evaluate product potential and profit.
            </p>
          </div>

          <div className="business-analysis__metrics">
            {analysisMetrics.map((item, index) => (
              <div className="business-analysis__metric-card" key={item}>
                <span className="business-analysis__metric-index">{index + 1}</span>
                <p>{item}</p>
                <span className="business-analysis__metric-value">#</span>
              </div>
            ))}
          </div>

          <div className="business-analysis__profit-builder">
            <h4>Profit Graph / Builder</h4>
            <div className="business-analysis__flow">
              {profitInputs.map((item) => (
                <div className="business-analysis__flow-item" key={item}>
                  <span>{item}</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              ))}
              <div className="business-analysis__flow-item business-analysis__flow-item--highlight">
                <span>Current Selling Price in Indian Market</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>

            <div className="business-analysis__result">
              <p className="mb-0">
                Profit Margin <strong>→ %</strong>
              </p>
              <button type="button" className="business-analysis__order-btn">
                Order
              </button>
            </div>
          </div>
        </div>
      </section>


      <section id="contact-us" className="section-padding contact-us">
        <div className="container">
          <div className="contact-us__wrap">
            <div className="contact-us__head text-center">
              <h3 className="mb-2">Contact Us</h3>
              <p className="mb-0">
                Need help with product sourcing or business setup? Our team is ready to support you.
              </p>
            </div>

            <div className="row g-3 mt-1">
              <div className="col-md-6">
                <a className="contact-us__card" href="mailto:care@deodap.com">
                  <span className="contact-us__icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <div>
                    <small>Email Us</small>
                    <p>care@deodap.com</p>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a className="contact-us__card" href="tel:+919638666607">
                  <span className="contact-us__icon">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <div>
                    <small>Call Us</small>
                    <p>+91 9638666607</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-us__actions">
              <a href="https://wa.me/919638666607" target="_blank" rel="noreferrer" className="contact-us__btn contact-us__btn--whatsapp">
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <a href="mailto:care@deodap.com" className="contact-us__btn contact-us__btn--mail">
                <i className="fas fa-paper-plane"></i> Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
