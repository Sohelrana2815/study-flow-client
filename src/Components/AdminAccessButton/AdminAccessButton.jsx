import { useState } from "react";
import AdminAccessModal from "../AdminAccessModal/AdminAccessModal";

const AdminAccessButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className="flex justify-center py-4">
        <button className="btn  btn-primary text-white" onClick={toggleModal}>
          Admin/Teacher Credentials
        </button>
      </div>
      {isModalOpen ? <AdminAccessModal toggleModal={toggleModal} /> : ""}
    </>
  );
};

export default AdminAccessButton;
