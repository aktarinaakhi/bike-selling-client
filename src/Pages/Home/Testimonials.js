import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch('https://immense-scrubland-21302.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setAllReviews(data)
            })
    }, [])

    return (
        <div style={{ backgroundColor: 'whitesmoke' }} className='py-5'>
            <h1 className='text-center pt-5' style={{ fontWeight: 'bold', color: '#020f24' }}>Reviews</h1>

            <Carousel indicators={false} interval={5000} >
                {
                    allReviews.map((review, idx) => (

                        <Carousel.Item>
                            <div className=''  >

                                <div className='d-flex justify-content-center flex-wrap m-5' >
                                    <Testimonial img={review.img} name={review.name} description={review.reviewDescription} rating={review.reviewRating} profession={review.profession} />
                                </div>
                            </div>
                        </Carousel.Item>

                    ))
                }

            </Carousel>
            <div className="py-5 text-center">
                <Link to='/review' >
                    <button className="btn text-white" style={{ backgroundColor: '#020f24' }}>Drop A Review</button>
                </Link>
            </div>

        </div>

    );
};

export default Testimonials;