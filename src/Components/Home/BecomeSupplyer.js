import React from 'react';

const BecomeSupplyer = () => {
    return (
        <div className='mx-auto flex flex-col pb-10 justify-center items-center bg-white '>
        <h2 className='text-xl md:text-2xl my-5  font-bold text-green-500'>Become A Supplier</h2>
  
        <div className="block p-6 rounded-lg shadow-lg bg-white md:w-3/4">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input type="text" className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="exampleInput128"
             placeholder="First name" />
              </div>
              <div className="form-group mb-6">
                <input type="text" className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="exampleInput127"
                 placeholder="Last name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input type="text" className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="exampleInput123"
            placeholder="Company Address" />
              </div>
              <div className="form-group mb-6">
                <input type="text" className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="exampleInput124"
             placeholder="Brand Name" />
              </div>
            </div>
            <div className="form-group mb-6">
              <input type="num" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="exampleInput121"
                placeholder="Phone Number" />
            </div>
            <div className="form-group mb-6">
              <input type="email" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="exampleInput125"
                placeholder="Email address" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput126"
                placeholder="Password" />
            </div>
        
            <button type="submit" className="
        w-1/4
        mx-auto
        px-6
        py-2.5
        bg-green-500
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-green-500 hover:shadow-lg
        focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green-500 active:shadow-lg
        transition
        duration-150
        ease-in-out">Create</button>
          </form>
        </div>
  
      </div>
    );
};

export default BecomeSupplyer;