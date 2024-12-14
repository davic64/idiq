import { XIcon } from "lucide-react";

export const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <div
      className={`hs-overlay fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 transition-opacity duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } flex items-center`}
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
    >
      <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
          <div className="flex justify-between items-center py-3 px-4">
            <h3 id="modal-title" className="font-bold text-gray-800 text-lg">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent  text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
              aria-label="Close"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};
