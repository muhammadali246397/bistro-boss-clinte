import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthPorvider';

const OrderCart = ({ items }) => {
    const { user } = useContext(AuthContext)
    const addToCart = (itme) => {
        console.log(itme)
        const { _id, name, recipe, price, image } = itme;
       

        if (user && user.email) {
            const cartItem = { itemId: _id, name, price, recipe, image, email: user.email }
            fetch('http://localhost:4000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data)
                        alert('complete add')
                    }

                })
        }

    }
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {items.map(itme => <div key={itme._id} className="card rounded-none border w-96 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={itme.image} alt="" />
                    </figure>
                    <div className="card-body items-center bg-slate-50 text-center">
                        <h2 className="card-title">{itme.name}</h2>
                        <p>{itme.recipe}</p>
                        <div className="card-actions">
                            <button onClick={() => addToCart(itme)} className="btn bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] border-x-0 border-t-0 border-b-4 ">add to cart</button>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default OrderCart;