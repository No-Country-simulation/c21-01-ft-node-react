import PropTypes from "prop-types";
import { useMemo } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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

  const totalIncome = incomeAmounts.reduce((a, b) => a + b, 0);
  const totalExpend = expendAmounts.reduce((a, b) => a + b, 0);
  const totalProfit = profitAmounts.reduce((a, b) => a + b, 0);

  const incomeNames = useMemo(
    () => incomeData.map((entry) => entry.name),
    [incomeData]
  );
  const expendNames = useMemo(
    () => expendData.map((entry) => entry.name),
    [expendData]
  );

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `Ingresos: ${totalIncome.toFixed(
          2
        )}, Egresos: ${totalExpend.toFixed(
          2
        )}, Ganancias: ${totalProfit.toFixed(2)}`,
      },
      layout: {
        padding: 30,
      },
    },
    layout: {
      padding: 30,
    },
  };

  const PieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 10,
          },
          boxWidth: 10,
        },
      },
      tooltip: {
        bodyFont: {
          size: 10,
        },
      },
    },
    layout: {
      padding: 20,
    },
  };

  const incomePieData = {
    labels: incomeNames,
    datasets: [
      {
        label: "Ingresos",
        data: incomeAmounts,
        backgroundColor: [
          "#FF9F40",
          "#FF6F91",
          "#36A2EB",
          "#4BC0C0",
          "#FFCE56",
          "#A38BDA",
          "#F15BB5",
          "#6BCB77",
        ],
      },
    ],
  };

  const expendPieData = {
    labels: expendNames,
    datasets: [
      {
        label: "Egresos",
        data: expendAmounts,
        backgroundColor: [
          "#FF9F40",
          "#FF6F91",
          "#36A2EB",
          "#4BC0C0",
          "#FFCE56",
          "#A38BDA",
          "#F15BB5",
          "#6BCB77",
        ],
      },
    ],
  };

  const profitPieData = {
    labels: dates,
    datasets: [
      {
        label: "Ganancias",
        data: profitAmounts,
        backgroundColor: [
          "#FF9F40",
          "#FF6F91",
          "#36A2EB",
          "#4BC0C0",
          "#FFCE56",
          "#A38BDA",
          "#F15BB5",
          "#6BCB77",
        ],
      },
    ],
  };

  const combinedLineData = {
    labels: dates,
    datasets: [
      {
        label: "Ingresos",
        data: incomeAmounts,
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.3)",
        fill: false,
      },
      {
        label: "Egresos",
        data: expendAmounts,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        fill: false,
      },
      {
        label: "Ganancias",
        data: profitAmounts,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.3)",
        fill: false,
      },
    ],
  };

  return (
    <div className="w-full h-full relative p-4">
      <div className="bg-slate-200 h-3/5 w-full mb-4 rounded-2xl shadow-md shadow-gray-300">
        <Line options={lineChartOptions} data={combinedLineData} />
      </div>

      <div className="grid grid-cols-3 gap-4 h-1/3">
        <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
          <Pie options={PieChartOptions} data={incomePieData} />
        </div>
        <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
          <Pie options={PieChartOptions} data={expendPieData} />
        </div>
        <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
          <Pie options={PieChartOptions} data={profitPieData} />
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
