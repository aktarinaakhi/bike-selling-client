import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://immense-scrubland-21302.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false)
            });
    }, []);

    const style = {
        width: '300px',
        height: '200px',
        borderRadius: '10px'
    }
    return (
        <>
            <div id="services" className="container my-5">

                <div className="w-50 text-center mx-auto mb-5">
                    <h2 className="mt-5 text-center">Top Collections</h2>
                </div>
                <div className="row g-4">
                    {
                        spinner && <Spinner className="mx-auto" animation="border" variant="dark" />
                    }
                    {
                        products.slice(0, 6).map(product => <div className="col-sm-4 text-center">
                            <div className="card">
                                <div className="card-body">
                                    <div><img className="card-image" style={style} src={product.image} alt="" /></div>
                                    <h5 className="card-title mt-3"> {product.name}</h5>
                                    <p className="card-text">{product.descriptoin}</p>
                                    <p>BDT {product.price}</p>
                                    <Link to={`/purchase/${product._id}`}>
                                        <button className="btn btn-primary">Purchase</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <Link to="allProducts">
                    <div className="mt-4 text-center">
                        <button className="btn btn-danger mt-3">Load More products</button>
                    </div>
                </Link>

            </div>


        </>
    );
};

export default Products;