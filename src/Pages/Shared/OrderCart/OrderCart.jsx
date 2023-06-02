import React from 'react';

const OrderCart = ({items}) => {
    return (
        <div>
             <div className="grid grid-cols-3 gap-4">
                    {items.map(itme => <div key={itme._id} className="card rounded-none border w-96 bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={itme.image} alt="" />
                        </figure>
                        <div className="card-body items-center bg-slate-50 text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="btn bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] border-x-0 border-t-0 border-b-4 ">add to cart</button>
                            </div>
                        </div>
                    </div>)}
                </div>
                
        </div>
    );
};

export default OrderCart;