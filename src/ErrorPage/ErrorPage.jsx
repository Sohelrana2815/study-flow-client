import { Link } from "react-router-dom";
import errorImg from "../assets/404 Page/404.gif";
const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <img
          src={errorImg}
          className=" rounded-lg shadow-lg shadow-green-300"
        />
        <Link to="/">
          <button className="btn my-8 btn-outline text-green-400 font-bold font-serif hover:bg-green-500">
            Go To Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
