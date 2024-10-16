import AddStudyTasks from "../../StudyTasksComponent/AddStudyTasks";
import StudyTasks from "../../StudyTasksComponent/StudyTasks";
import Banner from "../Banner/Banner";
import Quote from "../Quote/Quote";

const Home = () => {
  return (
    <div>
      <Banner />
      <AddStudyTasks />
      <Quote />
      <StudyTasks />
    </div>
  );
};

export default Home;
