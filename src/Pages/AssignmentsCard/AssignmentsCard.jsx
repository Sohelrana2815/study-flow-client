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
    <AnimatedComponent animation="flip-down">
      <div className="card  bg-base-100 dark:shadow-green-400 dark:shadow-lg shadow-xl">
        <figure className="px-10 pt-10 h-[280px]">
          <SkeletonWrapper loading={loading} width={370} height={180}>
            <img src={imageURL} alt="Shoes" className="rounded-xl" />
          </SkeletonWrapper>
        </figure>
        <div className="card-body dark:bg-black">
          <h2 className="card-title text-[#091057] dark:text-white">
            <SkeletonWrapper loading={loading} height={30} width={120}>
              Title : {title}
            </SkeletonWrapper>
          </h2>
          <p className="text-[#091057] dark:text-white">
            <SkeletonWrapper loading={loading} width={100} height={25}>
              Author : {name}
            </SkeletonWrapper>
          </p>

          <SkeletonWrapper loading={loading} height={20} width={150}>
            <div className="flex justify-evenly">
              <Link to={`/assignmentDetails/${assignment._id}`}>
                <button className="btn  bg-gradient-to-r from-[#091057] to-[#0d6efd] text-white">
                  <FaEye />
                </button>
              </Link>

              <button
                onClick={() => handleDeleteAssignment(assignment)}
                className="btn bg-gradient-to-r from-[#C62E2E] to-[#2C2C2C] text-white"
              >
                <FaTrashCan />
              </button>

              <Link to={`/updateAssignment/${assignment._id}`}>
                <button className="btn  bg-gradient-to-r from-[#A0D683] to-[#4CAF50]">
                  <FaPen />
                </button>
              </Link>
            </div>
          </SkeletonWrapper>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default AssignmentsCard;
