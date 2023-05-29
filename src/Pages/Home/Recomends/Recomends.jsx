import React from 'react';
import Title from '../../Shared/TitleComponent/Title';
import salad from '../../../assets/menu/salad-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'

const Recomends = () => {

    return (
        <div className='my-20'>
            <Title
                subHeading={'-----Should Try-----'}
                heading={'CHEF RECOMMENDS'}
            ></Title>
            <div className='grid md:grid-cols-3'>
                <div className="card rounded-none border w-96 bg-base-100 shadow-xl">
                    <figure className="">
                       <img src={salad} alt="" />
                    </figure>
                    <div className="card-body items-center bg-slate-50 text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] border-x-0 border-t-0 border-b-4 ">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none border w-96 bg-base-100 shadow-xl">
                    <figure className="">
                       <img src={pizza} alt="" />
                    </figure>
                    <div className="card-body items-center bg-slate-50 text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] border-x-0 border-t-0 border-b-4 ">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none border w-96 bg-base-100 shadow-xl">
                    <figure className="">
                       <img src={soup} alt="" />
                    </figure>
                    <div className="card-body items-center bg-slate-50 text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] border-x-0 border-t-0 border-b-4 ">add to cart</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Recomends;