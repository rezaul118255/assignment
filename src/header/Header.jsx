import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <h1 className='text-primary'> AGRICDE</h1>
                        </Nav>
                        <Nav className="mx-auto gap-3 ">
                            <Link className='text-decoration-none fs-4' to="/">Home</Link>
                            <Link className='text-decoration-none fs-4' to="/about">About</Link>
                            <Link className='text-decoration-none fs-4' to="/blog">Blog</Link>

                        </Nav>
                        <Nav className='gap-2'>

                            <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                            <Link to="/register">
                                <Button variant="primary">register</Button>
                            </Link>


                            <Link to="/login">
                                <Button variant="primary">Login</Button>
                            </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;