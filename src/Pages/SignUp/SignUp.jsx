import { useFormik } from "formik";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      const 
      console.log(values);
      resetForm();
    },
  });
  return (
    <div className="flex items-center justify-center min-h-screen flex-col space-y-8">
      <h2 className="text-center font-serif text-purple-500 text-4xl">
        REACT FORMIK FORM
      </h2>
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="input text-purple-600 bg-white input-primary w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="input text-purple-600 bg-white input-primary w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="input bg-white text-purple-600 input-primary w-full"
              required
            />
          </div>
          <button type="submit" className="btn text-white btn-primary w-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
