import React from 'react';
import DashboardHome from '../DashboardHome/DashboardHome';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, setUser } = useAuth();
    const history = useHistory();
    console.log(user)
    const onSubmit = data => {
        data.name = user.displayName;
        data.img = user.photoURL;
        fetch('https://immense-scrubland-21302.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Review Added Successfully!')
                history.push('/');
            })
    };
    return (
        <DashboardHome>
            <div className='text-center '>
                <h1 className='text-center mb-5' style={{ color: '#020f24', fontWeight: 'bold' }}> Drop Your Opinion</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label for='reviewRating' style={{ color: '#020f24', marginRight: '15px', fontSize: '20px' }}>Rating</label>
                    <input name='reviewRating' defaultValue='5' style={{ padding: '5px', marginBottom: '20px', marginLeft: '32px', width: '50%' }} placeholder="" {...register("reviewRating", { required: true })} />
                    {errors.reviewRating && <span>This field is required</span>}<br />

                    <label for='profession' style={{ color: '#020f24', marginRight: '15px', fontSize: '20px' }}>Profession</label>
                    <input name='profession' style={{ padding: '5px', marginBottom: '20px', width: '50%' }} placeholder='profession' {...register("profession", { required: true })} />
                    {errors.reviewRating && <span>This field is required</span>}<br />

                    <label for='reviewDescription' style={{ color: '#020f24', marginRight: '15px', fontSize: '20px' }}>Review</label>
                    <input name='reviewDescription' placeholder='Description' {...register("reviewDescription", { required: true })} style={{ height: '6vw', padding: '5px', marginBottom: '20px', marginLeft: '28px', width: '50%' }} /> <br />
                    {errors.reviewDescription && <span>This field is required</span>}

                    <input type="submit" style={{ backgroundColor: 'blue', padding: '10px', color: 'white', border: 'none', width: '30%', borderRadius: '5px' }} />
                </form>
            </div>
        </DashboardHome>
    );
};

export default Review;