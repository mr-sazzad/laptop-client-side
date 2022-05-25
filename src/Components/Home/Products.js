import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
        const [products, setProducts] = useState([]);
        useEffect(() => {
          fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
        }, []);
        const updateStock = (id) => {
          navigate(`/products/${id}`)
      }
        return (
          <div>
            <h1 className="text-center text-2xl text-green-400 font-bold mt-10 lg:mt-20 mb-5 lg:mb-8">INVENTORIES</h1>
            <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-12">
              {products.map((product, i) => (
                <div key={i} className=" border  p-3 h-[550px]  md:max-w-xl rounded-lg bg-white shadow-lg mb-5">
                <img className="h-[50%] object-cover w-full  mx-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src={product?.img} alt="" />
                <div className="p-1 pl-2 flex flex-col justify-start text-left">
                    <h5 className="text-gray-900 font-bold  mb-1">{product?.name}</h5>
                    <h5 className="text-gray-900  mb-1 ">Price :  {product?.price}</h5>
                    <h5 className="text-gray-900  text-sm   mb-1 ">Quantity :{product?.quantity >= 1 ? product?.quantity : <span className='text-red-500 border font-bold p-1 m-1'>Out Of Stock</span> }</h5>
                    <h5 className="text-gray-900 text-sm   mb-1">Supplier Name: {product?.supplier}</h5>
                    <p className="text-gray-700 text-sm  mb-6" title={product?.description}>
                
                    </p>
                    
                </div>
                <button onClick={() => { updateStock(product?._id) }} type="button" className="inline-block w-[150px] px-6 py-2.5 bg-green-400 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg transition duration-150 ease-in-out">view details</button>
            </div>
              ))}
            </div>
          </div>
    );
};

export default Products;