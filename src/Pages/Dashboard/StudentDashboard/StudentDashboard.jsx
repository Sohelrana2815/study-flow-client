import { Helmet } from "react-helmet-async";
import useSubmittedAssignment from "../../../Hooks/useSubmittedAssignment";
import StudentDashboardCard from "./StudentDashboardCard";
import studentDashboardImg from "../../../assets/student dashboard/student.jpg";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
import SectionTitle2 from "../../../Components/SectionTitle2/SectionTitle2";
const StudentDashboard = () => {
  const [submittedAssignments] = useSubmittedAssignment();
  if (!submittedAssignments.length) {
    return (
      <AnimatedComponent animation="zoom-in" duration={1000}>
        <div className="flex flex-col items-center justify-center mt-10 text-center">
          <AnimatedComponent animation="fade-in" duration={1200} delay={200}>
            <img
              src={studentDashboardImg}
              alt="No assignments submitted"
              className="w-full max-w-lg h-auto rounded-lg shadow-lg mb-5"
            />
          </AnimatedComponent>
          <AnimatedComponent animation="fade-up" duration={1200} delay={400}>
            <p className="text-2xl text-[#091057] font-serif font-semibold uppercase dark:text-gray-100">
              You haven&apos;t submitted any assignments yet...
            </p>
          </AnimatedComponent>
        </div>
      </AnimatedComponent>
    );
  }
  return (
    <>
      <SectionTitle2
        heading="Your Study Dashboard"
        subheading="Track your submitted assignments, pending tasks, and teacher feedback in one place."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        {submittedAssignments.map((submittedAssignment) => (
          <StudentDashboardCard
            key={submittedAssignment._id}
            submittedAssignment={submittedAssignment}
          />
        ))}
      </div>
    </>
  );
};

export default StudentDashboard;
