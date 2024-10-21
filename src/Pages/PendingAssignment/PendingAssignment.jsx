import usePendingAssignment from "../../Hooks/usePendingAssignment";
import PendingAssignmentCard from "./PendingAssignmentCard";

const PendingAssignment = () => {
  const [pendingAssignments] = usePendingAssignment();

  if (!pendingAssignments.length) {
    return <p>There is no Pending Assignments.....</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {pendingAssignments.map((pendingAssignment) => (
        <PendingAssignmentCard
          key={pendingAssignment._id}
          pendingAssignment={pendingAssignment}
        />
      ))}
    </div>
  );
};

export default PendingAssignment;
