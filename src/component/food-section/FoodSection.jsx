import React from 'react';
import { useLoaderData, useParams, } from 'react-router-dom';

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
                    <div className='d-flex'>
                        <img src={recipe.foodPic} alt="" />
                        <p> {recipe.recipe_name}</p>
                        <p>  {recipe.likes}</p>
                        <p>  {recipe.ingredients}</p>
                    </div>




                </div>)
            }
        </div>
    );
};

export default FoodSection;