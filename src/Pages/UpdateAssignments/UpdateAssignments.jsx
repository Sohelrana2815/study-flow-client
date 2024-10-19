import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpdateAssignments = () => {
  const axiosPublic = useAxiosPublic();

  const { user } = useAuth();
  const { title, _id, description, marks, imageURL, difficultyLevel, date } =
    useLoaderData(); // Destructure the loaded data

  const formik = useFormik({
    initialValues: {
      title: title || "",
      description: description || "",
      marks: marks || "",
      imageURL: imageURL || "",
      difficultyLevel: difficultyLevel || "medium",
      date: date || new Date(), // Initialize with the loaded date or current date
    },
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      try {
        console.log("Form submitted successfully!");
        if (user && user?.email) {
          const assignment = {
            email: user.email,
            title: data.title,
            description: data.description,
            marks: data.marks,
            imageURL: data.imageURL,
            difficultyLevel: data.difficultyLevel,
            date: data.date,
          };
          const assignmentRes = await axiosPublic.patch(
            `/assignments/${_id}`,
            assignment
          );

          if (assignmentRes.data?.modifiedCount > 0) {
            toast.success("Assignment Updated successfully!");
            resetForm();
          } else {
            toast.error("Update failed. Please check your details.");
          }
        }
      } catch (error) {
        console.error("Error Updating  form: ", error);
      }
    },
  });

  return (
    <>
      <Toaster />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Create An Assignment</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm md:max-w-screen-md lg:max-w-screen-lg shrink-0 shadow-2xl">
            <form onSubmit={formik.handleSubmit} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Assignment Title */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder="Assignment title"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Assignment Description */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    placeholder="Assignment description"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Assignment Marks */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Marks</span>
                  </label>
                  <input
                    type="number"
                    name="marks"
                    onChange={(e) => {
                      let value = parseFloat(e.target.value);
                      // Prevent negative values
                      if (value < 0 || value === 0) {
                        value = 1;
                      }
                      // prevent values over 100
                      if (value > 100) {
                        value = 100;
                      }
                      formik.setFieldValue("marks", value);
                    }}
                    value={formik.values.marks}
                    step="0.01" // Allows float values
                    placeholder="Assignment Marks"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Assignment Thumbnail Image URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="imageURL"
                    onChange={formik.handleChange}
                    value={formik.values.imageURL}
                    placeholder="Assignment URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Assignment Difficulty Level */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Assignment Difficulty Level
                    </span>
                  </label>
                  <select
                    name="difficultyLevel"
                    onChange={formik.handleChange}
                    value={formik.values.difficultyLevel}
                    className="select select-bordered w-full"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                {/* Due Date */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due Date</span>
                  </label>
                  <DatePicker
                    selected={formik.values.date}
                    onChange={(date) => formik.setFieldValue("date", date)}
                    dateFormat="dd/MM/yyyy" // you can customize
                    placeholderText="Select Due Date"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn text-white btn-primary">
                  Update Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateAssignments;
