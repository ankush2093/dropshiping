"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const publicNavItems = [
  { href: "/#top-selling", label: "Top Selling", icon: "fa-star" },
  { href: "/#top-treanding", label: "Top Treanding", icon: "fa-fire" },
  { href: "/#how-itworks", label: "How It Works", icon: "fa-circle-check" },
  { href: "/#contact-us", label: "Contact Us", icon: "fa-envelope" },
];

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!headerRef.current) return;

          const scrollY = window.scrollY;
          if (scrollY > 60) {
            headerRef.current.classList.add("scrolled");
          } else if (scrollY < 10) {
            headerRef.current.classList.remove("scrolled");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    if (offcanvasElement?.classList.contains("show")) {
      const closeBtn = offcanvasElement.querySelector<HTMLElement>(".btn-close");
      closeBtn?.click();
    }
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <>
      <header ref={headerRef} className="sticky-top main-header">
        <div className="top-bar">
          <div className="container">
            <div className="top-bar__inner">
              <p className="mb-0">India's Largest B2B Marketplace for Wholesale & Drop Shipping</p>
              <a href="mailto:care@deodap.com">care@deodap.com</a>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container cust-container">
            <Link className="navbar-brand" href="/">
              <img
                src="/img/logo-deodap.png"
                alt="DeoDap Logo"
                width={150}
                height={50}
                className="navbar-logo"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center nav-menu">
                {publicNavItems.map((item) => (
                  <li className="nav-item" key={item.href}>
                    <Link className={`nav-link ${isActive(item.href) ? "active" : ""}`} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                {isAuthenticated ? (
                  <li className="nav-item dropdown ms-2">
                    <button type="button" className="nav-link dropdown-toggle border-0 bg-transparent" data-bs-toggle="dropdown">
                      <i className="fas fa-user me-1"></i> {user?.email || user?.name || "User"}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><Link className={`dropdown-item ${isActive("/profile") ? "active" : ""}`} href="/profile">Profile</Link></li>
                      <li><Link className={`dropdown-item ${isActive("/change-password") ? "active" : ""}`} href="/change-password">Change Password</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item ms-2">
                    <Link href="/login" className="btn btn-appointment">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>

        <div className="nav-padding-gap"></div>
      </header>

      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <div className="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="/img/logo-deodap.png" alt="Logo" width={110} />
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto nav-menu-mobile">
            {publicNavItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <Link className={`nav-link ${isActive(item.href) ? "active" : ""}`} href={item.href} data-bs-dismiss="offcanvas">
                  <i className={`fas ${item.icon} mobile-icon`}></i> {item.label}
                </Link>
              </li>
            ))}
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/profile") ? "active" : ""}`} href="/profile">
                    <i className="fas fa-user mobile-icon"></i> Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/change-password") ? "active" : ""}`} href="/change-password">
                    <i className="fas fa-lock mobile-icon"></i> Change Password
                  </Link>
                </li>
                <li className="nav-item">
                  <button type="button" className="nav-link text-start w-100 border-0 bg-transparent" onClick={logout}>
                    <i className="fas fa-sign-out-alt mobile-icon"></i> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link href="/login" className="nav-link" data-bs-dismiss="offcanvas">
                    <i className="fas fa-sign-in-alt mobile-icon"></i> Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>

  );
};

export default Navbar;
