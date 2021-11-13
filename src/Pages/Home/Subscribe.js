import React from 'react';

const Subscribe = () => {
    return (
        <section id="input" className="input" style={{ backgroundImage: 'url(https://i.ibb.co/B3ySWS1/diego-jimenez-A-NVHPka9-Rk-unsplash.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', padding: '4vw' }}>
            <div className="text-center container">
                <div>
                    <h4 className="text-light">SUBSCRIBE TO
                        THE INSIDE LINE</h4>
                    <p className="text-light">DEALS, NEW RELEASES & VIDEO REVIEWS</p>
                    <input style={{ padding: '7px', width: '50%' }} type="text" placeholder="Enter Your Email" />
                    <button style={{ border: 'none', padding: '8px 15px', color: 'white', backgroundColor: 'black' }} >Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;