import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Products = () => {
    const [spinner, setSpinner] = useState(true);

    return (
        <div id="services" className="container my-5">

            <div className="w-50 text-center mx-auto">
                <h2 className="mt-5 text-center">Our collections</h2>
                <input className="mx-4 py-3 my-5 px-2 aligns-item-center" type="text" placeholder="Search your Destination" />
            </div>
            <div className="row g-4">
                {
                    spinner && <Spinner className="mx-auto" animation="border" variant="dark" />
                }

            </div>
        </div>
    );
};

export default Products;