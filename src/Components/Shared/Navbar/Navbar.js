import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const NavBar = () => {
    return (
        <div className=''>
            <Navbar bg=" text-white" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="me-auto">
                        <img style={{ height: '40px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="navLink me-3" href="">
                                <Link className="navText text-dark" style={{ textDecoration: 'none' }} to="/">
                                    Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="navLink me-3" href="">
                                <Link className="navText text-dark" style={{ textDecoration: 'none' }} to="/">
                                    Our Portfollio
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="navLink me-3" href="">
                                <Link className="navText text-dark" style={{ textDecoration: 'none' }} to="/">
                                    Our Team
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="navLink me-3" href="">
                                <Link className="navText text-dark" style={{ textDecoration: 'none' }} to="/">
                                    Contuct Us
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="navLink me-3" href="">
                                <Link className=" text-dark" style={{ textDecoration: 'none' }} to="/">
                                    <button style={{ width: '100px', backgroundColor: '#111430' }} className="btn rounded-pill btn-primary">Login</button>
                                </Link>
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;