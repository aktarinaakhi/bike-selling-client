import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation'
import './Purchase.css'

const Purchase = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [prodcuts, setprodcuts] = useState([]);
    const [singleService, setSingleService] = useState({})
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://immense-scrubland-21302.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setprodcuts(data))
    }, [])

    useEffect(() => {
        const foundproducts = prodcuts.find(product => product._id === productId);
        setSingleService(foundproducts);
    }, [prodcuts])

    const onSubmit = data => {
        const serviceData = {
            ...data,
            status: 'pending'
        };
        const url = 'https://immense-scrubland-21302.herokuapp.com/orders';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res) {
                    setOrders([]);
                    alert('Order Successfully');
                    reset();
                }
            })
    }

    return (
        <>
            <Navigation></Navigation>

            <div className="card my-5 container p-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={singleService?.image} style={{ width: '400px', height: '400px' }} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4 ps-4">
                        <div className="card-body">
                            <h5 className="card-title">{singleService?.name}</h5>
                            <p className="card-text">{singleService?.descriptoin}</p>
                            <p className="card-text"><small className="text-muted">Price : BDT <strong>{singleService?.price}</strong></small></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} /> <br />
                            <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} /> <br />
                            {errors.email && <span className="error">This field is required</span>} <br />
                            <input placeholder="Address" defaultValue="" {...register("Address", { required: true })} /> <br />
                            {errors.Address && <span>Address is required </span>}
                            <input placeholder="phone number" defaultValue="" {...register("Phone", { required: true })} required /> <br />

                            <input value="Confirm Order" type="submit"></input>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Purchase;