import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SvgInline from "./SvgInline"; // Import the new component
import BrandLogo from "../assets/images/Brand_Logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (!navRef.current) return;

    linksRef.current = navRef.current.querySelectorAll(".header__nav__item a");

    if (isOpen) {
      const tl = gsap.timeline();
      tl.set(navRef.current, { opacity: 0 })
        .to(navRef.current, { opacity: 1, duration: 0.3 })
        .to(
          linksRef.current,
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );
    } else {
      const tl = gsap.timeline();
      tl.to(linksRef.current, {
        // opacity: 0,
        y: 10,
        duration: 0.2,
        stagger: -0.05,
      }).to(
        navRef.current,
        {
          // opacity: 0,
          duration: 0.4,
        },
        "-=0.1"
      );
    }

    return () => {
      gsap.killTweensOf([navRef.current, ...linksRef.current]);
    };
  }, [isOpen]);

  return (
    <header className="header" id="main-header">
      <div className="header__inner flex justify-content-between align-items-center">
        <a className="header__logo" href="/">
          <SvgInline
            src={BrandLogo}
            className="in-svg"
            id="brand-logo"
            alt="JD Web & Ship Logo"
          />
        </a>
        <div className="mobile__header-nav">
          <a className="header__nav-contact md-block" href="#">
            Log in
          </a>
          <div
            className={`hamburger btn ${isOpen ? "is-active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
        <nav
          className={`header-nav col-md-8 col-xls-4 flex align-items-center justify-content-end ${isOpen ? "is-active" : ""}`}
          id="menuContent"
          ref={navRef}
        >
          <ul className="header__nav__main flex align-item-center">
            <li className="header__nav__item">
              <a href="/">Home</a>
            </li>
            <li className="header__nav__item">
              <a href="#">About Us</a>
            </li>
            <li className="header__nav__item">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
          <div className="header-nav-actions flex align-items-center">
            <a className="header__nav-contact md-block" href="#">
              Log in
            </a>
            <a className="btn btn-primary md-block" href="#">
              Get Started For Free
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
