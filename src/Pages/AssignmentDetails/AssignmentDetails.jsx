import { useFormik } from "formik";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

const AssignmentDetails = () => {
  const assignmentData = useLoaderData();
  const formik = useFormik({
    initialValues: {
      pdfLink: "",
      quickNote: "",
    },
    onSubmit: (data, { resetForm }) => {
      console.log("Submitting Assignment : ", data);

      // Close the modal after submission

      document.getElementById("assignment_modal").close();

      resetForm();
    },
  });

  const {
    title,
    imageURL,
    description,
    marks,
    difficultyLevel,
    date,
    email,
    _id,
  } = assignmentData;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={imageURL}
          className="max-w-sm lg:max-w-lg md:max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <div className="space-y-5">
            <p>{description}</p>
            <p>{marks}</p>
            <p>{difficultyLevel}</p>
            <p>{date}</p>
            <button
              className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-white rounded-lg"
              onClick={() =>
                document.getElementById("assignment_modal").showModal()
              }
            >
              Take Assignment
            </button>
          </div>
        </div>
      </div>

      {/* Modal for submitting assignment */}

      <dialog
        id="assignment_modal"
        className="modal
     
     modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Submit Assignment</h3>

          <form onSubmit={formik.handleSubmit}>
            {/* PDF/Doc Link Submission */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">PDF/Doc Link</span>
              </label>
              <input
                type="text"
                name="pdfLink"
                onChange={formik.handleChange}
                value={formik.values.pdfLink}
                placeholder="Enter your PDF/Doc link"
                className="input input-bordered"
                required
              />
            </div>
            {/* Quick Note Text Area */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quick Note</span>
              </label>
              <textarea
                name="quickNote"
                onChange={formik.handleChange}
                value={formik.values.quickNote}
                placeholder="Enter a quick note"
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>
            <div className="modal-action">
              {/* Close Button */}
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("assignment_modal").close()
                }
              >
                Close
              </button>
              <button></button>
              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg"
              >
                Submit Assignment
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
AssignmentDetails.propTypes = {
  assignmentData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    marks: PropTypes.number.isRequired,
    difficultyLevel: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, // Assuming this is a string (e.g., ISO format). Change if it's a Date object.
    email: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
export default AssignmentDetails;
