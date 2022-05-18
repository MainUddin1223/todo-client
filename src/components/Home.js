import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div>
                <h1 className='text-5xl font-serif'>Welcome to TO DO APP</h1>
                <Link to='/todo'> <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-secondary mt-4 block mx-auto">Clip your Activities</button></Link>

            </div>
        </div>
    );
};

export default Home;