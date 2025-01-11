import { Helmet } from "react-helmet";
import AddStudyTasks from "../../StudyTasksComponent/AddStudyTasks";
import StudyTasks from "../../StudyTasksComponent/StudyTasks";
import Banner from "../Banner/Banner";
import Quote from "../Quote/Quote";
import Features from "../Features/Features";
import { useRef } from "react";
import UsageGuide from "../UsageGuide/UsageGuide";

const Home = () => {
  // step 1.1 : Create a ref to target the AddStudyTasks section

  const addStudyTasksRef = useRef(null);

  // Step 1.2: create a function to handle scrolling

  const scrollToAddStudyTasks = () => {
    console.log("Scroll function triggered");
    addStudyTasksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner />
      {/* step 1.3: pass scroll function as prop to Features */}
      <Features onGetStartedClick={scrollToAddStudyTasks} />
      {/* Step 1.4: Attach ref to the AddStudyTasks section */}
      <div ref={addStudyTasksRef}>
        <UsageGuide />
      </div>
      <AddStudyTasks />
      <Quote />
      <StudyTasks />
    </div>
  );
};

export default Home;
