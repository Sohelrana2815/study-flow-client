import { useState } from "react";
import AdminAccessModal from "../AdminAccessModal/AdminAccessModal";

const AdminAccessButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className="flex justify-center py-4">
        <button
          className="btn bg-gradient-to-r  from-blue-500 to-purple-600 hover:from-purple-700 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          onClick={toggleModal}
        >
          Admin/Teacher Credentials
        </button>
      </div>

      {isModalOpen ? <AdminAccessModal toggleModal={toggleModal} /> : ""}
    </>
  );
};

export default AdminAccessButton;
