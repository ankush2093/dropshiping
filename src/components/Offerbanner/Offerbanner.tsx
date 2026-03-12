"use client";

import styles from "./offer-banner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const banners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
    href: "javascript:void(0)",
    alt: "Offer banner one",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    href: "javascript:void(0)",
    alt: "Offer banner two",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "javascript:void(0)",
    alt: "Offer banner three",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    href: "javascript:void(0)",
    alt: "Offer banner four",
  },
];

const Offerbanner = () => {
  return (
    <section className={styles.offerBanner}>
      <div className={styles.inner}>
        <Swiper
          modules={[Navigation, Autoplay]}
          className={styles.swiper}
          navigation={{
            prevEl: `.${styles.prevBtn}`,
            nextEl: `.${styles.nextBtn}`,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          speed={700}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 12, centeredSlides: true },
            768: { slidesPerView: 2.1, spaceBetween: 16, centeredSlides: false },
            1200: { slidesPerView: 2.45, spaceBetween: 18, centeredSlides: false },
          }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id} className={styles.slide}>
              <a href={banner.href} className={styles.card}>
                <img src={banner.image} alt={banner.alt} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          aria-label="Previous offer"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          aria-label="Next offer"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </section>
  );
};

export default Offerbanner;
