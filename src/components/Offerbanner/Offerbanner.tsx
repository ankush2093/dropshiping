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
      "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/6167b4c6d7519d38.png?q=60",
    href: "javascript:void(0)",
    alt: "Offer banner one",
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/0723b97813507bd2.jpg?q=60",
    href: "javascript:void(0)",
    alt: "Offer banner two",
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/a8cc7b9c97fdd0c3.png?q=60",
    href: "javascript:void(0)",
    alt: "Offer banner three",
  },
  {
    id: 4,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/026c60bd60eb62e1.png?q=60",
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
