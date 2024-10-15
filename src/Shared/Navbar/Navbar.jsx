import { Link, NavLink } from "react-router-dom";
import { IoBookSharp, IoMenuSharp } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const Navbar = () => {
  const { logout, user } = useAuth();

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

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      {user ? (
        <></>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signUp">Sign Up</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenuSharp className="text-3xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link>
          <p className="btn btn-ghost text-xl">
            <IoBookSharp className="text-green-500 text-2xl" />
            Study Flow
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            {/*  */}

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-10 rounded-full">
                    <p>
                      {user?.displayName
                        ? user.displayName.slice(0, 1).toUpperCase()
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box  z-[1] mt-3 w-52 p-2 shadow "
              >
                <li>
                  <a className="hover:bg-success hover:text-white" onClick={handleLogout}>Logout</a>
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
      </div>
    </div>
  );
};

export default Navbar;
