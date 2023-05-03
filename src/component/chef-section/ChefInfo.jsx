import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './chef.css';

// import FoodSection from '../food-section/FoodSection';

const ChefInfo = ({ category }) => {
    const { id, chef_img_url, chef_name, chef_experience, recipes } = category
    // console.log(recipes)

    return (
        <div className='row'>
            <div className="card mt-4">
                <img className='img-fluid cobi' src={chef_img_url} alt="" />
                <div className="card-body" >
                    <p className="card-title title"> <span className='fw-bold'>Chef Name:</span> {chef_name}</p>

                    <div className='text-center'>
                        {
                            recipes.map(recipe => <div
                                key={recipe.recipe_id}
                            >
                                <div className='d-flex  title'>
                                    <p className='title'><span className='fw-bold '>Name:</span> {recipe.recipe_name}</p>
                                    <p className='title ms-2'> <span className='fw-bold'>Like:</span> {recipe.likes}</p>
                                </div>





                            </div>)
                        }
                    </div>
                    <Link to={`category/${id}`}> <button className='btn btn-primary'>View Recipes</button></Link>

                </div>
            </div>

        </div>









    );
};

export default ChefInfo;