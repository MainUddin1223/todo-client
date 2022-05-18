import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth)
    const onSubmit = () => {
        signOut(auth)
    }
    const manuItems =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">To Do</Link></li>
            {user ? <li><button onClick={onSubmit}>Logout</button></li>
                :
                <li><Link to="/login">Login</Link></li>

            }
        </>
    return (

        <div>
            <div className="navbar bg-accent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="text-white menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manuItems}
                        </ul>
                    </div>
                    <Link to='/' ><h1 className='text-white font-bold text-2xl ml-8'>To Do App</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-white text-lg menu menu-horizontal p-0">
                        {manuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;