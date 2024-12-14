import { useState } from "react";

export const Tooltip = ({ children, tooltipText, placement = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  const tooltipPlacementClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <span
          className={`absolute z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700 ${tooltipPlacementClasses[placement]}`}
          style={{ whiteSpace: "nowrap" }}
          role="tooltip"
        >
          {tooltipText}
        </span>
      )}
    </div>
  );
};
