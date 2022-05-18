import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Activity = ({ list }) => {
    const [confirmed, setConfirmend] = useState(false)
    const handleClick = id => {
        const url = `https://fast-island-71555.herokuapp.com/todoList/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
            })
    }
    const handleConfirm = () => {
        setConfirmend(true)
        toast.success('List confirmed', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (
        <tr className="hover">
            {
                confirmed ? <td style={{ 'textDecoration': 'line-through' }}>{list.name}</td> :
                    <td >{list.name}</td>
            }
            <td>{list.detail}</td>

            <td>
                <button onClick={handleConfirm} className='btn btn-accent'>confirm</button>
            </td>
            <td > <button className='btn btn-accent' onClick={() => handleClick(list._id)}>Remove</button></td>
        </tr>
    );
};

export default Activity;