import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast"; // toast
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";
import SectionTitle2 from "../../Components/SectionTitle2/SectionTitle2";

const CreateAssignments = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      marks: "",
      imageURL: "",
      difficultyLevel: "medium",
      date: new Date(), // Initialize with the current date
    },
    onSubmit: async (data, { resetForm }) => {
      console.log(data);

      try {
        console.log("Form submitted successfully!");
        if (user && user?.email) {
          const assignment = {
            email: user.email,
            name: user.displayName,
            title: data.title,
            description: data.description,
            marks: data.marks,
            imageURL: data.imageURL,
            difficultyLevel: data.difficultyLevel,
            date: data.date,
          };

          const res = await axiosPublic.post("/addAssignment", assignment);

          if (res.data?.insertedId) {
            toast.success("Assignment submitted successfully!");
            resetForm();
          } else {
            toast.error("Submission failed. Please check your details.");
          }
        }
      } catch (error) {
        console.error("Error submitting form : ", error);
      }
    },
  });

  return (
    <>
      <Helmet>
        <title>Create Assignment</title>
      </Helmet>
      <SectionTitle2
        heading="Create a New Assignment"
        subheading="Define tasks, set deadlines, and assign priorities to organize your workflow."
      />
      <AnimatedComponent animation="fade-in">
        <div className="hero bg-base-200 min-h-screen dark:bg-gray-800 rounded-lg">
          <div className="hero-content flex-col w-full">
            <div className="text-center lg:text-left "></div>
            <div className="card bg-base-100 w-full max-w-sm md:max-w-screen-md lg:max-w-screen-lg shrink-0 shadow-2xl">
              <form onSubmit={formik.handleSubmit} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/*assignment title  */}
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
                      className="input input-bordered dark:text-black "
                      required
                    />
                  </div>
                  {/*assignment Description  */}
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
                      className="input input-bordered dark:text-black"
                      required
                    />
                  </div>
                  {/*  assignment marks */}
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
                      className="input input-bordered dark:text-black"
                      required
                    />
                  </div>
                  {/* assignment Thumbnail image url */}

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
                      className="input input-bordered dark:text-black"
                      required
                    />
                  </div>
                  {/*   assignment difficulty level */}

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
                      className="select select-bordered w-full dark:bg-gray-800"
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>

                  {/* Due date */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Due Date</span>
                    </label>
                    <DatePicker
                      selected={formik.values.date}
                      onChange={(date) => formik.setFieldValue("date", date)}
                      dateFormat="dd/MM/yyyy" // you can customize
                      placeholderText="Select Due Date"
                      className="input input-bordered w-full dark:bg-gray-800"
                      required
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn text-white bg-gradient-to-r from-[#091057] to-[#0d6efd]"
                  >
                    Submit This Assignment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimatedComponent>
      <Toaster />
    </>
  );
};

export default CreateAssignments;
