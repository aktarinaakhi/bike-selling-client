import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, error } = useAuth();
    const history = useHistory();
    const location = useLocation();
    // const redirect_url = location.state?.from || '/home'

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }




    // const googleSignIn = () => {
    //     handleGoogleSignIn()
    //         .then(result => {
    //             setIsLoading(true);
    //             history.push(redirect_url);
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         })


    // };


    return (
        <>
            <Navigation></Navigation>
            <div className="text-center my-5">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>


                    <input
                        name='email'
                        type='email'
                        onChange={handleOnChange}
                        style={{ width: '20%' }}
                        placeholder="Email" /><br />
                    {error.email && <span>This field is required</span>}<br />

                    <input
                        name='password'
                        type='password'
                        onChange={handleOnChange}
                        style={{ width: '20%' }}
                        placeholder="Password" /><br />
                    {error.password && <span>This field is required</span>}<br />


                    <input
                        className="mb-3"
                        style={{ width: '20%', backgroundColor: 'blue', border: 'none', padding: '10px', borderRadius: '5px', color: 'white' }}
                        type="submit" />
                </form>
                <NavLink to="/register">
                    <span>New User?</span>
                    <button style={{ border: 'none' }} className=""> Please Register</button>
                </NavLink>
                {isLoading && <Spinner animation="border" />}
                {user?.email && <Alert variant="success"> Login successfully!</Alert>}
                {/* {error && <Alert variant="danger">{error}</Alert>} */}

            </div>
            <div className="text-center my-5 py-5">
                <button onClick={signInWithGoogle} className="bg-secondary mx-auto text-white py-2 px-4"><i className="bi bi-google me-4"></i>Continue with Google</button>

            </div>

            <Footer></Footer>
        </>
    );
};

export default Login;