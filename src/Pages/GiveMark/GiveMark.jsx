import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const GiveMark = () => {
  const axiosPublic = useAxiosPublic();
  const submittedAssignment = useLoaderData();

  const { pdfLink, quickNote, _id } = useLoaderData();

  console.log("pending ..", submittedAssignment);

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
      toast.success("Assignment Result Submitted!");
    }
  };

  return (
    <>
      <div>
        <div className="border-2 border-green-500 p-4 w-1/2 mx-auto  rounded-xl">
          <h2 className="text-lg text-center">
            Assignment Doc Link :{" "}
            <a href={pdfLink} className="link link-info">
              {pdfLink.slice(0, 16)}
            </a>
          </h2>
          <h2 className="text-lg text-center">
            Quick Note About Assignment : {quickNote}
          </h2>
        </div>
        <form
          onSubmit={handleScoreSubmit}
          className="card card-body flex flex-col justify-center items-center"
        >
          <div>
            <span>
              <label className="label">Give Mark</label>
            </span>
            <input
              type="text"
              name="obtainedMark"
              placeholder="Give Assignment Mark"
              className="input input-bordered"
            />
          </div>
          <div>
            <span>
              <label className="label">Give Feedback</label>
            </span>
            <textarea
              name="feedback"
              placeholder="Give Feedback "
              className="textarea textarea-bordered"
            ></textarea>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default GiveMark;
