import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefInfo from './ChefInfo';

const ChefSection = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h1>this is chef section</h1>
            {
                categories.map(category => <ChefInfo
                    key={category.id}
                    category={category}
                >

                </ChefInfo>

                )
            }
        </div>
    );
};

export default ChefSection;