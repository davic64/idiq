import { Tabs, ItemTab } from "../ui/Tabs";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Tabs>
        <ItemTab to="/">Alabanzas</ItemTab>
        <ItemTab to="/bible">Biblia</ItemTab>
      </Tabs>

      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};
