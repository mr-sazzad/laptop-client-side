import React from 'react';
import './OurSuppliers.css';

const OurSupplyers = () => {
    return (
        <div class=" suppliers-div card lg:card shadow-xl m-10">
        <h1 className='text-4xl font-bold text-green-400 mb-5 pt-10'>OUR SUPPLIERS</h1>
                  <h5 className='text-xl text-blue-900 font-semibold
                  '>JUST 3 SUPPLIERS FROM OUR ALL SUPPLIERS</h5>
                  
                  <div className='flex flex-col justify-center lg:flex-row lg:justify-around py-10'>
                      <div className='suppliers-card mt-7'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqPeRNsMXeKIW6pfbwph-hnPFisrqb5sRrR0HKYOMfLwc0sDI8w4Txi2LKZTQpwBkrB8&usqp=CAU' alt='' />
                          <h2 className='text-xl font-medium'>J.smith</h2>
                      </div>
                      <div className='suppliers-card mt-7'>
                          <img src='https://www.kindpng.com/picc/m/365-3653285_african-american-delivery-man-png-download-aviation-ground.png' alt='' />
                          <h2 className='text-xl font-medium'>S.khan</h2>
                      </div>
                      <div className='suppliers-card mt-7'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKwdP8XnV6-JfJbyjHlbtYGYnZ65Fmxk8Y_j8eOAYsw96hJwgmdIuckaMdIExckWPyeU&usqp=CAU' alt='' />
                          <h2 className='text-xl font-medium'>J.doe</h2>
                      </div>
                     
                  </div>
      </div>
    );
};

export default OurSupplyers;