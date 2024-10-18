import { useState } from "react";
import useAssignments from "../../Hooks/useAssignments";
import AssignmentsCard from "../AssignmentsCard/AssignmentsCard";

const Assignments = () => {
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [assignments, refetch] = useAssignments(difficultyLevel); // Pass difficulty to the hook

  const handleDifficultyChange = (e) => {
    setDifficultyLevel(e.target.value); // update the state with the selected difficulty
    refetch();
  };

  console.log(assignments);

  return (
    <>
      <div className="mb-4">
        <label>Filter by Difficulty Level:</label>
        <select
          value={difficultyLevel}
          onChange={handleDifficultyChange}
          className="select select-bordered"
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignment) => (
          <AssignmentsCard key={assignment._id} assignment={assignment} />
        ))}
      </div>
    </>
  );
};

export default Assignments;
