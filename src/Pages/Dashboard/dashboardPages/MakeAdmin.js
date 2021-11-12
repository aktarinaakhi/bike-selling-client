import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { error } = useAuth();

    const handleOnblur = e => {
        setEmail(e.target.value);
    }
    const handleSubmit = e => {
        const user = { email }
        fetch('https://immense-scrubland-21302.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                setSuccess(true);
                setEmail('')
                console.log(data)
            }

            )


        e.preventDefault();
    }
    return (
        <DashboardHome>
            <div style={{ backgroundColor: 'whitesmoke', paddingBottom: '5vw', paddingTop: '5vw', textAlign: 'center' }}>
                <h2 className="text-center" style={{ color: '#020f24', fontWeight: 'bold' }}>Make Admin</h2>
                <form onSubmit={handleSubmit}>

                    <label for="email" style={{ color: '#020f24' }}>Enter Email</label> <br />
                    <input onBlur={handleOnblur} style={{ padding: '5px', margin: '5px', width: '30%' }} type='email' name='email' /> <br />

                    <input type="submit" style={{ backgroundColor: '#0d6efd', border: 'none', color: 'white', padding: '7px 20px', marginTop: '5px', borderRadius: '5px' }} /> <br />
                    {error.email && <span>This field is required</span>}

                </form>
                {success && <Alert variant="success"> Made Admin successfully!</Alert>}

            </div>
        </DashboardHome>
    );
};

export default MakeAdmin;