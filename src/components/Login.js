import React from 'react';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from './Social';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = async data => {
        const email = data.email;
        const password = data.password
        await signInWithEmailAndPassword(email, password)
    };
    if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        navigate('/')
    }
    return (
        <div className='p-4'>
            <div className="card w-full max-w-xl  bg-white shadow-xl mx-auto my-16">
                <h1 className='text-center text-2xl my-4'>Login</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input className=" bg-white input input-bordered w-full max-w-xl" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>
                            <input className=" bg-white input input-bordered w-full max-w-xl" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 tharactar'
                                }
                            })} />
                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        </div>
                        <input type="submit" value='Login' className="input bg-accent text-xl my-4 text-white w-full max-w-xl" />

                    </form>
                    {/* end */}
                    <p className='text-center'>New to Doctors Portal??<Link to="/signup"><span className='px-2 text-primary'>Create new account</span></Link></p>
                    <div className="divider">OR</div>
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default Login;