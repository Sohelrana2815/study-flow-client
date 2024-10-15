import AddStudyTasks from "../../StudyTasksComponent/AddStudyTasks";
import StudyTasks from "../../StudyTasksComponent/StudyTasks";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <AddStudyTasks />
      <StudyTasks />
    </div>
  );
};

export default Home;
