import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    // const [token, setToken] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/home';
                history.push(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //common method function
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://immense-scrubland-21302.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(data => console.log(data))
    }
    //register data
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //login data
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //for user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe();
    }, [auth])

    // for admin
    useEffect(() => {
        fetch(`https://immense-scrubland-21302.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    };


    return (
        {
            user,
            setUser,
            signInWithGoogle,
            logOut,
            isLoading,
            setIsLoading,
            error,
            setError,
            registerUser,
            loginUser,
            admin

        }
    );
};

export default useFirebase;