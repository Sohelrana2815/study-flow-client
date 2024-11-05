import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { FaHome } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { MdAssignment } from "react-icons/md";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const navLinks = (
    <>
      {isAdmin ? (
        <>
          <li>
            <NavLink to="/dashboard/academyAdmin">
              <GiTeacher />
              Teacher&apos;s Desk
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/academyAdmin">
              <GiTeacher />
              Teacher&apos;s Desk
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <div className="divider dark:divider-primary"></div>

      <div className="border border-primary hidden lg:block mr-2"></div>
      <>
        <li>
          <NavLink to="/dashboard/studentDashboard">
            <PiStudent />
            Student Dashboard
          </NavLink>
        </li>
      </>
      {/* Shared navLinks */}
      <div className="divider dark:divider-primary"></div>
      <div className="border border-primary hidden lg:block"></div>
      <li className="pl-2">
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/assignments">
          <MdAssignment /> All Assignments
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full dark:bg-black dark:text-white">
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
            <div className="mx-2 flex-1 px-2 btn btn-ghost">Study Flow</div>
          </Link>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal ">
              {/* Navbar menu content here */}
              {navLinks}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 dark:bg-black dark:text-white min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
