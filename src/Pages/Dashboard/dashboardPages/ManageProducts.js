import React, { useEffect, useState } from 'react';
import { Modal, Spinner, Button } from 'react-bootstrap';
import DashboardHome from '../DashboardHome/DashboardHome';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const style = {
        width: '300px',
        height: '200px',
        borderRadius: '10px'
    }

    useEffect(() => {
        fetch('https://immense-scrubland-21302.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false)
            });
    }, []);
    const modalShow = (id) => {
        setShow(true);
    }
    const handleDelete = id => {
        const url = `https://immense-scrubland-21302.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    setShow(false)
                }

            })
    }


    return (
        <DashboardHome>
            <div id="services" className="container mb-5">

                <div className="w-50 text-center mx-auto">
                    <h2 className="mt-5 text-center">Total collections</h2>
                </div>
                <div className="row g-4">
                    {
                        spinner && <Spinner className="mx-auto" animation="border" variant="dark" />
                    }
                    {
                        products.map(product => <div className="col-sm-12 col-md-6 text-center">
                            <div className="card">
                                <div className="card-body">
                                    <div><img className="card-image" style={style} src={product.image} alt="" /></div>
                                    <h5 className="card-title mt-3">  {product.name}</h5>
                                    <p className="card-text">{product.descriptoin}</p>
                                    <p>BDT {product.price}</p>

                                    <button onClick={() => modalShow(product._id)} className="btn btn-primary">Remove Product</button>
                                </div>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Body>Are you sure to want to cancel this booking service ?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="primary" onClick={() => handleDelete(product._id)}>
                                            Confirm
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                        </div>)

                    }

                </div>
            </div>



        </DashboardHome>
    );
};

export default ManageProducts;