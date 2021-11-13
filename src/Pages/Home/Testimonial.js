import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const Testimonial = (props) => {
    const { img, name, reviewDescription, profession, reviewRating } = props.review;
    return (
        <Card className='mx-2' style={{ width: '22rem', border: '0px', borderRadius: '6px' }}>
            <Card.Body>
                <Card.Title className='d-flex align-items-center'>
                    <img src={img} style={{ borderRadius: '100px' }} alt="" height='60px' width='60px' />
                    <div className='mx-3'>
                        <h4 style={{ color: '#020f24' }}>{name}</h4>
                        <h6 style={{ color: '#020f24' }}>{profession}</h6>
                        <Rating initialRating={reviewRating}
                            style={{ color: ' #f0c14b', fontSize: '15px' }}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                        >

                        </Rating> <br />
                    </div>
                </Card.Title>
                <Card.Text>
                    {reviewDescription}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Testimonial;