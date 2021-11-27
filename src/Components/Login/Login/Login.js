import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import googleIcon from '../../../images/google.png';
import logo from '../../../images/logos/logo.png';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}



const Login = () => {

    const [loggedInsUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        photoURL: '',
        isLoggedIn: false,
        password: '',
        success: '',
        error: '',
    });

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirects) => {
        setLoggedInUser(res);
        setUser(res);
        if (redirects) {
            history.replace(from);
        }
    }

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                const signInUser = {
                    displayName: user.displayName,
                    isLoggedIn: true,
                    email: user.email,
                    success: 'user created successfully',
                    photoURL: user.photoURL
                }
                return signInUser;
            }).catch(error => {
            })
    }

    const googleSignedIn = () => {

        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }


    const googleIconStyle = {
        width: '20px',
        height: '20px',
    }

    const cardStyle = {
        width: '35rem',
        height: '300px',
        margin: 'auto auto',
        borderRadius: '20px',
        boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.1)'
    }

    const makeCenter = {
        height: '100%',
        margin: 'auto 0'
    }

    return (
        <div className="container text-center">
            <div className="text-center mt-5">
                <img style={{ height: '40px' }} src={logo} alt="" />
            </div>

            <div className="card mt-5 col-md-4 col-sm-6  myCard" style={cardStyle}>
                <div style={makeCenter} className="d-flex align-items-center">
                    <div style={{ width: '90%', margin: '0 auto' }} >
                        <h6 className="text-center">Login With</h6>
                        <button
               className="btn bg-light d-flex mt-4 mb-3 rounded-pill"
                            onClick={googleSignedIn}
                            style={{ width: '90%', border: '1px solid gray', margin: '0 auto' }}
                        >
                            <img style={googleIconStyle} src={googleIcon} alt="" />
                            <div style={{ margin: '0 auto' }}>
                                Continue with Google
                            </div>
                        </button>
                        <p >Don't have account ? <span style={{ color: 'green' }}><Link to='/login'>create an account</Link></span></p>
                        <p >Go back to <span ><Link style={{ color: 'red',textDecoration:'none' }} to='/'> home</Link></span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;