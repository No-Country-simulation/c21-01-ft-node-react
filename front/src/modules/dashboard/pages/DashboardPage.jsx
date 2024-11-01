import { useState, useEffect } from "react";
import { Navbar } from "../../dashboard/components/Navbar";
import { Sidebar } from "../../dashboard/components/Sidebar";
import axios from "axios";
import { Graphics } from "../components/Graphics";
import { Finance } from "../components/Finance";

export const DashboardPage = () => {
  const [activePage, setActivePage] = useState("graphics");
  const [incomeData, setIncomeData] = useState([]);
  const [expendData, setExpendData] = useState([]);
  const UserId = localStorage.getItem("userId");

  const conexionDashboard = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE}/users/dashboard`,
        {
          params: { userId: UserId },
        }
      );
      const incomeArray = response.data[2]?.income || [];
      const expenseArray = response.data[1]?.expense || [];
      setExpendData(expenseArray);
      setIncomeData(incomeArray);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    conexionDashboard();
  });

  const renderContent = () => {
    switch (activePage) {
      case "graphics":
        return <Graphics incomeData={incomeData} expendData={expendData} />;
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
