import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardHome from '../DashboardHome/DashboardHome';

const AddProducts = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://immense-scrubland-21302.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId && res.config.data) {
                    alert('product added Successfully');
                    reset();
                    console.log(res);
                }
            })
    }

    return (
        <DashboardHome>
            <div style={{ paddingTop: '5vw', paddingBottom: '5vw', backgroundColor: 'whitesmoke' }}>
                <h3 style={{ color: '#020f24', fontWeight: 'bold' }} className='mb-5 text-center'>Add New Products</h3>
                <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>

                    <input style={{ padding: '5px', width: '70%' }} name="name" placeholder="product name" {...register("name")} className="my-1" />
                    <br />
                    <input style={{ padding: '5px', width: '70%' }} name="descriptoin" placeholder="descriptoin" {...register("descriptoin")} className="my-1" />
                    <br />
                    <input style={{ padding: '5px', width: '70%' }} name="price" placeholder="price" {...register("price")} className="my-1" />
                    <br />
                    <input style={{ padding: '5px', width: '70%' }} name="image" placeholder="image" {...register("image")} className="my-1" /> <br />

                    <br />
                    <input className="btn btn-primary" style={{ padding: '5px', width: '50%', margin: 'auto' }} type="submit" />
                </form>
            </div>
        </DashboardHome>
    );
};

export default AddProducts;