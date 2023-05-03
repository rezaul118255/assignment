import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);
    const [passwords, setPasswords] = useState('');
    const [error, setError] = useState('');
    const handelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setPasswords(createdUser);
            })
            .catch(error => {
                const wrong = error.message
                setError(wrong);
            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div>



            <Container className='w-25 mx-auto'>
                <h3>Please Register</h3>
                <Form onSubmit={handelRegister} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}


                            type="checkbox"
                            name="accept"
                            label={<>Accept <Link to="/blog">Terms and Conditions</Link> </>} />
                    </Form.Group>
                    <Form.Text className="text-danger">
                        {
                            <p>{error}</p>
                        }


                    </Form.Text>

                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already Have an Account? <Link to="/login">Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                        {
                            passwords && toast('register succesfull ')


                        }
                        <ToastContainer></ToastContainer>

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;