import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../Firebase.init";

const AddItems = () => {
  const [user] = useAuthState(auth);

  const additem = (e) => {
    e.preventDefault();
    const item = {
      email: user?.email,
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      quantity: e.target.quantity.value,
      suppliername: e.target.suppliername.value,
      img: e.target.img.value,
    };

    fetch("https://pacific-atoll-00696.herokuapp.com/addItem", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.acknowledged) {
          toast("Item Added Successful!");
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl my-5 font-bold text-green-400">
        {" "}
        Add Item{" "}
      </h2>

      <form onSubmit={additem} className="md:w-2/4 mx-auto p-2 mb-10">
        <div className="form-group mb-6">
          <input
            type="text"
            name="name"
            className="form-control block
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
           focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
            placeholder="Item Name"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input
              type="text"
              name="price"
              className="form-control
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
             focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
              id="exampleInput123"
              placeholder="Price"
              required
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="quantity"
              className="form-control
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
             focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
              id="exampleInput124"
              placeholder="Quantity"
              required
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            name="suppliername"
            className="form-control
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
             focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
            id="exampleInput123"
            placeholder="Supplier Name"
            required
          />
        </div>

        <div className="form-group mb-6">
          <input
            type="email"
            name="email"
            className="form-control block 
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
          focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none readOnly"
            id="exampleInput125"
            value={user?.email}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            name="img"
            className="form-control block
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
          focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
            id="exampleInput126"
            placeholder="Image Url"
            required
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            name="description"
            className="w-full h-24"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="
        w-full
        px-6
        py-2.5
        bg-green-400
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
        ease-in-out"
        >
          Add Now
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddItems;