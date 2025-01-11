import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white transition-colors duration-1000">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
