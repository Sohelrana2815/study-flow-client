import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StudyTasksForm = () => {
  const formik = useFormik({
    initialValues: {
      taskTitle: "",
      data: "",
      subject: "",
      priority: "medium",
      estimatedTime: "",
      description: "",
      image: "",
    },
    onSubmit: async (data, { resetForm }) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/studyTasks",
          data
        );
        if (response.data.insertedId) {
          console.log("Task added", response.data);
          toast.success("Task added successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }

        resetForm();
      } catch (error) {
        console.error("Error adding task", error);
      }
    },
  });
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm md:max-w-screen-md lg:max-w-screen-lg shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {/* Task title */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Title</span>
                  </label>
                  <input
                    type="text"
                    name="taskTitle"
                    onChange={formik.handleChange}
                    value={formik.values.taskTitle}
                    placeholder="Give your task title"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Date */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Select Date</span>
                  </label>
                  <input
                    type="date"
                    name="data"
                    onChange={formik.handleChange}
                    value={formik.values.data}
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Subject */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    placeholder="Subject Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Priority Level */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Priority Level</span>
                  </label>
                  <select
                    name="priority"
                    value={formik.values.priority}
                    onChange={formik.handleChange}
                    className="select select-bordered w-full"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                {/*Estimated time  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Estimated Time</span>
                  </label>
                  <input
                    type="text"
                    name="estimatedTime"
                    onChange={formik.handleChange}
                    value={formik.values.estimatedTime}
                    placeholder="Estimated time"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Description */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Describe Your Task</span>
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    placeholder="Task Description"
                    className="textarea textarea-bordered w-full"
                    required
                  ></textarea>
                </div>
                {/* Image */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Related Image</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                    className="file-input w-full max-w-xs"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white">
                  Add This Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default StudyTasksForm;
