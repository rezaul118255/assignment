import React from 'react';

const Footer = () => {
    return (
        <div className='container mt-4'>
            <div className='text-center bg-dark container d-flex row row-cols-1 row-cols-md-2 '>
                <div className='col d-flex  p-4'>
                    <div className='text-white p-4'>
                        <h3>Company name </h3>
                        <p>Here you can use rows and <br /> columns to organize your footer <br /> content. Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>


                    </div>
                    <div className='text-white p-4'>
                        <h3>Product</h3>
                        <p>some category of food</p>
                        <p>vagetable</p>
                        <p>fish</p>

                    </div>
                </div>
                <div className='col d-flex p-4'>
                    <div className='text-white p-4 '>
                        <h3>useful link</h3>
                        <>Home</>
                        <p>Blog</p>
                        <p> About</p>
                        <p> Login</p>
                        <p>Register</p>




                    </div>
                    <div className='text-white p-4'>
                        <h3>contact</h3>
                        <p> New York, NY 10012, US</p>
                        <p>email:  info@example.com</p>
                        <p> mobile :+ 01 234 567 88</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;