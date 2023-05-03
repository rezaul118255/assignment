import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefInfo from './ChefInfo';

const ChefSection = () => {
    const [categories, setCategories] = useState([])
    // console.log(categories)
    useEffect(() => {
        fetch('https://chef-recipe-server-rezaul118255.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (

        <div className=' row row-cols-2 row-cols-md-2 row-cols-lg-3 container'>

            <div className='col '>
                {
                    categories.map(category => <ChefInfo
                        key={category.id}
                        category={category}
                    >

                    </ChefInfo>

                    )
                }
            </div>
        </div>

    );
};

export default ChefSection;