import React from 'react'
import "../styles/footer.css"
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <section id='contacto' className='footer'>
        <section className='footer-cont'>
            <img src={logo} alt="Logo" />
            <div className='contacto'>
                <h2>Datos de contacto</h2>
                <div>
                    <h3>Telefono: </h3><p></p>
                </div>
            </div>
        </section>
        <p className='copyright'>&copy; 2024 Corporación El Progreso. Todos los derechos reservados.</p>
    </section>
  )
}

export default Footer