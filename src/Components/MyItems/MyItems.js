import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase.init";
import Loading from "../Loading/Loading";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const updateStock = (id) => {
    navigate(`/products/${id}`);
  };
  
  if (loading) {
    <Loading />;
  }
  useEffect(() => {
    const email = user?.email;
    
    fetch(`https://pacific-atoll-00696.herokuapp.com/orders?email=${email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, [user]);

  const addItem = () => {
    navigate("/addItem");
  };

  const deleteItem = (id) => {
    fetch(`https://pacific-atoll-00696.herokuapp.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json(id))
      .then((json) => {
        if (json.acknowledged) {
          toast("Delete Successful!");
          const remaining = products.filter((item) => item._id !== id);
          setProducts(remaining);
        }
      });
  };

  return (
    <div className="mb-20">
      <div className="h-[30vh] flex flex-col mb-4 items-center justify-center stockheader">
        <h2 className="text-xl md:text-2xl my-5 font-bold text-green-400">
          My Item : {products?.length}
        </h2>
        <button
          onClick={addItem}
          className="border border-green-400 my-2 mb-4 font-bold p-2"
        >
          Add New Item
        </button>
      </div>

      {products ? (
        <>
          <div className="hidden md:flex flex-col md:w-3/4 mx-auto border text-left">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products?.map((item) => (
                        <tr key={item?._id} className="bg-gray-50 border-b">
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item?.name}
                          </td>
                          <td className="text-sm text-green-400 font-light px-6 py-4 whitespace-nowrap">
                            {item?.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item?.quantity >= 1 ? (
                              item.quantity
                            ) : (
                              <span className="text-red-500">Out Of Stock</span>
                            )}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className="flex">
                              <button
                                onClick={() => {
                                  updateStock(item?._id);
                                }}
                                className="border border-green-400 rounded-lg hover:bg-green-200 p-2 mx-2"
                              >
                                Update Stock
                              </button>
                              <button
                                onClick={() => deleteItem(item?._id)}
                                className="border border-red-600 rounded hover:bg-red-300 p-2"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden ">
            {products?.map((item) => (
              <div className="w-full shadow-md p-2 my-2" key={item?._id}>
                <h2 className="font-bold text-xl"> Name : {item?.name}</h2>
                <h2 className="text-green-400">Email {item?.email}</h2>
                <h2>Quantity {item?.quantity}</h2>
                <div className="flex justify-center mt-5 mb-3">
                  <button
                    onClick={() => {
                      updateStock(item?._id);
                    }}
                    className="border border-green-400 rounded hover:bg-green-200 p-2 mx-2"
                  >
                    Update Stock
                  </button>
                  <button
                    onClick={() => deleteItem(item?._id)}
                    className="border border-red-600 rounded hover:bg-red-300 p-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
      <ToastContainer />
    </div>
  );
};

export default MyItems;
