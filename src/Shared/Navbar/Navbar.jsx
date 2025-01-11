import { Link, NavLink } from "react-router-dom";
import { IoSearch, IoMenuSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useTheme from "../../Hooks/useTheme";
import useAdmin from "../../Hooks/useAdmin";
import { FaHome, FaPhone, FaRegistered } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { BiLogIn, BiPhone } from "react-icons/bi";

const Navbar = () => {
  const { logout, user, loading } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return <p>Loading.....</p>;
  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-white hover:text-gray-400">
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/createAssignments"
            className="text-white hover:text-gray-400"
          >
            Create Assignments
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/assignments" className="text-white hover:text-gray-400">
          All Assignments
        </NavLink>
      </li>
      {!isAdmin && user && (
        <li>
          <NavLink
            to="/dashboard/studentDashboard"
            className="text-white hover:text-gray-400"
          >
            Student Dashboard
          </NavLink>
        </li>
      )}
      {isAdmin && (
        <li>
          <NavLink
            to="/dashboard/academyAdmin"
            className="text-white hover:text-gray-400"
          >
            Teacher&apos;s Panel
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      {/* Top Layer */}
      <div className="bg-[#FFB400] h-12 flex items-center justify-center gap-x-8">
        {/* Phone */}
        <p className="flex items-center text-[#000957] gap-x-1">
          <BiPhone className="text-lg" /> +8801 64587 2451
        </p>
        <p className="flex items-center text-[#000957] gap-x-1">
          <BsClock /> Opening Time : 9:30am-5:30pm
        </p>
        <p className="flex items-center text-[#000957] gap-x-1">
          <FaHome /> Address: Example 1205 Dhaka
        </p>

        {/* register/login */}

        <div className="flex items-center gap-x-1">
          <Link to="/signUp">
            <p className="flex items-center gap-x-1">
              <FaRegistered /> Register
            </p>
          </Link>
          <p>|</p>
          <Link to="/login">
            <p className="flex items-center gap-x-1 link">
              <BiLogIn /> Login
            </p>
          </Link>
        </div>
      </div>

      {/* Middleware */}
      <div className="relative">
        {/* Searchbar */}
        <div className="absolute top-1/3 left-8">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-3 py-1 w-64 focus:outline-none"
            />
            <button className="bg-[#FFB400] text-white p-2 rounded-lg">
              <IoSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center h-24">
          <Link to="/" className="text-2xl font-bold text-[#1A1A1A]">
            <p>StudyFlow</p>
          </Link>
        </div>
      </div>

      {/* Bottom Layer */}
      <div className="bg-[#1A1A1A] py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="lg:hidden">
              <div className="dropdown dropdown-content">
                <button
                  tabIndex={0}
                  className="text-white text-3xl focus:outline-none"
                >
                  <IoMenuSharp />
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-[#1A1A1A] rounded-box w-52"
                >
                  {navLinks}
                </ul>
              </div>
            </div>
            <ul className="hidden lg:flex gap-6 text-sm uppercase font-semibold">
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
