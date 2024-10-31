import PropTypes from "prop-types";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Graphics = ({ incomeData, expendData }) => {
  const dates = useMemo(
    () => incomeData.map((entry) => entry.date),
    [incomeData]
  );
  const incomeAmounts = useMemo(
    () => incomeData.map((entry) => parseFloat(entry.amount || 0)),
    [incomeData]
  );
  const expendAmounts = useMemo(
    () => expendData.map((entry) => parseFloat(entry.amount || 0)),
    [expendData]
  );

  const profitAmounts = useMemo(
    () =>
      incomeAmounts.map((income, index) => income - expendAmounts[index] || 0),
    [incomeAmounts, expendAmounts]
  );

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Gráfico Lineal" },
    },
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Comparativa de Ingresos, Egresos y Ganancias",
      },
    },
  };

  const incomeDataChart = {
    labels: dates,
    datasets: [
      {
        label: "Ingresos",
        data: incomeAmounts,
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.3)",
      },
    ],
  };

  const expendDataChart = {
    labels: dates,
    datasets: [
      {
        label: "Egresos",
        data: expendAmounts,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.3)",
      },
    ],
  };

  const profitDataChart = {
    labels: dates,
    datasets: [
      {
        label: "Ganancias",
        data: profitAmounts,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.3)",
      },
    ],
  };

  const barDataChart = {
    labels: dates,
    datasets: [
      {
        label: "Ingresos",
        data: incomeAmounts,
        backgroundColor: "rgba(0, 255, 0, 0.6)",
      },
      {
        label: "Egresos",
        data: expendAmounts,
        backgroundColor: "rgba(255, 0, 0, 0.6)",
      },
      {
        label: "Ganancias",
        data: profitAmounts,
        backgroundColor: "rgba(0, 0, 255, 0.6)",
      },
    ],
  };

  return (
    <div className="w-full h-full relative p-4">
      <div className="bg-slate-200 h-1/2 w-full mb-4 rounded-2xl shadow-md shadow-gray-300">
        <Bar
          options={{ ...barChartOptions, maintainAspectRatio: false }}
          data={barDataChart}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 h-1/2">
        <div className="bg-slate-200 h-full flex al rounded-2xl shadow-md shadow-gray-300">
          <Line options={lineChartOptions} data={incomeDataChart} />
        </div>
        <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
          <Line options={lineChartOptions} data={expendDataChart} />
        </div>
        <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
          <Line options={lineChartOptions} data={profitDataChart} />
        </div>
      </div>
    </div>
  );
};
Graphics.propTypes = {
  incomeData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  expendData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
