import { useState,useEffect } from "react";
import { Navbar } from "../../dashboard/components/Navbar";
import { Sidebar } from "../../dashboard/components/Sidebar";
import axios from 'axios';
import { Graphics } from "../components/Graphics";
import { Finance } from "../components/Finance";


const incomeData = [
  { date: "2023-01-01", amount: 1200 },
  { date: "2023-02-01", amount: 1500 },
  { date: "2023-03-01", amount: 1300 },
  { date: "2023-04-01", amount: 1600 },
  { date: "2023-05-01", amount: 1400 },
  { date: "2023-06-01", amount: 1700 },
  { date: "2023-07-01", amount: 1900 },
  { date: "2023-08-01", amount: 2500 },
];

const expendData = [
  { date: "2023-01-01", amount: 800 },
  { date: "2023-02-01", amount: 900 },
  { date: "2023-03-01", amount: 700 },
  { date: "2023-04-01", amount: 950 },
  { date: "2023-05-01", amount: 850 },
  { date: "2023-06-01", amount: 1000 },
  { date: "2023-07-01", amount: 1600 },
  { date: "2023-08-01", amount: 1500 },
];

export const DashboardPage = () => {
  const [activePage, setActivePage] = useState("graphics");
  const [incomeData, setIncomeData] = useState([]);
  const [expendData, setExpendData] = useState([]);
  const UserId = localStorage.getItem('userId');

  const conexionDashboard = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/dashboard`, {
        params: { userId: UserId }
      });
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
  }, []);

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
