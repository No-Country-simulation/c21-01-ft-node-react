import React, { useState } from "react";
import { Navbar } from "../../dashboard/components/Navbar";
import { Sidebar } from "../../dashboard/components/Sidebar";

import HomePage from "../../dashboard/pages/HomePage";
import GraphicsPage from "../../dashboard/pages/GraphicsPage";
import CalendaryPage from "../../dashboard/pages/CalendaryPage";

export const DashboardPage = () => {
  const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "graphic":
        return <GraphicsPage />;
      case "calendary":
        return <CalendaryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar setActivePage={setActivePage} />
        <main className="flex-1 p-4 bg-white">{renderContent()}</main>
      </div>
    </div>
  );
};
