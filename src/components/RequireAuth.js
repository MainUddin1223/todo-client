import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Spinner from './Spinner';

const RequireAuth = ({ children }) => {
    const navigate = useNavigate()
const [user,loading]=useAuthState(auth)
    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return navigate('/login')


    }
    return children;

};

export default RequireAuth;