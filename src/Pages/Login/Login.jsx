import { useFormik } from "formik";
import loginImg from "../../assets/login/login.jpeg";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AdminAccessButton from "../../Components/AdminAccessButton/AdminAccessButton";
import { Helmet } from "react-helmet-async";

const Login = () => {
  // Step 1. Define a state to control the password visibility

  const [passwordVisible, setPasswordVisible] = useState(false);

  // Step 2. Function to toggle password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Invert the state
  };

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
      <Helmet>
        <title>Login</title>
      </Helmet>

      <AdminAccessButton />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center max-w-5xl bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="hidden lg:block lg:w-1/2 pl-4">
            <img
              src={loginImg} // Replace with your image path
              alt="Login Illustration"
              className="h-full w-full object-cover rounded-md"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-6">
            <h2 className="text-3xl font-bold text-center text-purple-500 dark:text-purple-300 font-serif">
              REACT FORMIK FORM
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              New to Study Flow?{" "}
              <Link to="/signUp">
                <button className="font-serif btn-link text-purple-600 dark:text-purple-400">
                  Sign Up
                </button>
              </Link>
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="input text-purple-600 dark:text-purple-300 bg-gray-50 dark:bg-gray-700 input-primary w-full"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="input text-purple-600 dark:text-purple-300 bg-gray-50 dark:bg-gray-700 input-primary w-full"
                    required
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 dark:text-gray-300"
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-center">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold w-full rounded-lg py-2 transition duration-300"
              >
                Login
              </button>
            </form>

            {/* Social Login */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
