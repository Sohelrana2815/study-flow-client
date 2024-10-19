import { Link } from "react-router-dom";
const AssignmentsCard = ({ assignment }) => {
  const {
    title,
    description,
    imageURL,
    difficultyLevel,
    email,
    _id,
    date,
    marks,
  } = assignment;

  const handleDeleteAssignment = async (assignment) => {
    console.log(assignment);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imageURL} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Title:{title}</h2>
        <p>Description : {description}</p>
        <p>Difficulty : {difficultyLevel}</p>
        <p>Email : {email}</p>
        <p>Marks : {marks}</p>
        <p>Date : {date}</p>
        <p>Id : {_id}</p>
        <div className="flex gap-2">
          <Link to={`/assignmentDetails/${assignment._id}`}>
            <button className="btn btn-sm btn-success">View Assignment</button>
          </Link>
          <button
            onClick={() => handleDeleteAssignment(assignment)}
            className="btn btn-sm bg-red-600 text-white"
          >
            Delete Assignment
          </button>
        </div>
        <Link to={`/updateAssignment/${assignment._id}`}>
          <button className="btn btn-sm btn-warning">Update Assignment</button>
        </Link>
      </div>
    </div>
  );
};

export default AssignmentsCard;
