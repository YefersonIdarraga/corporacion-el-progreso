import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/menu.css";
import menuLogo from "../assets/images/menu-logo.png";

const Menu = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuScroll = scrolling ? "menu-cont scroll-down" : "menu-cont";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={menuScroll}>
      <Link to="/" className="menu-logo">
        <img src={menuLogo} alt="Logo" />
      </Link>
      <ul className="menu">
        <li className="menu-element">
          <NavLink to="/" onClick={scrollToTop}>
            Inicio
          </NavLink>
        </li>
        <li className="menu-element">
          <NavLink to="/institucional" onClick={scrollToTop}>
            Institucional
          </NavLink>
        </li>
        <li className="menu-element">
          <NavLink to="/misional" onClick={scrollToTop}>
            Misional
          </NavLink>
        </li>
        <li className="menu-element">
          <NavLink to="/estrategico" onClick={scrollToTop}>
            Estratégico
          </NavLink>
        </li>
        <li className="menu-element">
          <NavLink to="/legal" onClick={scrollToTop}>
            Legal
          </NavLink>
        </li>
        <li className="menu-element">
          <NavLink to="/dian" onClick={scrollToTop}>
            DIAN
          </NavLink>
        </li>
        <li className="menu-element">
          <NavLink to="/otros" onClick={scrollToTop}>
            Otros
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
