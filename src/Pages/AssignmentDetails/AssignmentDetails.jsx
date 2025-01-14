import { useFormik } from "formik";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import useAdmin from "../../Hooks/useAdmin";
import { Helmet } from "react-helmet-async";
import SectionTitle2 from "../../Components/SectionTitle2/SectionTitle2";
const AssignmentDetails = () => {
  const assignmentData = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isAdmin] = useAdmin();

  const { title, imageURL, description, marks, difficultyLevel, date } =
    assignmentData;

  const formik = useFormik({
    initialValues: {
      pdfLink: "",
      quickNote: "",
    },
    onSubmit: async (data, { resetForm }) => {
      console.log("Submitting Assignment: ", data);
      try {
        if (user && user?.email) {
          const submittedAssignment = {
            title: title,
            email: user?.email,
            pdfLink: data.pdfLink,
            quickNote: data.quickNote,
            name: user?.displayName,
            status: "pending",
            marks: marks,
            imageURL: imageURL,
          };
          const res = await axiosPublic.post(
            "/submitAssignment",
            submittedAssignment
          );
          if (res.data?.insertedId) {
            toast.success("Assignment Submitted successfully!");
            // Close the modal after submission
            document.getElementById("assignment_modal").close();
            resetForm();
            setTimeout(() => {
              navigate("/dashboard/studentDashboard");
            }, 1500);
          } else {
            toast.error("Failed to submit the assignment");
          }
        }
      } catch (error) {
        console.error("Error while submitting the assignment", error);
      }
    },
  });
  // Check if assignmentData is loaded
  if (!assignmentData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Helmet>
        <title>Assignment Details</title>
      </Helmet>

      <SectionTitle2
        heading="Assignment Overview"
        subheading="Review assignment details, submission deadlines, and feedback."
      />
      <div className="hero bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg min-h-screen px-5 py-10">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-10">
          {/* Assignment Details */}
          <div className="max-w-lg w-full">
            <img
              src={imageURL}
              alt="Assignment"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {title}
              </h1>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {description.slice(0, 600)}...
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Posted on:{" "}
                <span className="font-semibold">
                  {new Date(date).toDateString()}
                </span>
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Difficulty Level:{" "}
                <span
                  className={`px-2 py-1 rounded-lg font-medium ${
                    difficultyLevel.toLowerCase() === "easy"
                      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                      : difficultyLevel.toLowerCase() === "medium"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                      : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                  }`}
                >
                  {difficultyLevel.toUpperCase()}
                </span>
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Mark: {marks}
              </p>
              <button
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-500 transition duration-300"
                disabled={isAdmin}
                onClick={() =>
                  document.getElementById("assignment_modal").showModal()
                }
              >
                Take Assignment
              </button>
            </div>
            {isAdmin ? (
              <div className="bg-red-100 text-red-800 border-l-4 border-red-500 p-4 rounded-lg shadow-md max-w-xl mx-auto my-4">
                <p className="font-semibold text-lg">
                  <span className="block mb-2">Access Restricted</span>
                  <span className="text-sm">
                    You are logged in as an{" "}
                    <span className="font-bold">admin/teacher</span> and cannot
                    take this assignment. This feature is only available to
                    students.
                  </span>
                </p>
              </div>
            ) : null}
          </div>

          {/* Modal for Assignment Submission */}
          <dialog
            id="assignment_modal"
            className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="modal-box bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                Submit Your Assignment
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">
                Please provide the required details to submit your assignment.
              </p>
              <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
                {/* PDF/Doc Link Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-gray-700 dark:text-gray-300">
                      PDF/Doc Link
                    </span>
                  </label>
                  <input
                    type="text"
                    name="pdfLink"
                    onChange={formik.handleChange}
                    value={formik.values.pdfLink}
                    placeholder="Enter the link to your PDF/Doc"
                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </div>
                {/* Quick Note Text Area */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-gray-700 dark:text-gray-300">
                      Quick Note
                    </span>
                  </label>
                  <textarea
                    name="quickNote"
                    onChange={formik.handleChange}
                    value={formik.values.quickNote}
                    placeholder="Write a quick note about your assignment"
                    className="textarea textarea-bordered w-full bg-gray-50 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  ></textarea>
                </div>
                {/* Modal Actions */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    type="button"
                    className="btn btn-outline border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    onClick={() =>
                      document.getElementById("assignment_modal").close()
                    }
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-500 hover:to-green-400 transition"
                  >
                    Submit Assignment
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default AssignmentDetails;
