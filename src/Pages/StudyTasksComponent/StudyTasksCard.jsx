import { LuClock2 } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";
import { GiLevelEndFlag } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
const StudyTasksCard = ({ singleTask }) => {
  const {
    taskTitle,
    date,
    subject,
    priority,
    estimatedTime,
    description,
    image,
  } = singleTask;

  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure className="h-48 overflow-hidden">
        {" "}
        {/* Fixed height for images */}
        <img
          src={image}
          alt={taskTitle.slice(0, 6)}
          className="object-cover w-full h-full" // Ensures the image covers the area without distortion
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{taskTitle}</h2>
        <div className="grid grid-cols-2 gap-2">
          <p className="flex items-center gap-2">
            <TbCategoryPlus className="text-xl text-green-500" />{" "}
            {subject.toUpperCase()}
          </p>
          <p className="flex items-center gap-2">
            <GiLevelEndFlag className="text-xl text-green-500" />
            {priority.toUpperCase()}
          </p>
          <p className="flex items-center gap-2">
            <LuClock2 className="text-xl text-green-500" />
            {estimatedTime}
          </p>

          <p className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-xl text-green-500" />
            {date}
          </p>

          <p className="flex items-center gap-2">
            <MdOutlineDescription className="text-xl text-green-500" />
            {description}
          </p>
        </div>
        <div className="card-actions justify-center items-center my-4">
          <button className="btn btn-sm bg-red-600 text-white">Remove</button>
          <p className="text-lg text-center text-green-500">---OR---</p>
          <button className="btn btn-sm btn-success text-white">
            Pending...
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyTasksCard;
