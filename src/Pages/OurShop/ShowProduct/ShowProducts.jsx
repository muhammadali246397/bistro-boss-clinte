import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import UseMenu from '../../Shared/CoustomHooks/UseMenu';

const ShowProducts = () => {
    const [menu] = UseMenu();
    const [tabindex, setTabindex] = useState(0);
    const salad = menu.filter(items => items.category === "salad")
    const pizza = menu.filter(items => items.category === "pizza")
    const desserts = menu.filter(items => items.category === "dessert")
    const soup = menu.filter(items => items.category === "soup")
    const drinks = menu.filter(items => items.category === "drinks")
    return (
       <div className='my-20'>
         <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
            <TabList className="text-center border-white my-10">
                <Tab style={{ border: 'none' }} ><button className='btn btn-outline border-0'>Salad</button></Tab>
                <Tab style={{ border: 'none' }} ><button className='btn btn-outline border-0'>Pizza</button></Tab>
                <Tab style={{ border: 'none' }} ><button className='btn btn-outline border-0'>Desserts</button></Tab>
                <Tab style={{ border: 'none' }} ><button className='btn btn-outline border-0'>Soup</button></Tab>
                <Tab style={{ border: 'none' }} ><button className='btn btn-outline border-0'>Drinks</button></Tab>
            </TabList>

            <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {salad.map(itme => <div key={itme._id} className="card rounded-none border w-96 bg-base-100 shadow-xl">
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
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-3 gap-4">
                    {pizza.map(itme => <div key={itme._id} className="card rounded-none border w-96 bg-base-100 shadow-xl">
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
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-3 gap-4">
                    {desserts.map(itme => <div key={itme._id} className="card rounded-none border w-96 bg-base-100 shadow-xl">
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
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-3 gap-4">
                    {soup.map(itme => <div key={itme._id} className="card rounded-none border w-96 bg-base-100 shadow-xl">
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
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-3 gap-4">
                    {drinks.map(itme => <div key={itme._id} className="card rounded-none border w-96 bg-base-100 shadow-xl">
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
            </TabPanel>
        </Tabs>
       </div>
    )
}


export default ShowProducts;