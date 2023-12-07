import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUser(result.data);
  };
  return (
    <div className="mx-[100px] my-6 ">
      <div className="py-2">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 ">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={user.id}
                >
                  <td className="px-6 py-4 ">{user.id}</td>
                  <td className="px-6 py-4 ">{user.name}</td>
                  <td className="px-6 py-4 ">{user.username}</td>
                  <td className="px-6 py-4 ">{user.email}</td>
                  <td className="px-6 py-4 ">
                    <button
                      type="button"
                      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
