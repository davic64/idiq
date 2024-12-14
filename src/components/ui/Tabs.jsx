import { NavLink } from "react-router-dom";
import React from "react";

export const ItemTab = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap focus:outline-none disabled:opacity-50 disabled:pointer-events-none ${
          isActive
            ? "border-blue-600 text-blue-600 font-semibold"
            : "border-transparent text-gray-500 hover:text-blue-600 focus:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500"
        }`
      }
      role="tab"
      end
    >
      {children}
    </NavLink>
  );
};

export const Tabs = ({ children }) => {
  const tabs = React.Children.toArray(children).filter(
    (child) => child.type === ItemTab
  );

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav
          className="-mb-0.5 flex justify-center gap-x-6"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {tabs}
        </nav>
      </div>
    </div>
  );
};
