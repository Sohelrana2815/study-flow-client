import toast, { Toaster } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";

const AdminAccessModal = ({ toggleModal }) => {
  const email = "sohelrana727@gmail.com";
  const password = "@sr7272815";

  // copy to clipboard function

  // Function to copy text and show a toast notification

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };
  return (
    <>
      <div className="fixed inset-0 dark:text-black flex z-10 items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="modal-box bg-white p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Explore Admin Features!
          </h2>
          <p className="mb-6 text-lg text-center">
            Copy the keys to log in as admin!
          </p>

          <div className="space-y-4">
            {/* Email Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div>
                <label className="font-medium">Email:</label>
                <span className="ml-2">{email}</span>
              </div>
              <button
                className="btn btn-outline btn-sm flex items-center sm:ml-4"
                onClick={() => handleCopy(email)}
              >
                <FiCopy />
                <span className="ml-2">Copy Email</span>
              </button>
            </div>

            {/* Password Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div>
                <label className="font-medium">Password:</label>
                <span className="ml-2">{password}</span>
              </div>
              <button
                className="btn btn-outline btn-sm flex items-center sm:ml-4"
                onClick={() => handleCopy(password)}
              >
                <FiCopy />
                <span className="ml-2">Copy Password</span>
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full mt-6" onClick={toggleModal}>
            Close
          </button>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default AdminAccessModal;
