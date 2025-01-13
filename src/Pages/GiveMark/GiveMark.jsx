import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";
import useLoading from "../../Hooks/useLoading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const GiveMark = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const submittedAssignment = useLoaderData();
  const { pdfLink, quickNote, _id, marks } = submittedAssignment;
  const loading = useLoading();

  // Modal state
  const [showModal, setShowModal] = useState(false);

  const handleScoreSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMark = form.obtainedMark.value;
    const feedback = form.feedback.value;
    const status = "completed";
    const assignmentResult = { obtainedMark, feedback, status };

    try {
      const res = await axiosPublic.patch(
        `/updateSpecificSubmittedAssignment/${_id}`,
        assignmentResult
      );
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Marks Submitted Successfully",
          text: "Your feedback and marks have been saved.",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/dashboard/academyAdmin");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error saving the marks. Please try again later.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Evaluate Assignment</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen dark:bg-gray-800 rounded-xl">
        <div className="hero-content flex flex-col lg:flex-row justify-between items-center w-full gap-8">
          {/* Assignment Details Section */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <SkeletonWrapper loading={loading} width={240} height={50}>
              <h2 className="text-2xl font-semibold text-center text-[#091057] dark:text-white mb-4">
                Assignment Marks: {marks || "Not Evaluated Yet"}
              </h2>
            </SkeletonWrapper>

            <div className="text-center">
              <p className="text-lg font-medium text-[#091057] dark:text-white mb-4">
                Submitted Document:
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-sm bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
              >
                View Assignment
              </button>
              <p className="py-6 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Quick Note:</span> {quickNote}
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="card bg-white dark:bg-gray-900 w-full lg:w-1/3 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleScoreSubmit}>
              <SkeletonWrapper loading={loading} width={315} height={50}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-gray-700 dark:text-gray-300">
                      Marks Obtained
                    </span>
                  </label>
                  <input
                    type="number"
                    name="obtainedMark"
                    placeholder="Enter Marks"
                    className="input input-primary dark:text-gray-800"
                    required
                  />
                </div>
              </SkeletonWrapper>

              <SkeletonWrapper loading={loading} width={315} height={90}>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text font-medium text-gray-700 dark:text-gray-300">
                      Feedback
                    </span>
                  </label>
                  <textarea
                    name="feedback"
                    placeholder="Write your feedback here"
                    className="textarea textarea-primary dark:text-gray-800"
                    required
                  />
                </div>
              </SkeletonWrapper>

              <SkeletonWrapper loading={loading} width={315} height={50}>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-[#0d6efd] to-black text-white w-full"
                  >
                    Submit Marks
                  </button>
                </div>
              </SkeletonWrapper>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for Viewing Assignment */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-11/12 max-w-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#091057] dark:text-white mb-4">
              Submitted Assignment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can view the submitted assignment document by clicking the
              link below:
            </p>
            <a
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-lg"
            >
              Open Document
            </a>
            <div className="text-center mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="btn bg-gradient-to-r from-[#0d6efd] to-black text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GiveMark;
