import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';

import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
const Header = () => {
    const { user } = useContext(AuthContext);

    const auth = getAuth(app);

    const handelLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)

            })
            .catch(error => console.log(error))
    }
    const photo = auth.currentUser;
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
                            {user && < FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {/* {
                                user && <img src=".photoURL" alt="" />
                            } */}



                            {user ?
                                <Button onClick={handelLogOut} variant="primary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="primary">Login</Button>
                                </Link>
                            }



                            <Link to="/register">
                                <Button variant="primary">register</Button>
                            </Link>




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container >
    );
};

export default Header;