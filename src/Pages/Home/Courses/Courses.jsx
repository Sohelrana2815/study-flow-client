import { FaMessage, FaStar, FaUser, FaUsers } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdMessage } from "react-icons/md";
import "./course.css";
import { useEffect, useState } from "react";
import { CgCalendar } from "react-icons/cg";
const Courses = () => {
  const [courses, setCourses] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    fetch("/coursesData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })

      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // Set error message
        setLoading(false);
      });
  }, []); // Empty dependency array ensures it runs once on mount

  // Render logic

  if (loading) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if there's an issue
  }

  return (
    <>
      <div className="courses-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-screen-xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card max-w-sm border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                {course.description}
              </p>
              <div className="flex justify-between text-gray-500 mb-4">
                <p className="flex items-center gap-x-2">
                  <i className="fas fa-user"></i>{" "}
                  <FaUser className="text-[#6C5EBF]" />
                  {course.author}
                </p>
                <p className="flex items-center gap-x-2 ">
                  <i className="fas fa-calendar"></i>{" "}
                  <CgCalendar className="text-[#6C5EBF] text-xl" />{" "}
                  {course.date}
                </p>
              </div>
            </div>
            <div className="border-t my-2"></div>
            <div className="flex justify-between items-center p-4">
              <p className="flex items-center gap-x-2">
                <i className="fas fa-users"></i>{" "}
                <FaUsers className="text-[#6C5EBF] text-xl" /> {course.users}
              </p>
              <p className="flex items-center gap-x-2">
                <i className="fas fa-comments"></i>
                <FaMessage className="text-[#6C5EBF]" /> {course.messages}
              </p>
              <p className="flex items-center gap-x-2 text-[#FFB400]">
                <i className="fas fa-star"></i>
                <FaStar /> {course.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
