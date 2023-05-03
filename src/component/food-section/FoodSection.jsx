import React from 'react';
import { useLoaderData, useParams, } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

const FoodSection = () => {
    const { id } = useParams()
    const foodCategory = useLoaderData(id)
    const { chef_img_url, chef_name, chef_experience, recipes } = foodCategory
    return (
        <div className='container'>

            {
                recipes.map(recipe => <div
                    key={recipe.recipe_id}
                >
                    <div className='d-flex gap-5 mt-4'>
                        <img className='img-thumbnail' src={recipe.foodPic} alt="" />
                        <div className='ml-auto'>
                            <h5> Name: {recipe.recipe_name}</h5>
                            <h6> cooking_method: {recipe.cooking_method}</h6>
                            <h6> rating: {recipe.rating}</h6>
                            <p>  <FaBeer />{recipe.likes}</p>
                            <p> ingredients: {recipe.ingredients}</p>
                            <p> instructions: {recipe.instructions}</p>
                            <button className='btn btn-primary'>Add to Favourite</button>
                        </div>
                    </div>




                </div>)
            }
        </div>
    );
};

export default FoodSection;