import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Make admin function

  const handleMakeAdmin = (user) => {
    console.log(user);

    Swal.fire({
      title: "Are you sure?",
      text: `${user.name} will be a new Admin!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: `${user.name} is a new Admin.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>All Users</title>
      </Helmet>

      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Manage Users
        </h1>
        <p className="text-center mb-4 text-gray-600 dark:text-gray-400">
          Total Users: <span>{users.length}</span>
        </p>
        <div className="overflow-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="table-auto w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="py-3 px-4">No.</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">
                    {user.role === "admin" ? (
                      <span className="text-green-600 font-medium">Admin</span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs
                        hover:bg-blue-600 transition
                        "
                      >
                        <FaUser className="inline-block mr-1" />
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
