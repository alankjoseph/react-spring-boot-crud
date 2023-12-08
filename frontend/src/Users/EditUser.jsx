import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function EditUser({ id, closeModal }) {
  
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  useEffect(() => {
    getUser();
  }, [id]);
  const getUser = async () => {
    console.log(id);
    const res = await axios.get("http://localhost:8080/user/" + id);
    console.log(res.data.name)
    setUser({
      ...user,
      name: res.data.name,
      username: res.data.username,
      email: res.data.email,
    });
   
    console.log(user);
    
  };
  const { name, username, email } = user;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.length == 0 || username.length == 0 || email.length == 0) {
      return;
    }
    await axios.put("http://localhost:8080/user/" + id, user);
    closeModal()
    
  };
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit User
            </h3>
            <button
              onClick={closeModal}
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              {/* Close button icon */}
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5">
            <form
              onSubmit={(e) => onSubmit(e)}
              className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-200 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  type="text"
                  placeholder="Enter your name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-200 text-sm font-bold mb-2"
                >
                  Username
                </label>
                <input
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                  type="text"
                  placeholder="Enter your username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-200 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  type="email"
                  placeholder="Enter your email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
