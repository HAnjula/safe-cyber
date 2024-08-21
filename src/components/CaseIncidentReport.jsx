import { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const CaseIncidentReport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Floating Icon */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={openModal}
          className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
          aria-label="Report Incident"
        >
          <AiOutlineExclamationCircle size={30} />
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Report an Incident
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Incident Description
                </label>
                <textarea
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-3 bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseIncidentReport;
