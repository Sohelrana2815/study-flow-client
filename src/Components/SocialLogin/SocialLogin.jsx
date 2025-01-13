import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useAuth();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <p className="text-center py-2  text-black dark:text-gray-100">
        ---OR---
      </p>
      <button
        className="btn btn-outline hover:bg-black w-full dark:border-gray-200"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="text-2xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
