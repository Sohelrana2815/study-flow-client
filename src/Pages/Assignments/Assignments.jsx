import { useState } from "react";
import useAssignments from "../../Hooks/useAssignments";
import AssignmentsCard from "../AssignmentsCard/AssignmentsCard";
import { useLoaderData } from "react-router-dom";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";
import useLoading from "../../Hooks/useLoading";
import { Helmet } from "react-helmet";

const Assignments = () => {
  const { count } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const loading = useLoading();

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()].map((num) => num + 1);

  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [assignments, refetch] = useAssignments(
    difficultyLevel,
    currentPage,
    itemsPerPage
  ); // Pass difficulty to the hook

  const handleDifficultyChange = (e) => {
    setDifficultyLevel(e.target.value); // update the state with the selected difficulty
    refetch();
  };

  const handleDelete = () => {
    refetch(); // Call refetch after deleting an assignment
  };

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (!assignments) {
    return <p className="dark:text-white">No Assignment.....</p>;
  }
  return (
    <>
      <Helmet>
        <title>All Assignment Page</title>
      </Helmet>
      <SkeletonWrapper loading={loading} width={250} height={35}>
        <div className="mb-4 mt-16">
          <label className="text-[#091057] font-semibold text-lg dark:text-white">
            Filter by Difficulty Level :{" "}
          </label>
          <select
            value={difficultyLevel}
            onChange={handleDifficultyChange}
            className="select text-[#091057] select-bordered bg-[#EEEEEE] select-sm"
          >
            <option value="">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </SkeletonWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {assignments.map((assignment) => (
          <AssignmentsCard
            key={assignment._id}
            onDelete={handleDelete}
            assignment={assignment}
          />
        ))}
      </div>

      {/* pagination buttons */}
      <div className="text-center my-16 space-x-5">
        <SkeletonWrapper loading={loading} width={200} height={30}>
          <button
            className="btn  btn-sm  bg-[#091057] text-white"
            onClick={handlePrevPage}
          >
            Previous
          </button>
          {pages.map((page) => (
            <button
              className={
                currentPage === page
                  ? "btn  btn-sm  bg-[#091057] text-white"
                  : "btn btn-sm btn-outline dark:badge-outline dark:bg-slate-50 dark:text-black"
              }
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="btn  btn-sm  bg-[#091057] text-white"
            onClick={handleNextPage}
          >
            Next
          </button>
          <select
            className="select text-[#091057] select-bordered bg-[#EEEEEE] select-sm"
            value={itemsPerPage}
            onChange={handleItemsPerPage}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="18">18</option>
          </select>
        </SkeletonWrapper>
      </div>
    </>
  );
};

export default Assignments;
