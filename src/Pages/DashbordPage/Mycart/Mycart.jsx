import React from 'react';
import UseMenu from '../../Shared/CoustomHooks/UseMenu';
import Usequery from '../../Shared/CoustomHooks/useQuery';
import Title from '../../Shared/TitleComponent/Title';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Mycart = () => {
    const [cart, refetch] = Usequery()
    const total = cart.reduce((sum, cartitem) => cartitem.price + sum, 0)
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/carts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className='p-4'>
            <Title
                subHeading='-----My Cart-----'
                heading='wanna add more?'
            ></Title>
            <div className="w-3/4 mx-auto bg-white p-4">
                <div className='flex justify-between my-4'>
                    <h2 className='text-3xl font-semibold uppercase'>total orders:{cart.length}</h2>
                    <h2 className='text-3xl font-semibold uppercase'>total price:${total}</h2>
                    <button className='btn bg-[#D1A054] text-white border-none'>pay</button>
                </div>

                <div>
                    <div className="overflow-x-auto">

                        <table className="table w-full">

                            <thead style={{ backgroundColor: '#D1A054' }}>

                                <tr >
                                    <th>

                                    </th>
                                    <th>ITEM IMAGE</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item,index)=> <tr key={item._id}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar rounded-none">
                                                    <div className="mask mask-squircle w-12 h-12 rounded-none">
                                                        <img className='rounded-none' src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>${item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn rounded-none bg-[#B91C1C] text-white border-none  btn-xs"><FaTrashAlt></FaTrashAlt></button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mycart;