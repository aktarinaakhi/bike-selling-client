import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = ({ img, name, description, rating, profession }) => {
    return (
        <Card className='mx-2' style={{ width: '22rem', border: '0px', borderRadius: '6px' }}>
            <Card.Body>
                <Card.Title className='d-flex align-items-center'>
                    <img src={img} style={{ borderRadius: '100px' }} alt="" height='60px' width='60px' />
                    <div className='mx-3'>
                        <h4 style={{ color: '#020f24' }}>{name} ({rating}/5)</h4>
                        <h6 style={{ color: '#020f24' }}>{profession}</h6>
                    </div>
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Testimonial;