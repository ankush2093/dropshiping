import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container-fluid footer__container">
        <div className="row footer__row">
          {/* Brand & App Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 footer__brand-col">
            <Link href="/" className="footer__logo">
              <img src="/img/logo-deodap.png" alt="DeoDap Wholesale" />
            </Link>
            <p className="footer__slogan">
              India's Largest Online B2B Marketplace for Wholesale & Drop Shipping.
            </p>

            <div className="footer__app-links">
              <a href="#" className="footer__app-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
              <a href="#" className="footer__app-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
            </div>

            <div className="footer__social-section">
              <h6>FOLLOW US</h6>
              <div className="footer__social-icons">
                <a href="#" className="facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="snapchat" aria-label="Snapchat"><i className="fab fa-snapchat-ghost"></i></a>
                <a href="#" className="whatsapp" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                <a href="#" className="youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
              <div className="footer__payment-icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Skrill_logo.svg" alt="Skrill" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Amazon_logo.svg" alt="Amazon" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 footer__nav-col">
            <h6>QUICK LINKS</h6>
            <ul className="list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/blogs">Latest Blogs</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 footer__nav-col">
            <h6>POLICIES</h6>
            <ul className="list-unstyled">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/return-policy">Return & Refund Policy</Link></li>
              <li><Link href="/shipping-policy">Shipping Policy</Link></li>
              <li><Link href="/dropshipping-policy">Drop Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 footer__nav-col">
            <h6>POPULAR CATEGORIES</h6>
            <ul className="list-unstyled">
              <li><Link href="/">Home & Kitchen</Link></li>
              <li><Link href="/">Health & Personal Care</Link></li>
              <li><Link href="/">Home Improvement</Link></li>
              <li><Link href="/">Electronics</Link></li>
              <li><Link href="/">Toys & Games</Link></li>
            </ul>
          </div>

          {/* Drop Shipping Section */}
          <div className="col-lg-3 col-md-6 footer__brand-col">
            <h6>DROP SHIPPING WITH DEODAP</h6>
            <div className="footer__info-box">
              <p className="footer__company-name">DEODAP INTERNATIONAL</p>
              <p><span>Regd. Office:</span> Surat, Gujarat, India</p>
              <p><span>Contact:</span> +91 9638666607</p>
              <p><span>Email:</span> care@deodap.com</p>
              <p><span>Time:</span> 9:00 AM to 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">© {new Date().getFullYear()} Drop Shipping With DeoDap. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <p className="mb-0">Designed & Developed by DeoDap Team</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
