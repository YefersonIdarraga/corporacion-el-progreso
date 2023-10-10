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
                        <NavLink to="/institucional#quienes-somos">Quienes somos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/institucional#mision">Misión</NavLink>
                    </li>
                    <li>
                        <NavLink to="/institucional#objetivo-general">Objetivo general</NavLink>
                    </li>
                    <li>
                        <NavLink to="/institucional#objetivos-generales">Objetivos generales</NavLink>
                    </li>
                    <li>
                        <NavLink to="/institucional#pilares">Pilares-Valores</NavLink>
                    </li>
                    <li>
                        <NavLink to="/institucional#organigrama">Organigrama</NavLink>
                    </li>
                    <li>
                        <NavLink to="/institucional#reseña-historica">Reseña histórica</NavLink>
                    </li>
                    <li>
                        <NavLink to="/institucional#directorio">Directorio</NavLink>
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
                        <NavLink to="/dian#presupuesto-general">Presupuesto general</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#informe-gestion">Informe de gestión del año anterior</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#estatutos-generales">Estatutos generales</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#estados-financieros">Estados financieros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#certificado-cumplimiento">Certificado de cumplimiento de requisitos para permanecer en régimen</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#camara-comercio">Certificado Cámara de comercio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#rut">RUT actualizado</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#declaracion-renta">Declaración de renta</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#regimen-tributario">Régimen tributario especial vigente</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#antecedentes-judiciales">Certificado de antecedentes judiciales</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#informacion-archivos">Presentación de información por envío de archivos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dian#acta-asamblea">Acta de Asamblea General o máximo órgano de dirección</NavLink>
                    </li>
                </ul>
            </li>
            <li className='menu-element'>
                <div className='arrow-element'>
                    <NavLink to="/otros">Otros</NavLink><i class="bi bi-arrow-bar-up arrow"></i>
                </div>
                <ul className='drop-menu'>
                    <li>
                        <NavLink to="/otros#pqrs">Protocolo y mecanismo de PQRS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/otros#privacidad-data">Política de privacidad y habeas data</NavLink>
                    </li>
                    <li>
                        <NavLink to="/otros#control-interno">Control interno</NavLink>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
  )
}

export default Menu