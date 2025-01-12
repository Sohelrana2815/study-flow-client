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

  // Delete user option or function
  const handleDeleteUser = (user) => {
    console.log(user._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be abel to revert this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#31511E",
      cancelButtonColor: "#C80036",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: `${user.name} has been removed!`,
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
      <div>
        <p className="text-center py-6 font-serif text-xl">
          Total Users : {users.length}
        </p>
        <div>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="dark:text-white">
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>
                      {user.role === "admin" ? (
                        <span>Admin</span>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-sm"
                        >
                          <FaUser />
                        </button>
                      )}
                    </td>
                    <td>
                      {user.role === "admin" ? null : (
                        <button
                          onClick={() => handleDeleteUser(user)}
                          className="btn btn-sm bg-red-600 border-none"
                        >
                          <FaTrashCan className="text-white" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
