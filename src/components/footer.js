import React from 'react';
import Logo from '../assets/images/logo-fortnite.png'
import '../styles/footer.css'

const Footer = () => {



    return (
        <div className="bg-dark m-0">
            
            <div className='container-footer text-secondary py-5'>
            <img src={Logo} className="my-2 d-block mx-5" alt="logo" />

                <section className="d-inline-block mx-5 my-2">
                    <li>Inicio</li>
                    <li>Pase de batalla</li>
                    <li>Ver</li>
                    <li>Consige Fivenite</li>
                </section>

                <section className="d-inline-block mx-5 my-2">
                    <li>Noticias</li>
                    <li>Preguntas frecuentes</li>
                    <li>Cluf</li>
                    <li>Competitivo</li>
                </section>

                <section className="d-inline-block mx-5 my-2">
                    <li>Ayuda</li>
                    <li>Seguridad y protección</li>
                    <li>Reglas de la comunidad</li>
                </section>

            </div>
        </div>
    )
}

export default Footer;