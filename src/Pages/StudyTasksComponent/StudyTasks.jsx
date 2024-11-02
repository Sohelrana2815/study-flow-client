import { useState } from "react";
import useSpecificTasks from "../../Hooks/useSpecificTasks";
import StudyTasksCard from "./StudyTasksCard";

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
      <div>
        <label className="text-[#091057] dark:text-white font-semibold text-lg">
          Filter by Priority Level :{" "}
        </label>
        <select
          onChange={handlePriorityLevel}
          value={priority}
          className="select  select-bordered  text-white  dark:bg-white dark:text-[#091057] bg-[#091057]  select-sm"
        >
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
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
