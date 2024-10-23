import { Helmet } from "react-helmet";
import AddStudyTasks from "../../StudyTasksComponent/AddStudyTasks";
import StudyTasks from "../../StudyTasksComponent/StudyTasks";
import Banner from "../Banner/Banner";
import Quote from "../Quote/Quote";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner />
      <AddStudyTasks />
      <Quote />
      <StudyTasks />
    </div>
  );
};

export default Home;
