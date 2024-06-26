import React, { useState, useEffect } from "react";
import Menu from "../helpers/Menu";
import Banner from "../helpers/Banner";
import Footer from "../helpers/Footer";
import DianComponent from "../components/DianComponent";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import PdfModal from "../helpers/PdfModal";

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

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, 'dian'));
      let docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      docs.sort((a, b) => a.orden - b.orden);
      setDocuments(docs);
    };

    fetchDocuments();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const openModal = (url) => {
      setPdfUrl(url);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  return (
    <section className="container">
      <Menu />
      <Banner />
      <div className={`lateralMenu ${lateralMenu ? "lateralMenu-active" : ""}`}>
        <div className="lateralMenu-scroll">
          <ul className="lateralMenu-dian">
          {documents.map((doc) => (
            <li key={doc.id}>
              <a
                href={`/dian#${doc.dianId}`}
                onClick={() => setActive(doc.orden)}
                className={`${active === doc.orden ? "lateralMenu-link-active" : ""}`}
              >
                {capitalizeFirstLetter(doc.titulo)}
              </a>
            </li>
          ))}
            {/* <li>
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
            </li> */}
          </ul>
        </div>
        <div className="arrow-cont" onClick={handleLateralMenu}>
          <i
            className={`bi bi-caret-right-fill ${lateralMenu ? "arrow-open" : ""}`}
            onClick={handleLateralMenu}
          ></i>
        </div>
      </div>
      <div className="subcontainer">
        {/* <DianComponent /> */}
        <div className="title-reseña">
          <h1 style={{ fontSize: '2rem'}}>Documentos</h1>
        </div>
        <div className="pdf">
            <h1>EEFF 2023</h1>
            <button onClick={() => openModal('/pdf/2EEFF2023.pdf')}>Clic aquí para ver el documento</button>
            <PdfModal isOpen={isModalOpen} onClose={closeModal} pdfUrl={pdfUrl} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Dian;
