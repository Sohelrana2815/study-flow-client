import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddStudyTasks = () => {
  return (
    <div className="flex justify-center">
      <Link to="/studyTasksForm">
        <div className="flex items-center">
          <p className="text-xl text-white">ADD STUDY TASKS</p>
          <button className="btn btn-md rounded-full bg-success text-white ml-5">
            <FaPlus />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default AddStudyTasks;
