import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
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
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
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
          <Link
            to={"/"}
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
