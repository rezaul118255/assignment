import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import FoodSection from '../food-section/FoodSection';

const ChefInfo = ({ category }) => {
    const { id, chef_img_url, chef_name, chef_experience, recipes } = category
    // console.log(recipes)

    return (
        <div className='container '>
            <div className="card mt-4 gap-4 ">
                <img className='img-fluid' src={chef_img_url} alt="" />
                <div className="card-body">
                    <h5 className="card-title"> Chef Name:{chef_name}</h5>
                    {
                        recipes.map(recipe => <div
                            key={recipe.recipe_id}
                        >
                            <div className='d-flex'>
                                <p>Name: {recipe.recipe_name}</p>
                                <p>   {recipe.likes}</p>
                            </div>




                        </div>)
                    }
                    <Link to={`category/${id}`}> <button className='btn btn-primary'>View Recipes</button></Link>

                </div>
            </div>

        </div>









    );
};

export default ChefInfo;