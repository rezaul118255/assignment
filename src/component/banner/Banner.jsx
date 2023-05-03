import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div className='container'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/food-banner-background-website-red-pepper-garlic-basil-leaves-corns-stone-table-top-view-copy-space-selection-186527083.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Food are available</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://thumbs.dreamstime.com/b/food-banner-background-website-red-pepper-garlic-basil-leaves-corns-stone-table-top-view-copy-space-selection-186527083.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Many category of Food</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://thumbs.dreamstime.com/b/food-banner-background-website-red-pepper-garlic-basil-leaves-corns-stone-table-top-view-copy-space-selection-186527083.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>chinese Food are available</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;