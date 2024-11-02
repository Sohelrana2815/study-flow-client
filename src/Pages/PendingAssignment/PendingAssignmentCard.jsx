import { Link } from "react-router-dom";
import useLoading from "../../Hooks/useLoading";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";

const PendingAssignmentCard = ({ pendingAssignment }) => {
  const { name, title, marks, _id, imageURL } = pendingAssignment;

  const loading = useLoading();
  return (
    <div className="card glass dark:card shadow-xl shadow-[#091057] p-4  ">
      <figure>
        <SkeletonWrapper loading={loading} width={380} height={160}>
          <img src={imageURL} alt="car!" className="rounded-lg" />
        </SkeletonWrapper>
      </figure>
      <div className="card-body dark:bg-black">
        <h2 className="text-[#091057] dark:text-white">
          <SkeletonWrapper loading={loading} width={200} height={30}>
            Examinee Name : {name}
          </SkeletonWrapper>
        </h2>
        <p className="text-[#091057] dark:text-white">
          {" "}
          <SkeletonWrapper loading={loading} width={300} height={30}>
            {title}
          </SkeletonWrapper>
        </p>
        <p className="text-[#091057] dark:text-white">
          {" "}
          <SkeletonWrapper loading={loading} width={100} height={30}>
            Assignment Marks : {marks}
          </SkeletonWrapper>
        </p>
        <Link to={`/giveMark/${_id}`}>
          <div className="card-actions">
            <SkeletonWrapper loading={loading} width={80} height={43}>
              <button className="btn bg-gradient-to-r from-[#0d6efd] to-black text-white border-none">
                Give Mark
              </button>
            </SkeletonWrapper>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PendingAssignmentCard;
