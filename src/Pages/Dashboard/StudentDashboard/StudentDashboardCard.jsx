import Swal from "sweetalert2";
import useLoading from "../../../Hooks/useLoading";
import useSubmittedAssignment from "../../../Hooks/useSubmittedAssignment";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { IoMdClose } from "react-icons/io";
import SkeletonWrapper from "../../../Utility/SkeletonWrapper";
import { FaEye } from "react-icons/fa6";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";

const StudentDashboardCard = ({ submittedAssignment }) => {
  const axiosPublic = useAxiosPublic();
  const [, refetch] = useSubmittedAssignment();

  const { title, marks, status, feedback, imageURL, obtainedMark, _id } =
    submittedAssignment;
  const loading = useLoading();
  const handleDeleteMarkedAssignment = (id) => {
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
        axiosPublic.delete(`/deleteMarkedAssignment/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      {status === "pending" ? (
        <>
          <AnimatedComponent animation="fade-down-right">
            {/* Card for submitted assignments */}
            <div className="card md:w-96 bg-base-100 shadow-xl dark:shadow-green-500 transition-transform duration-300 hover:shadow-2xl">
              <figure className="h-48 overflow-hidden">
                <SkeletonWrapper loading={loading} width={380} height={180}>
                  <img
                    src={imageURL}
                    alt="Assignment Preview"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </SkeletonWrapper>
              </figure>
              <div className="card-body dark:bg-black dark:rounded-b-lg">
                <h2 className="card-title text-lg font-bold text-gray-800 dark:text-white">
                  <SkeletonWrapper loading={loading} width={300} height={20}>
                    {title}
                  </SkeletonWrapper>
                </h2>
                <SkeletonWrapper loading={loading} width={300} height={30}>
                  <div className="card-actions flex justify-between items-center mt-4">
                    <div className="badge badge-outline text-[#091057] dark:text-white font-semibold badge-lg">
                      Assignment Marks: {marks}
                    </div>
                    <div className="badge badge-outline badge-lg bg-gradient-to-r from-[#C62E2E] to-[#8B0000] bg-clip-text text-transparent">
                      <span className="dark:text-sky-200">{status}</span>
                      <span className="loading loading-ball loading-lg text-[#EC8305] dark:text-white ml-2"></span>
                    </div>
                  </div>
                </SkeletonWrapper>
              </div>
            </div>
          </AnimatedComponent>
        </>
      ) : (
        <>
          {/* Card for showing the mark */}
          <div className="card w-full max-w-md mx-auto bg-base-100 shadow-lg dark:bg-gray-900 dark:shadow-green-500 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
              {title}
            </h2>
            <p
              className={`text-sm font-medium ${
                status.toLowerCase() === "completed"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status.toUpperCase()}
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {obtainedMark}/{marks}
            </p>

            {/* Examiner Feedback Modal Trigger */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  View Examiner&apos;s Feedback
                </span>
                <button
                  onClick={() =>
                    document.getElementById("feedback_modal").showModal()
                  }
                  className="text-blue-500 hover:text-blue-700 transition"
                  aria-label="View Feedback"
                >
                  <FaEye className="text-2xl" />
                </button>
              </div>
              <button
                onClick={() => handleDeleteMarkedAssignment(_id)}
                className="btn btn-circle bg-red-600 dark:bg-red-500 hover:bg-red-700 text-white border-none"
                aria-label="Delete Assignment"
              >
                <IoMdClose className="text-xl" />
              </button>
            </div>

            {/* Modal */}
            <dialog
              id="feedback_modal"
              className="modal modal-bottom sm:modal-middle dark:text-gray-900"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg text-gray-800 dark:text-black">
                  Examiner&apos;s Feedback
                </h3>
                <p className="py-4 text-gray-600 dark:text-gray-800">
                  {feedback}
                </p>
                <div className="modal-action">
                  {/* Close Modal */}
                  <button
                    className="btn bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    onClick={() =>
                      document.getElementById("feedback_modal").close()
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            </dialog>
          </div>
        </>
      )}
    </>
  );
};

export default StudentDashboardCard;
