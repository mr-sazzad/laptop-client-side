import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateInventory = () => {
    const { id } = useParams()
    const [inventory, setInventory] = useState({})
    let { img, name, price, quantity, description, supplier } = inventory
    useEffect(() => {
        fetch(`https://pacific-atoll-00696.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    const restock = (e) => {
        e.preventDefault()
        let updatedQuantity = parseFloat(+ inventory.quantity) + parseFloat(e.target.updateQuantity.value)
        let newInventory = { img, name, price, quantity: updatedQuantity, description, supplier }
        setInventory(newInventory)
        fetch(`https://pacific-atoll-00696.herokuapp.com/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                e.target.reset()
                toast('Restock Success')
            }
            )
    }

    const delivered = () => {
        if (quantity >= 1) {
            let Remaining = parseFloat(+ inventory.quantity) - 1
            let newInventory = { img, name, price, quantity: Remaining, description, supplier }
            setInventory(newInventory)
            fetch(`https://pacific-atoll-00696.herokuapp.com/products/${id}`, {
                method: 'PUT',
                body: JSON.stringify(newInventory),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    toast('Delivered Success')
                }
                )
        }
        else {
            toast('Already Out of Stock')
        }
    }
    return (
        <div className='h-auto py-6 mb-24' >
        <h2 className="text-xl font-bold underline text-indigo-500">
            {name}
        </h2>
        <div className=" md:p-5 w-3/4 mx-auto md:grid grid-cols-3 gap-4" >
            <div className="border h-[350px] p-3 image-box">
                <img className='w-full' src={img} alt="" />
            </div>
            <div className=" py-3 px-2 h-auto col-span-2 text-left">
                <h3 className="text-2xl mb-2 font-bold">
                    {name}
                </h3>
                <h3 className="text-sm mb-2  text-blue-500">
                    {supplier}
                </h3>
                <hr />
                <h3 className='mb-2 text-xl'>
                    Price :   <span className="font-bold">{price} BDT</span>
                </h3>
                <h3 className='mb-2'>
                    Quantity :   <span className="font-bold border px-2 mx-3">{quantity >= 1 ? quantity : <span className='text-red-500'>Out Of Stock</span> }</span>
                </h3>
                <h3 className='mb-2 h-auto text-justify'>
                    Description :   <span >{description}</span>
                </h3>
                <button onClick={() => delivered(quantity)} type='button' className="inline-block w-[150px] px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delivered</button>
            </div>


        </div>
        <div className="border-b w-1/4 border-gray-30 mx-auto"></div>
        <div>
            <h2 className="text-xl font-bold text-indigo-500 my-3">
                Restock Item
            </h2>
            <div className="flex justify-center items-center content-center w-full ">
                <form onSubmit={restock}>
                    <input
                        type="number"
                        name='updateQuantity'
                        className="
          form-control
          
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                        id="exampleFormControlInput1"
                        placeholder="Add Quantity"
                        required />


                    <button type="submit" className=" mx-2 inline-block  px-6 my-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Now</button>
                </form>

            </div>
        </div>

        <ToastContainer />
    </div>
    );
};

export default UpdateInventory;