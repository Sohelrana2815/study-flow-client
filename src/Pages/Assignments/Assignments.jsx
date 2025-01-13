import { useState } from "react";
import useAssignments from "../../Hooks/useAssignments";
import AssignmentsCard from "../AssignmentsCard/AssignmentsCard";
import { useLoaderData } from "react-router-dom";
import SkeletonWrapper from "../../Utility/SkeletonWrapper";
import useLoading from "../../Hooks/useLoading";
import { Helmet } from "react-helmet-async";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";

const Assignments = () => {
  const { count } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
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
        <title>All Assignments</title>
      </Helmet>
      <div className="mb-6 mt-16 p-4">
        {/* Label Animation */}
        <AnimatedComponent animation="fade-down" duration={1200}>
          <label
            htmlFor="difficulty-select"
            className="block text-lg font-semibold text-gray-800 dark:text-white mb-2 font-lora"
          >
            Filter by Difficulty Level
          </label>
        </AnimatedComponent>

        <div className="relative">
          {/* Dropdown Animation */}
          <AnimatedComponent animation="fade-up" duration={1200} delay={200}>
            <select
              id="difficulty-select"
              value={difficultyLevel}
              onChange={handleDifficultyChange}
              className="block xl:w-1/5 md:w-1/3 lg:h-1/4 w-full px-4 py-2 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition duration-300 dark:text-gray-200"
            >
              <option value="">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </AnimatedComponent>
          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400 pointer-events-none"></span>
        </div>
      </div>

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
      <div className="text-center my-8 space-y-4">
        <SkeletonWrapper loading={loading} width={250} height={40}>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Previous Button */}
            <button
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {pages.map((page) => (
              <button
                key={page}
                className={`px-4 py-2 text-sm font-medium rounded-md shadow-md transition-colors duration-300 ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
              onClick={handleNextPage}
              disabled={currentPage === pages.length}
            >
              Next
            </button>

            {/* Items Per Page Dropdown */}
            <div className="relative">
              <select
                className="px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 transition duration-300"
                value={itemsPerPage}
                onChange={handleItemsPerPage}
              >
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="18">18</option>
              </select>
            </div>
          </div>
        </SkeletonWrapper>
      </div>
    </>
  );
};

export default Assignments;
