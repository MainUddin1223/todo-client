import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Activity from './Activity';

const TodoList = () => {
    const [user, loading] = useAuthState(auth)
    const [lists, setLists] = useState([])

    const email = user?.email
    console.log(email);
    const { register, formState: { errors }, handleSubmit } = useForm();
    console.log(lists);


    const onSubmit = (data) => {
        const name = data.name;
        const detail = data.details;
        const newData = { name, detail, email }
        const url = `https://fast-island-71555.herokuapp.com/todoList`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
            .then(res => res.json())
            .then(data => {
                toast.success('List Added', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });;
            })
    }
    const url = `https://fast-island-71555.herokuapp.com/todoList?email=${email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLists(data)
            })
    }, [user, lists])

    return (
        <div className='mt-4 '>
            <div className=' card bg-white w-full max-w-xl  bg-base-100 shadow-xl mx-auto my-16'>
                <form className='bg-white mx-2' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Task Name</span>
                        </label>
                        <input className='bg-white input input-bordered w-full max-w-xl' {...register("name", {
                            required: {
                                value: true,
                                message: 'Task Name is required'
                            }
                        })} />
                        {errors.name?.type === 'required' && <span className='text-lg label-text-alt text-red-500'>{errors.name.message}</span>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Details</span>
                        </label>
                        <input className='bg-white input input-bordered w-full max-w-xl' {...register("details", {
                            required: {
                                value: true,
                                message: 'Details is required'
                            },
                        })} />
                        {errors.details?.type === 'required' && <span className='text-lg label-text-alt text-red-500'>{errors.details.message}</span>}
                    </div>
                    <input type="submit" value='Add to list' className="input bg-accent text-lg my-4 text-white w-full max-w-xl" />
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th className='text-xl '>Confirm</th>
                            <th className='text-xl '>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists.map(list => <Activity key={list._id} list={list}></Activity>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;