import { Link } from "react-router-dom";
import useLoading from "../../../Hooks/useLoading";
import SkeletonWrapper from "../../../Utility/SkeletonWrapper";

const PendingAssignmentsCard = ({ pendingAssignment }) => {
  const { name, title, marks, _id, imageURL } = pendingAssignment;

  const loading = useLoading();
  return (
    <>
      <div className="card bg-white dark:bg-gray-800 shadow-xl rounded-lg">
        <figure className="relative overflow-hidden rounded-t-lg">
          <SkeletonWrapper loading={loading} width={380} height={200}>
            <img
              src={imageURL}
              alt="Assignment"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </SkeletonWrapper>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </figure>
        <div className="card-body p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            <SkeletonWrapper loading={loading} width={200} height={30}>
              Examinee Name: {name}
            </SkeletonWrapper>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <SkeletonWrapper loading={loading} width={300} height={30}>
              {title}
            </SkeletonWrapper>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <SkeletonWrapper loading={loading} width={100} height={30}>
              Assignment Marks: {marks}
            </SkeletonWrapper>
          </p>
          <Link to={`/giveMark/${_id}`}>
            <div className="card-actions text-center">
              <SkeletonWrapper loading={loading} width={100} height={43}>
                <button className="btn w-full py-2 px-4 border-none rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300">
                  Give Mark
                </button>
              </SkeletonWrapper>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PendingAssignmentsCard;
