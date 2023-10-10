import React from "react";
import Menu from "../helpers/Menu";
import Banner from "../helpers/Banner";
import Footer from "../helpers/Footer";
import ReseñaHistorica from "../components/ReseñaHistorica";
import ScrollTop from "../helpers/ScrollTop";

const Institucional = () => {
  return (
    <section>
      <Menu />
      <Banner />
      <ReseñaHistorica />
      <ScrollTop />
      <Footer />
    </section>
  );
};

export default Institucional;
