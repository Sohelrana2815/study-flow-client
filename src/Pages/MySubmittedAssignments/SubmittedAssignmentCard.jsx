import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useSubmittedAssignment from "../../Hooks/useSubmittedAssignment";
const SubmittedAssignmentCard = ({ submittedAssignment }) => {
  const axiosPublic = useAxiosPublic();
  const [, refetch] = useSubmittedAssignment();

  const { title, marks, status, feedback, imageURL, obtainedMark, _id } =
    submittedAssignment;

  const handleDeleteMarkedAssignment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deleteMarkedAssignment/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      {status === "pending" ? (
        <>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={imageURL} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-outline badge-lg">
                  Assignment Marks : {marks}
                </div>
                <div className="badge badge-outline badge-lg text-red-500 ">
                  {status}.....
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card bg-base-100 w-full shadow-xl justify-center items-center space-y-5">
            <p>{title.slice(0, 25)}...</p>
            <p className="text-green-500">{status.toUpperCase()}</p>
            <p className="text-white text-2xl">
              {obtainedMark}/{marks}
            </p>
            {/*  */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="mt-10">
              <span
                className="cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                View Examiner&apos;s Feedback
              </span>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Examiner&apos;s Feedback
                  </h3>
                  <p className="py-4">{feedback}</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <button
              onClick={() => {
                handleDeleteMarkedAssignment(_id);
              }}
              className="btn btn-circle bg-red-600 text-white text-lg"
            >
              <IoMdClose />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SubmittedAssignmentCard;
