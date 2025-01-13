import usePendingAssignment from "../../../Hooks/usePendingAssignment";
import PendingAssignmentsCard from "./pendingAssignmentsCard";
import "../../../assets/Teacher desk/teacher desk.jpeg";
import teacherDeskImg from "../../../assets/Teacher desk/teacher desk.webp";
const AcademyAdmin = () => {
  const [pendingAssignments] = usePendingAssignment();

  if (!pendingAssignments.length) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          src={teacherDeskImg} // Add the path to your image here
          alt="No Assignments"
          className="w-[80%] md:w-[50%] lg:w-[40%] max-w-[500px] h-auto mb-5 rounded-lg" // Adjust the size for different screen sizes
        />
        <p className="text-[#091057] text-2xl md:text-3xl lg:text-4xl font-serif text-center dark:text-white">
          There are no Pending Assignments
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16 px-5">
        {pendingAssignments.map((pendingAssignment) => (
          <PendingAssignmentsCard
            key={pendingAssignment._id}
            pendingAssignment={pendingAssignment}
          />
        ))}
      </div>
    </>
  );
};

export default AcademyAdmin;
