import React from "react";
import "../styles/banner.css"
import logo from "../assets/images/menu-logo.png"

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>CORPORACIÓN EL PROGRESO</h1>
        <h2>"TRABAJANDO POR LA INCLUSIÓN"</h2>
      </div>
      <img src={logo} alt="Logo" />
    </section>
  );
};

export default Banner;
