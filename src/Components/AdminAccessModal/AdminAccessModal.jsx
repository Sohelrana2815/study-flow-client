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
      <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-75">
        <div className="modal-box bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full mx-4 p-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Admin Access Credentials
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2 mb-6">
            Use the credentials below to log in as an admin.
          </p>

          <div className="space-y-6">
            {/* Email Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex-1">
                <p className="font-medium text-gray-700 dark:text-gray-300">
                  <span className="text-gray-900 dark:text-white">Email:</span>{" "}
                  {email}
                </p>
              </div>
              <button
                className="btn btn-outline btn-sm flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 transition-all duration-200"
                onClick={() => handleCopy(email)}
              >
                <FiCopy className="text-lg" />
                <span className="ml-2">Copy Email</span>
              </button>
            </div>

            {/* Password Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex-1">
                <p className="font-medium text-gray-700 dark:text-gray-300">
                  <span className="text-gray-900 dark:text-white">
                    Password:
                  </span>{" "}
                  {password}
                </p>
              </div>
              <button
                className="btn btn-outline btn-sm flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 transition-all duration-200"
                onClick={() => handleCopy(password)}
              >
                <FiCopy className="text-lg" />
                <span className="ml-2">Copy Password</span>
              </button>
            </div>
          </div>

          <button
            className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold w-full py-2 mt-6 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 border-none"
            onClick={toggleModal}
          >
            Close
          </button>

          <Toaster />
        </div>
      </div>
    </>
  );
};

export default AdminAccessModal;
