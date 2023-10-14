import React, { useState, useEffect } from "react";
import Menu from "../helpers/Menu";
import Banner from "../helpers/Banner";
import Footer from "../helpers/Footer";

const Otros = () => {
  const [lateralMenu, setLateralMenu] = useState(false);
  const [active, setActive] = useState(0);

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
              href="#pqrs"
              onClick={() => setActive(1)}
              className={`${active === 1 ? "lateralMenu-link-active" : ""}`}
            >
              Protocolo y mecanismo de PQRS
            </a>
          </li>
          <li>
            <a
              href="#privacidad-data"
              onClick={() => setActive(2)}
              className={`${active === 2 ? "lateralMenu-link-active" : ""}`}
            >
              Política de privacidad y habeas data
            </a>
          </li>
          <li>
            <a
              href="#control-interno"
              onClick={() => setActive(3)}
              className={`${active === 3 ? "lateralMenu-link-active" : ""}`}
            >
              Control interno
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
        <h1>Otros</h1>
      </div>
      <Footer />
    </section>
  );
};

export default Otros;
