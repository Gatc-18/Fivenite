import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import LogoEpic from '../assets/images/logo-epic-game.png'
import Logo from '../assets/images/logo-fortnite.png';
import '../styles/navbar.css';
import { RiGlobalLine } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';



const NavbarComponent = () => {



    return (
        <>
            <Navbar collapseOnSelect className="p-0" expand="lg" bg="dark" variant="dark">
                <Container className='px-0' fluid>
                    <div className="px-3">
                        <Navbar.Brand><img src={LogoEpic} alt="logo fivenite" /></Navbar.Brand>
                        <Navbar.Brand><img src={Logo} alt="logo fivenite" /></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="bg-dark m-0">
                        <Nav className="me-auto nav-text-fivenite">
                            <Nav.Link>PASE DE BATALLA</Nav.Link>
                            <Nav.Link>MODO CREATVO</Nav.Link>
                            <Nav.Link>SALVAR EL MUNDO</Nav.Link>
                            <Nav.Link>COMPETITIVO</Nav.Link>
                            <Nav.Link>NOTICIAS</Nav.Link>
                            <Nav.Link>AYUDA</Nav.Link>
                        </Nav>
                        <Nav className="text-secondary m-auto d-none d-lg-block">
                            <li className="px-3 d-inline-block"><BiSearchAlt2 /></li>
                            <li className="px-3 d-inline-block"><RiGlobalLine /></li>
                        </Nav>
                        <Nav style={{paddingLeft: 0}} className="nav-text-fivenite">
                            <Nav.Link className="p-4"> INICIAR SESIÓN</Nav.Link>
                            <Nav.Link className="bg-warning py-4 px-4 m-0 text-dark">
                                DESCARGAR
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavbarComponent;