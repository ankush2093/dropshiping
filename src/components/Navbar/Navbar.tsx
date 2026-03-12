"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const topLinks = [
  { label: "+91 90606 XXXXX", href: "tel:+919638666607", icon: "fas fa-phone-alt" },
  { label: "care@tradebridge.com", href: "mailto:care@deodap.com", icon: "fas fa-envelope" },
  { label: "9:00 AM to 7:00 PM", href: "#", icon: "far fa-clock", isStatic: true },
];

const categoryLinks = [
 
  { label: "BEST SELLER", href: "/" },
  {
    label: "BRAND GALLERY",
    href: "/",
    children: [
      { label: "Top Brands", href: "/" },
      { label: "Featured Brands", href: "/" },
    ],
  },
  {
    label: "HEALTH & PERSONAL CARE",
    href: "/",
    children: [
      { label: "Skin Care", href: "/" },
      { label: "Hair Care", href: "/" },
    ],
  },
  {
    label: "HOME & KITCHEN",
    href: "/",
    children: [
      { label: "Cookware", href: "/" },
      { label: "Utensils", href: "/" },
    ],
  },
  {
    label: "HOME IMPROVEMENT",
    href: "/",
    children: [
      { label: "Tools", href: "/" },
      { label: "Hardware", href: "/" },
    ],
  },
  { label: "JEWELLERY", href: "/" },
  { label: "ELECTRONICS", href: "/" },
  { label: "TOYS & GAMES", href: "/" },
  { label: "MORE", href: "/", children: [{ label: "All Products", href: "/" }] },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();
  const headerRef = useRef<HTMLElement | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!headerRef.current) return;
          if (window.scrollY > 60) {
            headerRef.current.classList.add("scrolled");
          } else if (window.scrollY < 10) {
            headerRef.current.classList.remove("scrolled");
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ CLOSE OFFCANVAS ON ROUTE CHANGE
  useEffect(() => {
    const offcanvasElement = document.getElementById("ddMobileMenu");
    if (offcanvasElement?.classList.contains("show")) {
      const closeBtn = offcanvasElement.querySelector<HTMLElement>(".btn-close");
      closeBtn?.click();
    }
  }, [pathname]);

  return (
    <header ref={headerRef} className="dd-nav sticky-top">
      {/* Top Bar */}
      <div className="dd-nav__top">
        <div className="container dd-nav__top-inner">
          <div className="dd-nav__top-links">
            {topLinks.map((item, index) => (
              <React.Fragment key={item.label}>
                {item.isStatic ? (
                  <div className="dd-nav__top-item">
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                  </div>
                ) : (
                  <a href={item.href} className="dd-nav__top-item">
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                  </a>
                )}
                {index < topLinks.length - 1 && <span className="dd-nav__top-separator">|</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="dd-nav__top-apps d-none">
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="32" />
            </a>
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" height="32" />
            </a>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="dd-nav__mid">
        <div className="container dd-nav__mid-inner">
          <div className="dd-nav__mobile-left">
            <button
              className="dd-nav__toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#ddMobileMenu"
              aria-controls="ddMobileMenu"
            >
              <i className="fas fa-bars"></i>
            </button>
            <Link href="/" className="dd-nav__brand">
              <img src="/img/logo-deodap.png" alt="DeoDap" width={170} height={50} style={{ objectFit: 'contain' }} />
            </Link>
          </div>

          <form className="dd-nav__search">
            <input type="text" placeholder="Search For Office & S" />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <div className="dd-nav__actions">
            <div className="dd-nav__action-item dd-nav__hide-mobile">
              <Link href="/login" className="dd-nav__login-btn">
                <i className="fas fa-user user_icons"></i>
                <span>LOGIN</span>
                <i className="fas fa-angle-down"></i>
              </Link>
            </div>
            <div className="dd-nav__action-item">
              <Link href="/wishlist" className="dd-nav__action-icon">
                <i className="far fa-heart"></i>
                <span className="dd-nav__badge">0</span>
              </Link>
            </div>
            <div className="dd-nav__action-item">
              <Link href="/cart" className="dd-nav__action-icon">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (Only visible on small screens) */}
      <div className="dd-nav__mobile-search">
        <div className="container">
          <form className="dd-nav__search-mob">
            <input type="text" placeholder="Search For Products..." />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar (Desktop Only) */}
      <div className="dd-nav__bottom dd-nav__hide-mobile">
        <div className="container">
          <ul className="dd-nav__cats">
            {categoryLinks.map((cat) => (
              <li key={cat.label} className={cat.children ? "has-dropdown" : ""}>
                <Link href={cat.href}>
                  {cat.label}
                  {cat.children && <i className="fas fa-angle-down"></i>}
                </Link>
                {cat.children && (
                  <ul className="dd-nav__dropdown">
                    {cat.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div className="offcanvas offcanvas-start dd-nav__offcanvas" tabIndex={-1} id="ddMobileMenu" aria-labelledby="ddMobileMenuLabel">
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="offcanvas-title fw-bold" id="ddMobileMenuLabel">MENU</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="dd-nav__mob-links mb-4">
            <Link href="/login" className="btn btn-danger w-100 mb-2">LOGIN / REGISTER</Link>
          </div>

          <h6 className="text-muted small fw-bold mb-3">CATEGORIES</h6>
          <ul className="dd-nav__mob-cats list-unstyled">
            {categoryLinks.map((cat) => (
              <li key={cat.label} className="border-bottom py-2">
                <Link href={cat.href} className="text-dark text-decoration-none dropdown-toggle w-100 d-flex justify-content-between align-items-center">
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-top">
            <h6 className="text-muted small fw-bold mb-3">CONTACT US</h6>
            <div className="small">
              {topLinks.map(link => (
                <div key={link.label} className="mb-2">
                  <i className={`${link.icon} text-danger me-2`}></i>
                  {link.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

