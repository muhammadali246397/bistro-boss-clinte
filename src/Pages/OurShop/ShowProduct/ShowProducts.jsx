import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import UseMenu from '../../Shared/CoustomHooks/UseMenu';
import OrderCart from '../../Shared/OrderCart/OrderCart';

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
                <OrderCart items={salad}></OrderCart>
            </TabPanel>
            <TabPanel>
            <OrderCart items={pizza}></OrderCart>
            </TabPanel>
            <TabPanel>
            <OrderCart items={desserts}></OrderCart>
            </TabPanel>
            <TabPanel>
            <OrderCart items={soup}></OrderCart>
            </TabPanel>
            <TabPanel>
            <OrderCart items={drinks}></OrderCart>
            </TabPanel>
        </Tabs>
       </div>
    )
}


export default ShowProducts;