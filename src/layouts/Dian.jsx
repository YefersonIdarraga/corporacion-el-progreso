import React, { useState, useEffect } from "react";
import Menu from "../helpers/Menu";
import Banner from "../helpers/Banner";
import Footer from "../helpers/Footer";

const Dian = () => {
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
        <div className="lateralMenu-scroll">
          <ul className="lateralMenu-dian">
            <li>
              <a
                href="#presupuesto-general"
                onClick={() => setActive(1)}
                className={`${active === 1 ? "lateralMenu-link-active" : ""}`}
              >
                Presupuesto general
              </a>
            </li>
            <li>
              <a
                href="#informe-gestion"
                onClick={() => setActive(2)}
                className={`${active === 2 ? "lateralMenu-link-active" : ""}`}
              >
                Informe de gestión del año anterior
              </a>
            </li>
            <li>
              <a
                href="#estatutos-generales"
                onClick={() => setActive(3)}
                className={`${active === 3 ? "lateralMenu-link-active" : ""}`}
              >
                Estatutos generales
              </a>
            </li>
            <li>
              <a
                href="#estados-financieros"
                onClick={() => setActive(4)}
                className={`${active === 4 ? "lateralMenu-link-active" : ""}`}
              >
                Estados financieros
              </a>
            </li>
            <li>
              <a
                href="#certificado-cumplimiento"
                onClick={() => setActive(5)}
                className={`${active === 5 ? "lateralMenu-link-active" : ""}`}
              >
                Certificado de cumplimiento de requisitos para permanecer en
                régimen
              </a>
            </li>
            <li>
              <a
                href="#camara-comercio"
                onClick={() => setActive(6)}
                className={`${active === 6 ? "lateralMenu-link-active" : ""}`}
              >
                Certificado Cámara de comercio
              </a>
            </li>
            <li>
              <a
                href="#rut"
                onClick={() => setActive(7)}
                className={`${active === 7 ? "lateralMenu-link-active" : ""}`}
              >
                RUT actualizado
              </a>
            </li>
            <li>
              <a
                href="#declaracion-renta"
                onClick={() => {
                  setActive(8);
                }}
                className={`${active === 8 ? "lateralMenu-link-active" : ""}`}
              >
                Declaración de renta
              </a>
            </li>
            <li>
              <a
                href="#regimen-tributario"
                onClick={() => {
                  setActive(9);
                }}
                className={`${active === 9 ? "lateralMenu-link-active" : ""}`}
              >
                Régimen tributario especial vigente
              </a>
            </li>
            <li>
              <a
                href="#antecedentes-judiciales"
                onClick={() => {
                  setActive(10);
                }}
                className={`${active === 10 ? "lateralMenu-link-active" : ""}`}
              >
                Certificado de antecedentes judiciales
              </a>
            </li>
            <li>
              <a
                href="#informacion-archivos"
                onClick={() => {
                  setActive(11);
                }}
                className={`${active === 11 ? "lateralMenu-link-active" : ""}`}
              >
                Presentación de información por envío de archivos
              </a>
            </li>
            <li>
              <a
                href="#acta-asamblea"
                onClick={() => {
                  setActive(12);
                }}
                className={`${active === 12 ? "lateralMenu-link-active" : ""}`}
              >
                Acta de Asamblea General o máximo órgano de dirección
              </a>
            </li>
          </ul>
        </div>
        <div className="arrow-cont" onClick={handleLateralMenu}>
          <i
            class={`bi bi-caret-right-fill ${lateralMenu ? "arrow-open" : ""}`}
            onClick={handleLateralMenu}
          ></i>
        </div>
      </div>
      <div className="subcontainer">
        <h1>DIAN</h1>
      </div>
      <Footer />
    </section>
  );
};

export default Dian;
