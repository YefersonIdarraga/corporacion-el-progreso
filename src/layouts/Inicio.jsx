import React, { useState, useEffect } from "react";
import "../styles/inicio.css";
import Menu from "../helpers/Menu";
import logo from "../assets/images/menu-logo.png";
import Footer from "../helpers/Footer";
import Banner from "../helpers/Banner";
import ScrollTop from "../helpers/ScrollTop";
import Slider from "../helpers/Slider";
import img1 from "../assets/images/slider/picture1.jpg"
import img2 from "../assets/images/slider/picture2.jpg"
import img3 from "../assets/images/slider/picture3.jpg"

const Inicio = () => {
  const [lateralMenu, setLateralMenu] = useState(false);
  const [active, setActive] = useState(0);

  const images = [
    img1,
    img2,
    img3
  ]

  const handleLateralMenu = () => {
    setLateralMenu(!lateralMenu);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".lateralMenu")) {
      setLateralMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="container">
      <Menu />
      <Banner />
      <div className={`lateralMenu ${lateralMenu ? "lateralMenu-active" : ""}`}>
        <ul>
          <li>
            <a
              href="#noticias"
              onClick={() => setActive(1)}
              className={`${active === 1 ? "lateralMenu-link-active" : ""}`}
            >
              Noticias
            </a>
          </li>
          <li>
            <a
              href="#novedades"
              onClick={() => setActive(2)}
              className={`${active === 2 ? "lateralMenu-link-active" : ""}`}
            >
              Novedades
            </a>
          </li>
          <li>
            <a
              href="#aliados"
              onClick={() => setActive(3)}
              className={`${active === 3 ? "lateralMenu-link-active" : ""}`}
            >
              Aliados
            </a>
          </li>
          <li>
            <a
              href="#certificaciones"
              onClick={() => setActive(4)}
              className={`${active === 4 ? "lateralMenu-link-active" : ""}`}
            >
              Certificaciones
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={() => setActive(5)}
              className={`${active === 5 ? "lateralMenu-link-active" : ""}`}
            >
              Datos de contacto
            </a>
          </li>
        </ul>
        <div className="arrow-cont" onClick={handleLateralMenu}>
          <i
            class={`bi bi-caret-right-fill ${lateralMenu ? "arrow-open" : ""}`}
            onClick={handleLateralMenu}
          ></i>
        </div>
      </div>
      <div className="subcontainer">
        <Slider images={images} />
      </div>
      <ScrollTop />
      <Footer />
    </section>
  );
};

export default Inicio;
