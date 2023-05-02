import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import FoodSection from '../food-section/FoodSection';

const ChefInfo = ({ category }) => {
    const { id, chef_img_url, chef_name, chef_experience, recipes } = category
    // console.log(recipes)

    return (
        <div className='container'>


            <Row xs={1} md={2} xl={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <Card className='mt-4 '>
                            <Card.Img variant="top" src={chef_img_url} />
                            <Card.Body >
                                <Card.Title> Name:  {chef_name}</Card.Title>
                                <h6>Experience:{chef_experience}</h6>
                                {
                                    recipes.map(recipe => <div
                                        key={recipe.recipe_id}
                                    >
                                        <div className='d-flex'>
                                            <p> {recipe.recipe_name}</p>
                                            <p>  {recipe.likes}</p>
                                        </div>




                                    </div>)
                                }
                                <Link to={`category/${id}`}> <button className='btn btn-primary'>View Recipes</button></Link>


                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <div className="row row-cols-md-2 ">
                <div className="col">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Card description</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

            </div> */}







        </div>
    );
};

export default ChefInfo;