import React, { useEffect, useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';

const Myorders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [orders, setorders] = useState([]);
    const { user } = useAuth();
    const [show, setShow] = useState(false);
    const [spinner, setSpinner] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        fetch(`https://immense-scrubland-21302.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setorders(data)
                setSpinner(false)
            }
            )
    }, [])

    useEffect(() => {
        const ownOrder = orders.filter(order => order.email === user?.email);
        setMyOrders(ownOrder);
    })

    const modalShow = id => {
        setShow(true);
    }

    //cancel personal Orders 
    const handleDelete = id => {
        const url = `https://immense-scrubland-21302.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = myOrders.filter(myBook => myBook._id !== id);
                    setorders(remaining);
                    setShow(false)
                }
            });
    }

    return (
        <DashboardHome>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto">
                    {
                        spinner && <Spinner className="mx-auto" animation="border" variant="dark" />
                    }
                    {
                        myOrders.map(mybook => <div className="col"
                            key={mybook._id} >
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{mybook.name}</h5>
                                    <h4>{mybook.email}</h4>
                                    <p>Orders Id: {mybook._id}</p>
                                    <p className="card-text">Address: {mybook.Address}</p>
                                    <p>Phone Number : {mybook.Phone}</p>
                                    <p>Status: {mybook.status}</p>
                                    <div className="">
                                        <button onClick={() => modalShow(mybook._id)} className="me-5 btn btn-primary">Cancel Orders</button>
                                    </div>
                                </div>
                                <div>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Body>Are you sure to want to cancel your Orders ?</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button variant="primary" onClick={() => handleDelete(mybook._id)}>
                                                Confirm
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>

                            </div>
                        </div>
                        )
                    }
                </div>


            </div>
        </DashboardHome>
    );
};

export default Myorders;