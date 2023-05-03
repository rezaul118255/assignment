import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefInfo from './ChefInfo';
import './chef.css'

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


        <div>
            <div className=' g-4 row d-flex '>
                <div className='cards'>
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
        </div>


    );
};

export default ChefSection;