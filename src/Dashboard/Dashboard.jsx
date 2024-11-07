import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { IoMenuSharp } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import useTheme from "../Hooks/useTheme";
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navLinks = (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
        {isAdmin ? (
          <>
            <li>
              <NavLink to="/dashboard/academyAdmin">
                <FaChalkboardTeacher className="text-2xl text-[#00CCDD]" />
                Teacher&apos;s Desk
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allUsers">
                <FaUsers className="text-2xl text-[#6439FF]" />
                All Users
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="dark:hover:bg-[#2F3645]">
              <NavLink to="/dashboard/studentDashboard">
                <PiStudent className="text-2xl text-[#FF6500]" />
                Student Dashboard
              </NavLink>
            </li>
          </>
        )}
      </div>
      {/* Shared navLinks */}

      <li className="dark:hover:bg-[#2F3645]">
        <NavLink to="/assignments">
          <MdAssignment className="text-2xl text-[#859F3D]" />
          All Assignments
        </NavLink>
      </li>
      <li className="dark:hover:bg-[#2F3645]">
        <NavLink to="/assignments">
          <BiHome className="text-2xl text-[#7C00FE]" />
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 dark:bg-[#1E3E62] w-full dark:text-white">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <IoMenuSharp className="text-3xl" />
            </label>
          </div>
          <Link to="/">
            <div className="mx-2 flex-1  lg:text-2xl font-serif px-2 ">
              Study Flow
            </div>
          </Link>
          <button
            className="dark:text-white text-black"
            onClick={toggleDarkMode}
          >
            {/* this hidden checkbox controls the state */}

            {isDarkMode ? (
              // sun icon
              <LuSun className="lg:text-3xl md:text-3xl text-2xl" />
            ) : (
              // moon icon
              <GoMoon className="lg:text-3xl md:text-3xl text-2xl" />
            )}
          </button>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal ">
              {/* Navbar menu content here */}
              {navLinks}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className="min-h-screen dark:bg-[#0B192C]  dark:text-white">
          <div className="max-w-screen-2xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 dark:bg-gray-900 dark:text-white min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
