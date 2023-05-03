import React from 'react';

import './extra.css'

const ExtraSection = () => {
    return (
        <div className='container'>
            <div className=' d-flex mt-4 '>
                <div className='ms-4 mt-4 '>
                    <h1>Order your Favourite <br /> <span className='food'>Food</span> </h1>
                    <h1>         Fasted And </h1>
                    <h1> <span className='food'>Delivery & easy</span>  <br /> to pick up</h1>

                </div>
                <div className=' mt-1 ms-auto '>
                    <img className='logo img-fluid' src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=2000" alt="" />

                </div>
            </div>
        </div>
    );
};

export default ExtraSection;