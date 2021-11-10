import React from 'react';
import { Carousel } from 'react-bootstrap';
import bike1 from '../../images/bike4.jpg'
import bike2 from '../../images/bike2.jpg'
import bike3 from '../../images/bike3.jpg'

const bike = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bike1}
                        alt="First slide"
                        style={{ height: '40vw' }}
                    />
                    <Carousel.Caption>
                        <h2>Happy Journey</h2>
                        <p> work to the highest standards to guarantee your privacy. For further details</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bike2}
                        alt="Second slide"
                        style={{ height: '40vw' }}
                    />

                    <Carousel.Caption>
                        <h2>Welcome to stay with us</h2>
                        <p> No matter where you want to go or what you want to do</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bike3}
                        alt="Third slide"
                        style={{ height: '40vw' }}
                    />

                    <Carousel.Caption>
                        <h2> Your safety is our Main Goal</h2>
                        <p>We facilitate hundreds of thousands of transactions every day through our secure platform.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default bike;