import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaEye, FaPen, FaTrashCan } from "react-icons/fa6";
const AssignmentsCard = ({ assignment, onDelete }) => {
  const axiosSecure = useAxiosSecure();
  const { title, imageURL, email } = assignment;

  const handleDeleteAssignment = (assignment) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/deleteMyAssignment/${assignment.email}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              onDelete();
            } else {
              // Handle the case where deletion didn't occur, maybe due to a missing record
              Swal.fire({
                title: "Error!",
                text: "The file could not be deleted. It might not exist.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            // Handle error based on response status
            if (error.response) {
              // Check if the server responded with a status code
              if (
                error.response.status === 403 ||
                error.response.status === 401
              ) {
                Swal.fire({
                  title: "Error!",
                  text: `You don't have permission to delete ${assignment?.name}'s Assignment.`,
                  icon: "error",
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "An error occurred while trying to delete the file.",
                  icon: "error",
                });
              }
            } else {
              // If no response was received, this is an unexpected error
              Swal.fire({
                title: "Error!",
                text: "No response received from the server.",
                icon: "error",
              });
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imageURL} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title : {title}</h2>
        <p>Author : {email}</p>
        <div className="flex justify-evenly">
          <Link to={`/assignmentDetails/${assignment._id}`}>
            <button className="btn  btn-success">
              <FaEye />
            </button>
          </Link>

          <button
            onClick={() => handleDeleteAssignment(assignment)}
            className="btn bg-red-600 text-white"
          >
            <FaTrashCan />
          </button>

          <Link to={`/updateAssignment/${assignment._id}`}>
            <button className="btn  btn-warning">
              <FaPen />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsCard;
