import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";
import useLoading from "../../Hooks/useLoading";

const AddStudyTasks = () => {
  const loading = useLoading();
  return (
    <div className="flex justify-center">
      <SkeletonWrapper loading={loading} width={150} height={40}>
        <div className="flex items-center">
          <p className="text-xl text-[#0B192C] dark:text-white font-semibold ">
            ADD STUDY TASKS
          </p>
          <Link to={`/studyTasksForm`}>
            <button className="btn btn-md rounded-full dark:bg-green-500 border-none bg-[#161D6F] text-white ml-5">
              <FaPlus />
            </button>
          </Link>
        </div>
      </SkeletonWrapper>
    </div>
  );
};

export default AddStudyTasks;
