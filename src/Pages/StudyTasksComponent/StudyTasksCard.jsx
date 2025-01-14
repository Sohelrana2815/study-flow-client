import PropTypes from "prop-types";
import { LuClock2 } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";
import { GiLevelEndFlag } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useLoading from "../../Hooks/useLoading";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";
import { FaLock } from "react-icons/fa6";
const StudyTasksCard = ({ singleTask, onDelete, onUpdate }) => {
  const axiosPublic = useAxiosPublic();
  const loading = useLoading();
  const handleCompleted = (task) => {
    console.log(task);
    Swal.fire({
      title: "Do you Competed the task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Completed!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/updateStudyTask/${task._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            onUpdate();
            Swal.fire({
              title: "Great Job!",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deleteStudyTask/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            onDelete();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Removed successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  const {
    taskTitle,
    status,
    date,
    subject,
    priority,
    estimatedTime,
    description,
    image,
    _id,
  } = singleTask;

  return (
    <AnimatedComponent animation="zoom-in">
      <div className="card bg-base-100 dark:bg-gray-900 shadow-xl rounded-lg w-full max-w-md mx-auto my-8 transition-transform duration-300 hover:scale-105">
        {/* Image Section */}
        <figure className="h-48 overflow-hidden rounded-t-lg">
          <SkeletonWrapper loading={loading} height={192} width={500}>
            <img
              src={image}
              alt={taskTitle.slice(0, 6)}
              className="object-cover w-full h-full"
            />
          </SkeletonWrapper>
        </figure>

        {/* Card Body */}
        <div className="p-6">
          {/* Task Title */}
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            <SkeletonWrapper loading={loading} width={200}>
              {taskTitle}
            </SkeletonWrapper>
          </h2>

          {/* Task Details */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <SkeletonWrapper loading={loading} width={100}>
              <p className="flex items-center gap-2">
                <TbCategoryPlus className="text-lg text-blue-600 dark:text-green-500" />
                {subject.toUpperCase()}
              </p>
            </SkeletonWrapper>
            <SkeletonWrapper loading={loading} width={100}>
              <p className="flex items-center gap-2">
                <GiLevelEndFlag className="text-lg text-blue-600 dark:text-green-500" />
                {priority.toUpperCase()}
              </p>
            </SkeletonWrapper>
            <SkeletonWrapper loading={loading} width={100}>
              <p className="flex items-center gap-2">
                <LuClock2 className="text-lg text-blue-600 dark:text-green-500" />
                {estimatedTime}
              </p>
            </SkeletonWrapper>
            <SkeletonWrapper loading={loading} width={100}>
              <p className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-lg text-blue-600 dark:text-green-500" />
                {date}
              </p>
            </SkeletonWrapper>
          </div>

          {/* Description */}
          <SkeletonWrapper loading={loading} width={180}>
            <p className="mt-4 text-sm">
              <span className="font-medium text-gray-800 dark:text-green-400">
                Description:{" "}
              </span>
              {description}
            </p>
          </SkeletonWrapper>

          {/* Actions */}
          <div className="mt-6 flex justify-around items-center">
            <SkeletonWrapper loading={loading} height={40} width={90}>
              {status === "completed" ? (
                <button
                  onClick={() => handleDelete(_id)}
                  className="px-4 btn py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:opacity-90 focus:outline-none"
                >
                  Remove Task
                </button>
              ) : (
                <button
                  className="border px-6 py-2 rounded-lg flex items-center gap-x-1"
                  disabled
                >
                  Remove Task <FaLock className="text-red-600" />
                </button>
              )}
            </SkeletonWrapper>

            {loading ? (
              <SkeletonWrapper loading={loading} height={40} width={90} />
            ) : (
              <>
                {singleTask.status === "completed" ? (
                  <p className="text-green-500 font-semibold">Completed!</p>
                ) : (
                  <button
                    onClick={() => handleCompleted(singleTask)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:opacity-90 focus:outline-none"
                  >
                    Mark as Complete
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </AnimatedComponent>
  );
};
// Define PropTypes for singleTask
StudyTasksCard.propTypes = {
  singleTask: PropTypes.shape({
    taskTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, // or PropTypes.instanceOf(Date) if it's a Date object
    subject: PropTypes.string.isRequired,
    priority: PropTypes.oneOf(["low", "medium", "high"]).isRequired, // Adjust according to your priority levels
    estimatedTime: PropTypes.string.isRequired, // Adjust type based on how you want to represent time (e.g., '2 hours')
    description: PropTypes.string,
    image: PropTypes.string, // Assuming it's a URL string
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudyTasksCard;
