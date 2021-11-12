import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, error } = useAuth();
    const history = useHistory();


    const handleSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);

        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        e.preventDefault();
    };

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <div>
            <Navigation></Navigation>

            <div className="text-center my-5">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onBlur={handleOnBlur}
                        name='name'
                        type='name'
                        style={{ marginBottom: '1vw', width: '20%' }}
                        defaultValue="name" />
                    <br />

                    <input
                        name='email'
                        type='email'
                        onBlur={handleOnBlur}
                        style={{ width: '20%' }}
                        placeholder="Email" /><br />
                    {error.email && <span>This field is required</span>}<br />

                    <input
                        name='password'
                        type='password'
                        onBlur={handleOnBlur}
                        style={{ width: '20%' }}
                        placeholder="Password" /><br />
                    {error.password && <span>This field is required</span>}<br />

                    <input
                        name='password2'
                        type='password'
                        onBlur={handleOnBlur}
                        style={{ width: '20%' }}
                        placeholder="Re-enter Password" /><br />
                    {error.password2 && <span>This field is required</span>}<br />

                    <input
                        className="mb-3"
                        style={{ width: '20%', backgroundColor: 'blue', border: 'none', padding: '10px', borderRadius: '5px', color: 'white' }}
                        type="submit" />
                </form>
                <NavLink to="/login">
                    <span>Already Registered?</span>
                    <button style={{ border: 'none' }} className=""> Please Login</button>
                </NavLink>
                {isLoading && <Spinner animation="border" />}
                {user?.email && <Alert variant="success"> User Created successfully!</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

            </div>



            <Footer></Footer>
        </div>

    );
};

export default Register;