import React, { useState, useEffect } from "react";
import "../styles/institucional.css";
import Menu from "../helpers/Menu";
import Banner from "../helpers/Banner";
import Footer from "../helpers/Footer";
import ReseñaHistorica from "../components/ReseñaHistorica";
import ScrollTop from "../helpers/ScrollTop";

const Institucional = () => {
  const [lateralMenu, setLateralMenu] = useState(false)
  const [active, setActive] = useState(0)

  const handleLateralMenu = () => {
    setLateralMenu(!lateralMenu)
  }

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
            <a href="#quienes-somos"
            onClick={() => setActive(1)}
            className={`${active === 1 ? "lateralMenu-link-active" : ""}`}>Quienes somos</a>
          </li>
          <li>
            <a href="#mision"
            onClick={() => setActive(2)}
            className={`${active === 2 ? "lateralMenu-link-active" : ""}`}>Misión</a>
          </li>
          <li>
            <a href="#objetivo-general"
            onClick={() => setActive(3)}
            className={`${active === 3 ? "lateralMenu-link-active" : ""}`}>Objetivo general</a>
          </li>
          <li>
            <a href="#objetivos-generales"
            onClick={() => setActive(4)}
            className={`${active === 4 ? "lateralMenu-link-active" : ""}`}>Objetivos generales</a>
          </li>
          <li>
            <a href="#pilares"
            onClick={() => setActive(5)}
            className={`${active === 5 ? "lateralMenu-link-active" : ""}`}>Pilares-Valores</a>
          </li>
          <li>
            <a
              href="#organigrama"
              onClick={() => setActive(6)}
              className={`${active === 6 ? "lateralMenu-link-active" : ""}`}
            >
              Organigrama
            </a>
          </li>
          <li>
            <a
              href="#reseña-historica"
              onClick={() => setActive(7)}
              className={`${active === 7 ? "lateralMenu-link-active" : ""}`}
            >
              Reseña histórica
            </a>
          </li>
          <li>
            <a href="#directorio"
            onClick={() => {
              setActive(8);
            }}
            className={`${active === 8 ? "lateralMenu-link-active" : ""}`}>Directorio</a>
          </li>
        </ul>
        <div className="arrow-cont" onClick={handleLateralMenu}>
          <i class={`bi bi-caret-right-fill ${lateralMenu ? "arrow-open" : ""}`} onClick={handleLateralMenu}></i>
        </div>
      </div>
      <section className="subcontainer">
        <ReseñaHistorica />
      </section>
      <ScrollTop />
      <Footer />
    </section>
  );
};

export default Institucional;
