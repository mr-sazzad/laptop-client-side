import React from 'react';
import Banner from './Banner';
import BecomeSupplyer from './BecomeSupplyer';
import HomeInventory from './HomeInventory';
import OurSupplyers from './OurSupplyers';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner />
            <HomeInventory />
            <BecomeSupplyer />
            <OurSupplyers />
        </div>
    );
};

export default Home;