import { useFormik } from "formik";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser } = useAuth();
  // Formik hook , initial form values and a submit function for
  // grab form data when submitted

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data, { resetForm }) => {
      const { email, password } = data;
      try {
        const result = await loginUser(email, password);
        console.log("User created successfully:", result.user);
        resetForm();
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col space-y-8">
        <h2 className="text-center font-serif text-purple-500 text-4xl">
          REACT FORMIK FORM
        </h2>
        <p className="text-center mt-10">
          New To Study Flow ?{" "}
          <Link to='/signUp'>
            <button className="font-serif btn-link text-lg">Sign Up</button>
          </Link>
        </p>

        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={formik.handleSubmit}>
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
                autoComplete=""
                onChange={formik.handleChange}
                value={formik.values.password}
                className="input bg-white text-purple-600 input-primary w-full"
                required
              />
            </div>
            <button type="submit" className="btn text-white btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
