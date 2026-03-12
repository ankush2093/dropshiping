"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HomePage() {
  const heroSlides = [
    {
      eyebrow: "Starting Rs99",
      title: "Bottles & lunch boxes",
      subtitle: "Borosil | pexpo",
      note: "Free delivery on first order",
      offer: "Up to Rs4,500 instant discount on card EMI transactions",
      backgroundImage:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2400&auto=format&fit=crop",
      productImage:
        "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=1200&auto=format&fit=crop",
    },
    {
      eyebrow: "New season deals",
      title: "Kitchen tools & storage",
      subtitle: "Home utility collection",
      note: "Best sellers picked for daily use",
      offer: "Extra savings on combo packs and starter kits",
      backgroundImage:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2400&auto=format&fit=crop",
      productImage:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
    },
    {
      eyebrow: "Upgrade your setup",
      title: "Desk essentials from Rs149",
      subtitle: "Workstation must-haves",
      note: "Fast moving items for resale",
      offer: "Bulk pricing available for selected office products",
      backgroundImage:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2400&auto=format&fit=crop",
      productImage:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const heroCategories = [
    {
      title: "Appliances for your home | Up to 55% off",
      cta: "See more",
      items: [
        {
          label: "Air conditioners",
          image:
            "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Refrigerators",
          image:
            "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Microwaves",
          image:
            "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Washing machines",
          image:
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=900&auto=format&fit=crop",
        },
      ],
    },
    {
      title: "Bulk order discounts + up to 18% GST savings",
      cta: "Create a free account",
      items: [
        {
          label: "Laptops",
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Kitchen appliances",
          image:
            "https://images.unsplash.com/photo-1585515656816-1e95b55d8d56?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Office furniture",
          image:
            "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Business supplies",
          image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=900&auto=format&fit=crop",
        },
      ],
    },
    {
      title: "Starting Rs49 | Deals on home essentials",
      cta: "Explore all",
      items: [
        {
          label: "Cleaning supplies",
          image:
            "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Bathroom accessories",
          image:
            "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Home tools",
          image:
            "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Wallpapers",
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
        },
      ],
    },
    {
      title: "Automotive essentials | Up to 60% off",
      cta: "See more",
      items: [
        {
          label: "Cleaning accessories",
          image:
            "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Tyre & rim care",
          image:
            "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Helmets",
          image:
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Vacuum cleaner",
          image:
            "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=900&auto=format&fit=crop",
        },
      ],
    },
  ];

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
        <div className="">
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
            {heroSlides.map((slide) => (
              <SwiperSlide
                key={slide.title}
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 28%, rgba(255,255,255,0.18) 58%, rgba(255,255,255,0.02) 100%), url("${slide.backgroundImage}")`,
                }}
              >
                <div className="hero-hm__banner">
                  <div className="hero-hm__content">
                    <span className="hero-hm__eyebrow">{slide.eyebrow}</span>
                    <h1>{slide.title}</h1>
                    <p className="hero-hm__brand">{slide.subtitle}</p>
                    <div className="hero-hm__note">{slide.note}</div>
                    {/* <div className="hero-hm__offer">{slide.offer}</div> */}
                  </div>

                  <div className="hero-hm__product-wrap">
                    <img
                      className="hero-hm__product"
                      src={slide.productImage}
                      alt={slide.title}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="hero-hm__nav-btn hero-hm__nav-btn--prev">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="hero-hm__nav-btn hero-hm__nav-btn--next">
              <i className="fas fa-chevron-right"></i>
            </div>
          </Swiper>
            <div className="container">
          <div className="hero-hm__cards">
            {heroCategories.map((category) => (
              <article key={category.title} className="hero-hm__card">
                <h3>{category.title}</h3>
                <div className="hero-hm__card-grid">
                  {category.items.map((item) => (
                    <div key={item.label} className="hero-hm__card-item">
                      <img src={item.image} alt={item.label} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <a href="#top-selling">{category.cta}</a>
              </article>
            ))}
          </div>
          </div>
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

      <section
        id="top-treanding"
        className="section-padding hm_top_treanding_section"
      >
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

      <section id="top-treanding" className="section-padding hm_top_cat_section">
        <div className="container">
          <h3 className="text-center mb-4">Top Treanding</h3>

          <div className="row g-3">
            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_cat_card">
                <img
                  src="/img/coming_soon_cat .png"
                  alt="Casual Wear"
                  className="hm_top_cat_card_img"
                />

                <div className="hm_top_cat_card_title">Casual Wear</div>
              </div>
            </div>
            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_cat_card">
                <img
                  src="/img/coming_soon_cat .png"
                  alt="Casual Wear"
                  className="hm_top_cat_card_img"
                />

                <div className="hm_top_cat_card_title">Casual Wear</div>
              </div>
            </div>
            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_cat_card">
                <img
                  src="/img/coming_soon_cat .png"
                  alt="Casual Wear"
                  className="hm_top_cat_card_img"
                />

                <div className="hm_top_cat_card_title">Casual Wear</div>
              </div>
            </div>
            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_cat_card">
                <img
                  src="/img/coming_soon_cat .png"
                  alt="Casual Wear"
                  className="hm_top_cat_card_img"
                />

                <div className="hm_top_cat_card_title">Casual Wear</div>
              </div>
            </div>
            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_cat_card">
                <img
                  src="/img/coming_soon_cat .png"
                  alt="Casual Wear"
                  className="hm_top_cat_card_img"
                />

                <div className="hm_top_cat_card_title">Casual Wear</div>
              </div>
            </div>
            <div className="col-6 col-6 col-md-2">
              <div className="hm_top_cat_card">
                <img
                  src="/img/coming_soon_cat .png"
                  alt="Casual Wear"
                  className="hm_top_cat_card_img"
                />

                <div className="hm_top_cat_card_title">Casual Wear</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding electronics-coming-soon">
        <div className="container">
       
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

      <section
        id="business-analysis"
        className="section-padding business-analysis"
      >
        <div className="container">
          <div className="business-analysis__heading">
            <h3 className="text-center mb-2">Business Analysis</h3>
            <p className="text-center text-muted mb-4">
              Powerful feature set to quickly evaluate product potential and
              profit.
            </p>
          </div>

          <div className="business-analysis__metrics">
            {analysisMetrics.map((item, index) => (
              <div className="business-analysis__metric-card" key={item}>
                <span className="business-analysis__metric-index">
                  {index + 1}
                </span>
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
                Need help with product sourcing or business setup? Our team is
                ready to support you.
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
              <a
                href="https://wa.me/919638666607"
                target="_blank"
                rel="noreferrer"
                className="contact-us__btn contact-us__btn--whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <a
                href="mailto:care@deodap.com"
                className="contact-us__btn contact-us__btn--mail"
              >
                <i className="fas fa-paper-plane"></i> Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
