import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation'

const AllProducts = () => {
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
            <Navigation></Navigation>
            <div id="services" className="container my-5">

                <div className="w-50 text-center mx-auto">
                    <h2 className="mt-5 text-center">Our collections</h2>
                    <input className="mx-4 py-3 my-5 px-2 aligns-item-center" type="text" placeholder="Search your Destination" />
                </div>
                <div className="row g-4">
                    {
                        spinner && <Spinner className="mx-auto" animation="border" variant="dark" />
                    }
                    {
                        products.map(product => <div className="col-sm-4 text-center">
                            <div className="card">
                                <div className="card-body">
                                    <div><img className="card-image" style={style} src={product.image} alt="" /></div>
                                    <h5 className="card-title mt-3"> Name : {product.product_name}</h5>
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
            </div>

            <Footer></Footer>

        </>

    );
};

export default AllProducts;