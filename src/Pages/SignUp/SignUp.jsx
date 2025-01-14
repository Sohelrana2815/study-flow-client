import { useFormik } from "formik";

import signUpImg from "../../assets/Sign up/sign up.jpeg";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import AdminAccessButton from "../../Components/AdminAccessButton/AdminAccessButton";
import SectionTitle2 from "../../Components/SectionTitle2/SectionTitle2";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      photoURL: "",
      password: "",
    },
    onSubmit: async (data, { resetForm }) => {
      const { email, password, name } = data;
      try {
        const result = await createUser(email, password);
        if (result.user) {
          const updateProfile = await updateUserProfile(name);
          console.log(updateProfile);
          const userInfo = { name, email };
          const res = await axiosPublic.post("/users", userInfo);

          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "NEW USER CREATED SUCCESSFULLY!",
              text: "Welcome back!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
            resetForm();
          }
        }
        console.log("User created successfully:", result.user);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  });
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <SectionTitle2
        heading="Join Us Today"
        subheading="Create your account to start managing your study flow with ease."
      />

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center max-w-5xl bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="hidden lg:block lg:w-1/2 pl-4">
            <img
              src={signUpImg} // Replace this with your image path
              alt="Sign Up Illustration"
              className="h-full w-full object-cover rounded-md"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-6">
            <h2 className="text-3xl font-bold text-center text-purple-500 dark:text-purple-300 font-serif">
              REACT FORMIK FORM
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <Link to="/login">
                <button className="font-serif btn-link text-purple-600 dark:text-purple-400">
                  Login
                </button>
              </Link>
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <AdminAccessButton />

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="input text-purple-600 dark:text-purple-300 bg-gray-50 dark:bg-gray-700 input-primary w-full"
                  required
                />
              </div>

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
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="input text-purple-600 dark:text-purple-300 bg-gray-50 dark:bg-gray-700 input-primary w-full"
                  required
                />
              </div>
              {/* Photo URL */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter photoURL"
                  onChange={formik.handleChange}
                  value={formik.values.photoURL}
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
                    placeholder="Enter password"
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

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold w-full rounded-lg py-2 transition duration-300 border-none"
              >
                Sign Up
              </button>
            </form>

            {/* Social Login Component */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
