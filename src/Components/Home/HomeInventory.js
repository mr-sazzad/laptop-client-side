import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const HomeInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://pacific-atoll-00696.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  const navigate = useNavigate()
  const updateStock = (id) => {
    navigate(`products/${id}`)
  }
  return (
    <div className='md:p-10 bg-white'>
             <h2 className='text-xl md:text-2xl py-4 font-bold text-green-400'>Inventory</h2>
            {
                products ? <>
               
           
           <div className='md:grid md:grid-cols-2 gap-8 '>

               {
                   products.slice(0, 6).map(item => <div key={item?._id} className="flex justify-center md:h-auto overflow-hidden my-3">
                       <div className="flex border md:h-[260px] p-3 flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                           <img className=" homeimage md:h-auto h-[135px] object-cover w-48 mx-auto md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg" src={item?.img} alt="" />
                           <div className="p-1 pl-2 flex flex-col justify-start text-left">
                               <h5 className="text-gray-900 font-bold  mb-1">{item?.name}</h5>
                               <h5 className="text-gray-900  mb-1 ">Price :  {item?.price}</h5>
                               <h5 className="text-gray-900  text-sm   mb-1">Quantity :{item?.quantity}</h5>
                               <h5 className="text-gray-900 text-sm   mb-1">Supplier Name: {item?.suppliername}</h5>
                               <p className="text-gray-700 text-sm  mb-6" title={item?.description}>
                               </p>
                               <button onClick={() => { updateStock(item?._id) }} type="button" className="inline-block w-[150px] px-6 py-2.5 bg-green-400 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg transition duration-150 ease-in-out">update Stock</button>
                           </div>
                       </div>
                   </div>)
               }

               <div>

               </div>

           </div>
           <Link to={'/manageinventory'}>

               <button className="inline-block w-[190px] px-6 py-2.5 my-6 bg-green-400 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg transition duration-150 ease-in-out">Manage Inventories</button>
           </Link></>
           :
           <Loading />
            }
        </div>
  );
};

export default HomeInventory;