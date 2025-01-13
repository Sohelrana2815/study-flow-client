import { Helmet } from "react-helmet-async";
import useSubmittedAssignment from "../../../Hooks/useSubmittedAssignment";
import StudentDashboardCard from "./StudentDashboardCard";
import studentDashboardImg from "../../../assets/student dashboard/student.jpg";
const StudentDashboard = () => {
  const [submittedAssignments] = useSubmittedAssignment();
  if (!submittedAssignments.length) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 text-center">
        <img
          src={studentDashboardImg}
          alt="No assignments submitted"
          className="w-full max-w-lg h-auto rounded-lg shadow-lg mb-5"
        />
        <p className="text-2xl text-[#091057] font-serif font-semibold uppercase dark:text-gray-100">
          You haven&apos;t submitted any assignments yet...
        </p>
      </div>
    );
  }
  return (
    <>
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
