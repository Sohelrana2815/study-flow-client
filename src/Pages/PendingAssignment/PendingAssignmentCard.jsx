import { Link } from "react-router-dom";
// By clicking on the give mark button it will open a modal or will navigate to a
// new page. A user will be able to see the pdf/docs link, and notes which the
// examinee has submitted. There will be a marks input field, a feedback input field
// and a submit button for giving marks.
// ● The user can give mark by clicking on the submit button after filling feedback,
// and mark input fields.
// ● After marking an assignment the status of the assignment will be changed to
// completed.

const PendingAssignmentCard = ({ pendingAssignment }) => {
  const { name, title, marks, _id, imageURL } = pendingAssignment;
  return (
    <div className="card glass w-full">
      <figure>
        <img src={imageURL} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Examinee Name : {name}</h2>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-xl font-semibold">Assignment Mark : {marks}</p>
        <Link to={`/giveMark/${_id}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Give Mark</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PendingAssignmentCard;
