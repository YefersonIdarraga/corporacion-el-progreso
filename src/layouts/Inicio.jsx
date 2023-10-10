import React from 'react'
import "../styles/inicio.css"
import Menu from '../helpers/Menu'
import logo from "../assets/images/menu-logo.png"
import Footer from '../helpers/Footer'
import Banner from '../helpers/Banner'
import ScrollTop from '../helpers/ScrollTop'

const Inicio = () => {
  return (
    <section className='container'>
        <Menu />
        <Banner />
        <h1>Inicio</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente, sit laudantium et accusamus, error aspernatur rem est voluptas, quod iure beatae deserunt consequuntur neque earum! Eveniet veritatis iusto asperiores!</p>
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <ScrollTop />
        <Footer />
    </section>
  )
}

export default Inicio