import { Link, NavLink } from "react-router-dom";
import { IoBookSharp, IoMenuSharp } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useTheme from "../../Hooks/useTheme";
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";
const Navbar = () => {
  const { logout, user, loading } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();

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
      <div className="lg:flex gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {user ? (
          <li>
            <NavLink to="/createAssignments">Create Assignments</NavLink>
          </li>
        ) : null}
        <li>
          <NavLink to="/assignments">All Assignments</NavLink>
        </li>
      </div>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 dark:bg-gray-900 mt-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenuSharp className="md:text-2xl text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-gray-900"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center gap-4">
              <p>
                <IoBookSharp className="text-[#161D6F] md:text-2xl  dark:text-green-500" />
              </p>
              <p className="text-sm md:text-xl text-[#001F3F] lg:text-2xl lg:ml-4 font-semibold dark:text-white font-serif ">
                Study Flow
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <div>
              {/*  */}

              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                >
                  <div className="avatar placeholder ">
                    <div className="bg-neutral text-neutral-content  w-10 rounded-full">
                      <div>
                        {user?.photoURL ? (
                          <>
                            <img src={user.photoURL} />
                          </>
                        ) : (
                          <>{user.displayName.slice(0, 1).toUpperCase()}</>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box  z-[1] mt-3 w-52 p-2 dark:bg-gray-900 shadow "
                >
                  <li>
                    <Link
                      className="hover:bg-gradient-to-r from-[#A0D683] to-[#4CAF50] hover:text-white"
                      to={"/mySubmittedAssignments"}
                    >
                      <p>My Submitted Assignment</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-gradient-to-r from-[#A0D683] to-[#4CAF50] hover:text-white"
                      to={"/pendingAssignments"}
                    >
                      <p>Pending Assignments</p>
                    </Link>
                  </li>
                  <li>
                    <NavLink to="about">404 Page</NavLink>
                  </li>

                  <li>
                    <a
                      className="hover:bg-gradient-to-r from-[#C62E2E] to-[#4b0082] hover:text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              {/*  */}
            </div>
          ) : (
            <Link to="/login">
              <button className="font-serif btn">Sign In</button>
            </Link>
          )}
          <button
            className="dark:text-white text-black"
            onClick={toggleDarkMode}
          >
            {/* this hidden checkbox controls the state */}

            {isDarkMode ? (
              // sun icon
              <LuSun className="text-4xl" />
            ) : (
              // moon icon
              <GoMoon className="text-3xl" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
