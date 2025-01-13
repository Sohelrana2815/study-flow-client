import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaEye, FaPen, FaTrashCan } from "react-icons/fa6";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";
import useLoading from "../../Hooks/useLoading";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";
const AssignmentsCard = ({ assignment, onDelete }) => {
  const axiosSecure = useAxiosSecure();
  const { title, imageURL, name } = assignment;
  const loading = useLoading();

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
    <AnimatedComponent animation="fade-in">
      <div className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg max-w-sm mx-auto">
        {/* Card Image */}
        <figure className="relative h-56 w-full overflow-hidden rounded-t-lg">
          <SkeletonWrapper loading={loading} width="100%" height="100%">
            <img
              src={imageURL}
              alt="Assignment"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </SkeletonWrapper>
        </figure>

        {/* Card Content */}
        <AnimatedComponent animation="fade-up">
          <div className="card-body p-4">
            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
              <SkeletonWrapper loading={loading} height={30} width={150}>
                Title: {title}
              </SkeletonWrapper>
            </h2>

            {/* Author */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              <SkeletonWrapper loading={loading} width={100} height={25}>
                Author: {name}
              </SkeletonWrapper>
            </p>

            {/* Buttons */}
            <AnimatedComponent animation="fade-left">
              <div className="flex justify-between items-center mt-4">
                {/* View Details */}
                <Link to={`/assignmentDetails/${assignment._id}`}>
                  <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-300">
                    <FaEye className="mr-2" />
                    View
                  </button>
                </Link>

                {/* Delete Assignment */}
                <button
                  onClick={() => handleDeleteAssignment(assignment)}
                  className="btn bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-800 transition-colors duration-300"
                >
                  <FaTrashCan className="mr-2" />
                  Delete
                </button>

                {/* Edit Assignment */}
                <Link to={`/updateAssignment/${assignment._id}`}>
                  <button className="btn bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-800 transition-colors duration-300">
                    <FaPen className="mr-2" />
                    Edit
                  </button>
                </Link>
              </div>
            </AnimatedComponent>
          </div>
        </AnimatedComponent>
      </div>
    </AnimatedComponent>
  );
};

export default AssignmentsCard;
