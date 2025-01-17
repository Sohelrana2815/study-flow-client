import { Link, NavLink } from "react-router-dom";
import { BiPhone, BiLogIn, BiMenu } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FaHome, FaRegistered } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";
import useAuth from "../../Hooks/useAuth";
import useTheme from "../../Hooks/useTheme";
import useAdmin from "../../Hooks/useAdmin";
import Swal from "sweetalert2";
import AnimatedComponent from "../../Components/AnimatedComponent/AnimatedComponent";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      }
    });
  };

  const navLinks = (
    <>
      <li className="lg:text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li className="lg:text-lg">
          <NavLink
            to="/createAssignments"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            Create Assignments
          </NavLink>
        </li>
      )}
      <li className="lg:text-lg">
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          All Assignments
        </NavLink>
      </li>
      {user ? null : (
        <>
          <li className="lg:text-lg">
            <NavLink
              to="/signUp"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
            >
              Register
            </NavLink>
          </li>
          <li className="lg:text-lg">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
            >
              Login
            </NavLink>
          </li>
        </>
      )}
      {user && !isAdmin && (
        <li className="lg:text-lg">
          <NavLink
            to="/dashboard/studentDashboard"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            Student Dashboard
          </NavLink>
        </li>
      )}
      {isAdmin && (
        <li className="lg:text-lg">
          <NavLink
            to="/dashboard/academyAdmin"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
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
      <AnimatedComponent animation="fade-out">
        <div className="bg-[#FFB400] h-12 xl:flex items-center justify-center gap-x-8 hidden lg:flex">
          <p className="flex items-center text-[#000957] gap-x-1">
            <BiPhone className="text-lg" /> +8801 64587 2451
          </p>
          <p className="flex items-center text-[#000957] gap-x-1">
            <BsClock /> Opening Time : 9:30am-5:30pm
          </p>
          <p className="flex items-center text-[#000957] gap-x-1">
            <FaHome /> Address: Charigram, Savar, Dhaka
          </p>

          {user ? null : (
            <div className="flex items-center gap-x-4">
              <Link to="/signUp" className="text-[#000957] hover:text-gray-600">
                <p className="flex items-center gap-x-1">
                  <FaRegistered /> Register
                </p>
              </Link>
              <p>|</p>
              <Link to="/login" className="text-[#000957] hover:text-gray-600">
                <p className="flex items-center gap-x-1">
                  <BiLogIn /> Login
                </p>
              </Link>
            </div>
          )}
        </div>
      </AnimatedComponent>

      {/* Middleware */}
      <AnimatedComponent animation="fade-out">
        <div className="relative bg-[#FFF8F0] py-6">
          <div className="top-1/2 transform -translate-y-1/2 left-4 hidden md:block">
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
          <div className="flex items-center justify-center">
            <Link to="/" className="text-3xl font-bold">
              <p className="font-lora text-[#6C5EBF]">
                Study <span className="text-[#FFB400]">Flow</span>
              </p>
            </Link>
          </div>
        </div>
      </AnimatedComponent>

      {/* Bottom Layer */}
      <AnimatedComponent animation="fade-in">
        <div className="navbar bg-[#6C5EBF] font-lora text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="lg:hidden text-3xl cursor-pointer"
              >
                <BiMenu />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#6C5EBF] font-lora"
              >
                {navLinks}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="text-2xl focus:outline-none"
            >
              {isDarkMode ? <GoMoon /> : <LuSun />}
            </button>
            {user && (
              <div className="dropdown dropdown-end" title={user?.displayName}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-gray-800"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default Navbar;
