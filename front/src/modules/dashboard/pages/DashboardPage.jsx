import { useState } from "react";
import { Navbar } from "../../dashboard/components/Navbar";
import { Sidebar } from "../../dashboard/components/Sidebar";

import { Graphics } from "../components/Graphics";
import { Finance } from "../components/Finance";

export const DashboardPage = () => {
  const [activePage, setActivePage] = useState("graphics");

  const renderContent = () => {
    switch (activePage) {
      case "graphics":
        return <Graphics />;
      case "finance":
        return <Finance />;
      default:
        return <Graphics />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar setActivePage={setActivePage} />
        <main className="flex-1 pl-4 pr-4 bg-white">{renderContent()}</main>
      </div>
    </div>
  );
};
