import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation'

const Login = () => {

    const { signInWithGoogle, setIsLoading, isLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

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

            <div className="text-center my-5 py-5">
                <button onClick={signInWithGoogle} className="bg-secondary mx-auto text-white py-2 px-4"><i className="bi bi-google me-4"></i>Continue with Google</button>

            </div>

            <Footer></Footer>
        </>
    );
};

export default Login;