import { useFormik } from "formik";

const CreateAssignments = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      marks: "",
      imageURL: "",
      difficultyLevel: "medium",
      date: "",
    },
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      console.log(data);

      try {
        console.log("Form submitted successfully!");
        resetForm();
      } catch (error) {
        console.error("Error submitting form : ", error);
      }
    },
  });

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Create An Assignment</h1>
          </div>
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
                    className="input input-bordered"
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
                    className="input input-bordered"
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
                    onChange={formik.handleChange}
                    value={formik.values.marks}
                    placeholder="Assignment Marks"
                    className="input input-bordered"
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
                    className="input input-bordered"
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
                    className="select select-bordered w-full"
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
                  <input
                    type="date"
                    name="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    placeholder="Assignment Due Date"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn text-white btn-primary">
                  Submit This Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAssignments;
