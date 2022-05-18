import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Spinner from './Spinner';

const Social = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        navigate('/')
    }
    const handleGoogleLogin = async (event) => {
        event.preventDefault();
        await signInWithGoogle()
    }
    return (
        <div>
            <button className='input w-full bg-white input-bordered text-xl' onClick={handleGoogleLogin}>Continue With Google</button>
        </div>
    );
};

export default Social;