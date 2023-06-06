import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Title from '../../../Shared/TitleComponent/Title';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const User = () => {
    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const result = await fetch('http://localhost:4000/user')
        return result.json();
    })
    console.log(users)

    const handleDelete = id => {

    }

    const updateAdmin = (id) => {
        console.log(id)
        fetch(`http://localhost:4000/user/admin/${id}`,{
            method:'PATCH',
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount>0){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `admin done`,
                showConfirmButton: false,
                timer: 1500
              })
           }
        })

    }

    return (
        <div>
            <Title
                subHeading={'-----How Many??-----'}
                heading={'manage all users'}
            ></Title>
            <div className='w-3/4 mx-auto p-4 bg-white mt-5'>
                <h2 className='text-3xl font-bold'>Total Users: {users.length}</h2>
                <div className="overflow-x-auto  mt-5">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className='bg-red-300'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    users.map((user, index) => <tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{
                            user.role === 'admin'? 'admin':<button onClick={() => updateAdmin(user._id)} className="btn rounded-none bg-[#D1A054] text-white border-none  btn-xs"><FaUsers></FaUsers></button>
                            }</td>
                        <td><button onClick={() => handleDelete(user._id)} className="btn rounded-none bg-[#B91C1C] text-white border-none  btn-xs"><FaTrashAlt></FaTrashAlt></button></td>
                    </tr>)
                }

                    </tbody>
                </table>
            </div>
            </div>
           
        </div>
    );
};

export default User;