import React,{ useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/menu.css'
import menuLogo from "../assets/images/menu-logo.png"

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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuScroll = scrolling ? 'menu-cont scroll-down' : 'menu-cont';

  return (
    <section className={menuScroll}>
        <Link to="/" className='menu-logo'><img src={menuLogo} alt="Logo" /></Link>
        <ul className='menu'>
            <li className='menu-element'>
                <div className='arrow-element'>
                    <NavLink to="/">Inicio</NavLink><i class="bi bi-arrow-bar-up arrow"></i>
                </div>
                <ul className='drop-menu'>
                    <li>
                        <a href="#noticias">Noticias</a>
                    </li>
                    <li>
                        <a href="#novedades">Novedades</a>
                    </li>
                    <li>
                        <a href="#aliados">Aliados</a>
                    </li>
                    <li>
                        <a href="#certificaciones">Certificaciones</a>
                    </li>
                    <li>
                        <a href="#contacto">Datos de contacto</a>
                    </li>
                </ul>
            </li>
            <li className='menu-element'>
                <div className='arrow-element'>
                    <NavLink to="/institucional">Institucional</NavLink><i class="bi bi-arrow-bar-up arrow"></i>
                </div>
                <ul className='drop-menu'>
                    <li>
                        <a href="#quienes-somos">Quienes somos</a>
                    </li>
                    <li>
                        <a href="#mision">Misión</a>
                    </li>
                    <li>
                        <a href="#objetivo-general">Objetivo general</a>
                    </li>
                    <li>
                        <a href="#objetivos-generales">Objetivos generales</a>
                    </li>
                    <li>
                        <a href="#pilares">Pilares-Valores</a>
                    </li>
                    <li>
                        <a href="#organigrama">Organigrama</a>
                    </li>
                    <li>
                        <a href="#reseña-historica">Reseña histórica</a>
                    </li>
                    <li>
                        <a href="#directorio">Directorio</a>
                    </li>
                </ul>
            </li>
            <li className='menu-element'>
                <NavLink to="/misional">Misional</NavLink>
            </li>
            <li className='menu-element'>
                <NavLink to="/estrategico">Estratégico</NavLink>
            </li>
            <li className='menu-element'>
                <NavLink to="/legal">Legal</NavLink>
            </li>
            <li className='menu-element'>
                <div className='arrow-element'>
                    <NavLink to="/dian">DIAN</NavLink><i class="bi bi-arrow-bar-up arrow"></i>
                </div>
                <ul className='drop-menu'>
                    <li>
                        <a href="#presupuesto-general">Presupuesto general</a>
                    </li>
                    <li>
                        <a href="#informe-gestion">Informe de gestión del año anterior</a>
                    </li>
                    <li>
                        <a href="#estatutos-generales">Estatutos generales</a>
                    </li>
                    <li>
                        <a href="#estados-financieros">Estados financieros</a>
                    </li>
                    <li>
                        <a href="#certificado-cumplimiento">Certificado de cumplimiento de requisitos para permanecer en régimen</a>
                    </li>
                    <li>
                        <a href="#camara-comercio">Certificado Cámara de comercio</a>
                    </li>
                    <li>
                        <a href="#rut">RUT actualizado</a>
                    </li>
                    <li>
                        <a href="#declaracion-renta">Declaración de renta</a>
                    </li>
                    <li>
                        <a href="#regimen-tributario">Régimen tributario especial vigente</a>
                    </li>
                    <li>
                        <a href="#antecedentes-judiciales">Certificado de antecedentes judiciales</a>
                    </li>
                    <li>
                        <a href="#informacion-archivos">Presentación de información por envío de archivos</a>
                    </li>
                    <li>
                        <a href="#acta-asamblea">Acta de Asamblea General o máximo órgano de dirección</a>
                    </li>
                </ul>
            </li>
            <li className='menu-element'>
                <div className='arrow-element'>
                    <NavLink to="/otros">Otros</NavLink><i class="bi bi-arrow-bar-up arrow"></i>
                </div>
                <ul className='drop-menu'>
                    <li>
                        <a href="#pqrs">Protocolo y mecanismo de PQRS</a>
                    </li>
                    <li>
                        <a href="#privacidad-data">Política de privacidad y habeas data</a>
                    </li>
                    <li>
                        <a href="#control-interno">Control interno</a>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
  )
}

export default Menu