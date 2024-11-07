import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";
import useLoading from "../../Hooks/useLoading";
import Swal from "sweetalert2";

const GiveMark = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const submittedAssignment = useLoaderData();
  const { pdfLink, quickNote, _id, marks } = useLoaderData();

  console.log("pending ..", submittedAssignment);
  const loading = useLoading();

  const handleScoreSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMark = form.obtainedMark.value;
    const feedback = form.feedback.value;
    const status = "completed";
    const assignmentResult = { obtainedMark, feedback, status };
    console.log(assignmentResult);

    const res = await axiosPublic.patch(
      `/updateSpecificSubmittedAssignment/${_id}`,
      assignmentResult
    );
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Assignment's Mark submitted successfully! ",
        showConfirmButton: false,
        timer: 2500,
      });
      navigate("/dashboard/academyAdmin");
    }
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen dark:bg-gray-800 rounded-xl">
        <div className="hero-content flex-col w-full">
          <SkeletonWrapper loading={loading} width={240} height={50}>
            <h2 className="text-center text-[#091057] border border-[#091057] p-2 rounded-xl dark:text-white dark:border-white">
              Assignment Marks : {marks}
            </h2>
          </SkeletonWrapper>

          <SkeletonWrapper loading={loading} width={500} height={50}>
            <div className="text-center ">
              <span className="text-xl text-[#091057] text-center dark:text-white">
                Assignment Doc :{" "}
              </span>
              <a
                href={pdfLink}
                className="text-xl link dark:text-white text-[#091057]"
              >
                {pdfLink.slice(0, 30)}......
              </a>
              <p className="py-6 dark:text-white text-[#091057]">
                Quick Note : {quickNote}
              </p>
            </div>
          </SkeletonWrapper>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              onSubmit={handleScoreSubmit}
              className="card-body dark:text-black"
            >
              <SkeletonWrapper loading={loading} width={315} height={50}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mark</span>
                  </label>
                  <input
                    type="number"
                    name="obtainedMark"
                    placeholder="Give Mark"
                    className="input input-primary"
                    required
                  />
                </div>
              </SkeletonWrapper>
              {/*  */}
              <SkeletonWrapper loading={loading} width={315} height={90}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Feedback</span>
                  </label>
                  <textarea
                    placeholder="Give feedback"
                    name="feedback"
                    className="textarea dark:text-black text-base textarea-primary"
                    required
                  />
                </div>
              </SkeletonWrapper>

              {/*  */}

              <div className="form-control mt-6">
                <SkeletonWrapper loading={loading} width={315} height={50}>
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-[#0d6efd] to-black text-white"
                  >
                    Submit
                  </button>
                </SkeletonWrapper>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveMark;
