import React from 'react';

const ChefInfo = ({ category }) => {
    const { chef_img_url, chef_name, chef_experience, recipes } = category
    console.log(recipes)

    return (
        <div>
            <img src={chef_img_url} alt="" />
            {
                recipes.map(recipe => <p
                    key={recipe.recipe_id}
                >

                    {recipe.recipe_name}
                    {recipe.likes}

                </p>)
            }

        </div>
    );
};

export default ChefInfo;