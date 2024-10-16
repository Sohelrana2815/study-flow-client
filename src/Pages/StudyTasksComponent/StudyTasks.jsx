import useSpecificTasks from "../../Hooks/useSpecificTasks";
import StudyTasksCard from "./StudyTasksCard";

const StudyTasks = () => {
  const [task] = useSpecificTasks();
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2
       lg:grid-cols-3 gap-4"
      >
        {task.map((singleTask) => (
          <StudyTasksCard key={singleTask._id} singleTask={singleTask} />
        ))}
      </div>
    </>
  );
};

export default StudyTasks;
