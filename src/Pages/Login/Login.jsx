import { useFormik } from "formik";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useState } from "react";

const Login = () => {
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Login Page - location state:", location.state);
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
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
        if (result.user) {
          resetForm();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        }
      } catch (error) {
        console.error("Error creating user:", error);
        setError("Invalid email or password. Please try again.");
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
          <Link to="/signUp">
            <button className="font-serif dark:text-[#6EACDA] btn-link text-lg">Sign Up</button>
          </Link>
        </p>

        <div className="w-full dark:text-black max-w-sm p-6 bg-white rounded-lg shadow-md">
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
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button type="submit" className="btn text-white btn-primary w-full">
              Login
            </button>
          </form>

          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
