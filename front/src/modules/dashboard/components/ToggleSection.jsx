import { useState } from "react";
import { FieldGroup } from "./FieldGroup";

export const ToggleSection = () => {
  const [showIncome, setShowIncome] = useState(true);
  const [incomeData, setIncomeData] = useState(
    Array.from({ length: 4 }, (_, index) => ({
      id: index + 1,
      title: "",
      date: "",
      amount: "",
    }))
  );
  const [expendData, setExpendData] = useState(
    Array.from({ length: 4 }, (_, index) => ({
      id: index + 1,
      title: "",
      date: "",
      amount: "",
    }))
  );

  const handleToggle = () => setShowIncome(!showIncome);

  const currentData = showIncome ? incomeData : expendData;
  const setCurrentData = showIncome ? setIncomeData : setExpendData;

  return (
    <div>
      <button onClick={handleToggle}>
        {showIncome ? "Ingreso" : "Egreso"}
      </button>

      <div className="w-full flex flex-row justify-between border-b border-gray-400 p-2">
        <span className="font-medium text-base text-gray-600 w-full text-left">
          ID
        </span>
        <span className="font-medium text-base text-gray-600 w-full text-left">
          Título
        </span>
        <span className="font-medium text-base text-gray-600 w-full text-left">
          Fecha
        </span>
        <span className="font-medium text-base text-gray-600 w-full text-left">
          Monto
        </span>
      </div>
      <FieldGroup data={currentData} setData={setCurrentData} />
    </div>
  );
};
