import { Helmet } from "react-helmet";
import usePendingAssignment from "../../Hooks/usePendingAssignment";
import PendingAssignmentCard from "./PendingAssignmentCard";

const PendingAssignment = () => {
  const [pendingAssignments] = usePendingAssignment();

  if (!pendingAssignments.length) {
    return (
      <p className="text-[#091057] text-2xl mt-5 text-center font-serif ">
        There is no Pending Assignments.....
      </p>
    );
  }
  return (
    <>
      <h2 className="text-center mt-10 text-2xl text-[#091057] ">
        It will be an Admin Page Soon....
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16 px-5">
        <Helmet>
          <title>Pending Assignments </title>
        </Helmet>
        {pendingAssignments.map((pendingAssignment) => (
          <PendingAssignmentCard
            key={pendingAssignment._id}
            pendingAssignment={pendingAssignment}
          />
        ))}
      </div>
    </>
  );
};

export default PendingAssignment;
