import PropTypes from "prop-types";
import { LuClock2 } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";
import { GiLevelEndFlag } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import useSpecificTasks from "../../Hooks/useSpecificTasks";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useLoading from "../../Hooks/useLoading";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";
const StudyTasksCard = ({ singleTask }) => {
  const [, refetch] = useSpecificTasks();
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
            refetch();
            Swal.fire({
              title: "Updated!",
              text: ` is new admin`,
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
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deleteStudyTask/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
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
    date,
    subject,
    priority,
    estimatedTime,
    description,
    image,
    _id,
  } = singleTask;

  return (
    <div className="card card-compact  bg-base-100 w-full shadow-xl my-16">
      <figure className="h-48 overflow-hidden">
        <SkeletonWrapper loading={loading} height={192} width={500}>
          <img
            src={image}
            alt={taskTitle.slice(0, 6)}
            className="object-cover w-full h-full"
          />
        </SkeletonWrapper>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <SkeletonWrapper loading={loading} width={150}>
            {taskTitle}
          </SkeletonWrapper>
        </h2>

        <div className="grid grid-cols-2 gap-2">
          <SkeletonWrapper loading={loading} width={80}>
            <p className="flex items-center gap-2">
              <TbCategoryPlus className="text-xl text-[#1E3E62] " />{" "}
              {subject.toUpperCase()}
            </p>
          </SkeletonWrapper>
          <SkeletonWrapper loading={loading} width={80}>
            <p className="flex items-center gap-2">
              <GiLevelEndFlag className="text-xl text-[#1E3E62] " />
              {priority.toUpperCase()}
            </p>
          </SkeletonWrapper>

          <SkeletonWrapper loading={loading} width={80}>
            <p className="flex items-center gap-2">
              <LuClock2 className="text-xl text-[#1E3E62] " />
              {estimatedTime}
            </p>
          </SkeletonWrapper>

          <SkeletonWrapper loading={loading} width={80}>
            <p className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-xl text-[#1E3E62] " />
              {date}
            </p>
          </SkeletonWrapper>
        </div>
        <SkeletonWrapper loading={loading} width={120}>
          <p className="mt-2 text-base">
            <span className="text-[#1E3E62] text-base font-semibold">
              Description :{" "}
            </span>
            {description}
          </p>
        </SkeletonWrapper>
        <div className="card-actions justify-center items-center my-4">
          <SkeletonWrapper loading={loading} height={35} width={80}>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm bg-gradient-to-r from-[#C62E2E] to-[#2C2C2C] text-white"
            >
              Remove
            </button>
          </SkeletonWrapper>

          {loading ? (
            <SkeletonWrapper loading={loading} height={35} width={80} />
          ) : (
            <>
              <p className="text-lg text-center text-[#024CAA] ">---OR---</p>
              {singleTask.status === "completed" ? (
                <p className="text-[#1E3E62]  text-lg">Completed</p>
              ) : (
                <button
                  onClick={() => {
                    handleCompleted(singleTask);
                  }}
                  className="btn btn-sm bg-gradient-to-r from-[#091057] to-[#0d6efd] text-white"
                >
                  Pending...
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
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
