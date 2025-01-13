import { useState } from "react";
import useSpecificTasks from "../../Hooks/useSpecificTasks";
import StudyTasksCard from "./StudyTasksCard";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";

const StudyTasks = () => {
  const [priority, setPriority] = useState("");
  const [tasks, refetch] = useSpecificTasks(priority);

  const handlePriorityLevel = (e) => {
    // console.log(e.target.value);
    setPriority(e.target.value);
    refetch();
  };

  const handleDelete = () => {
    refetch();
  };

  const handleUpdate = () => {
    refetch();
  };

  return (
    <>
      {/* Text and filter options */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto justify-end max-w-screen-xl mx-auto">
        {/* Filter Label */}
        <AnimatedComponent animation="fade-right">
          <label className="text-lg font-lora font-semibold text-[#091057] dark:text-white whitespace-nowrap">
            Filter by Priority Level:
          </label>
        </AnimatedComponent>

        {/* Dropdown */}
        <AnimatedComponent animation="fade-left">
          <select
            onChange={handlePriorityLevel}
            value={priority}
            className="select select-bordered text-sm md:text-base dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-700 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500 rounded-md w-full md:w-auto px-4 py-2 transition duration-200"
          >
            <option value="" className="text-gray-500">
              All
            </option>
            <option value="low" className="text-green-500">
              Low
            </option>
            <option value="medium" className="text-yellow-500">
              Medium
            </option>
            <option value="high" className="text-red-500">
              High
            </option>
          </select>
        </AnimatedComponent>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2
       lg:grid-cols-3 gap-4"
      >
        {tasks.map((singleTask) => (
          <StudyTasksCard
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            key={singleTask._id}
            singleTask={singleTask}
          />
        ))}
      </div>
    </>
  );
};

export default StudyTasks;
