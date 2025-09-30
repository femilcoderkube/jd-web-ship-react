import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SvgInline from "./SvgInline";
import BrandLogo from "../assets/images/Brand_Logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const linksRef = useRef([]);
  const navigate = useNavigate();

  // ✅ Outside click handler
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // ✅ GSAP Animations
  useEffect(() => {
    if (!navRef.current) return;

    linksRef.current = navRef.current.querySelectorAll(".header__nav__item a");

    if (isOpen) {
      document.body.classList.add("menu-open");

      const tl = gsap.timeline();
      tl.set(navRef.current, { opacity: 0 })
        .to(navRef.current, { opacity: 1, duration: 0.3 })
        .to(
          linksRef.current,
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );
    } else {
      document.body.classList.remove("menu-open");

      const tl = gsap.timeline();
      tl.to(linksRef.current, {
        y: 0,
        duration: 0.2,
        stagger: -0.05,
      }).to(
        navRef.current,
        {
          duration: 0.4,
        },
        "-=0.1"
      );
    }

    return () => {
      gsap.killTweensOf([navRef.current, ...linksRef.current]);
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <header className="header" id="main-header" ref={headerRef}>
      <div className="header__inner flex justify-content-between align-items-center">
        {/* Logo */}
        <Link
          className="header__logo"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            setIsOpen(false); // ✅ Close on logo click
          }}
        >
          <SvgInline
            src={BrandLogo}
            className="in-svg"
            id="brand-logo"
            alt="JD Web & Ship Logo"
          />
        </Link>

        {/* Mobile hamburger */}
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

        {/* Nav */}
        <nav
          className={`header-nav col-md-8 col-xls-4 flex align-items-center justify-content-end ${isOpen ? "is-active" : ""}`}
          id="menuContent"
          ref={navRef}
        >
          <ul className="header__nav__main flex align-item-center">
            <li className="header__nav__item">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setIsOpen(false); // ✅ Close on link click
                }}
              >
                Home
              </Link>
            </li>
            <li className="header__nav__item">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about");
                  setIsOpen(false); // ✅ Close on link click
                }}
              >
                About Us
              </Link>
            </li>
            <li className="header__nav__item">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                  setIsOpen(false); // ✅ Close on link click
                }}
              >
                Contact Us
              </Link>
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
