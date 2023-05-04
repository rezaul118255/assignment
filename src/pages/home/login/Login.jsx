import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const githubPriovider = new GithubAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    // console.log(user)



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handelGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const GoogleUser = result.user;
                setUser(GoogleUser)

            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubPriovider)
            .then(result => {
                const GithubUser = result.user;
                setUser(GithubUser)

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>

            <Container className='w-25 mx-auto'>



                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't Have an Account? <Link to="/register">Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">
                        {
                            <p>{error}</p>
                        }


                    </Form.Text>
                    <button onClick={handelGoogleSignIn} className='btn btn-outline-primary'>continue with google</button>
                    {
                        user && toast('user is found ')


                    }
                    <ToastContainer></ToastContainer>
                    <button onClick={handleGithubSingIn} className='btn btn-outline-primary mt-3'>continue with github</button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;