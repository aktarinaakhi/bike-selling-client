import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardHome from '../DashboardHome/DashboardHome';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        axios.post('http://localhost:5000/', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Admin inserted Successfully');
                    reset();
                    console.log(res);
                }
            })
    }
    return (
        <DashboardHome>
            <div style={{ backgroundColor: 'whitesmoke', paddingBottom: '5vw', paddingTop: '5vw', textAlign: 'center' }}>
                <h2 className="text-center" style={{ color: '#020f24', fontWeight: 'bold' }}>Make Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label for="email" style={{ color: '#020f24' }}>Enter Email</label> <br />
                    <input style={{ padding: '5px 40px', margin: '5px' }} name='email' {...register("email", { required: true })} /> <br />
                    <input type="submit" style={{ backgroundColor: '#0d6efd', border: 'none', color: 'white', padding: '7px 20px', marginTop: '5px', borderRadius: '5px' }} /> <br />
                    {errors.email && <span>This field is required</span>}

                </form>
            </div>
        </DashboardHome>
    );
};

export default MakeAdmin;