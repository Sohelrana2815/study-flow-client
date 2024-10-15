import useSpecificTasks from "../../Hooks/useSpecificTasks";
import StudyTasksCard from "./StudyTasksCard";

const StudyTasks = () => {
  const [specificTasks] = useSpecificTasks();
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2
       lg:grid-cols-3 gap-4"
      >
        {specificTasks.map((studyTask) => (
          <StudyTasksCard key={studyTask._id} studyTask={studyTask} />
        ))}
      </div>
    </>
  );
};

export default StudyTasks;
