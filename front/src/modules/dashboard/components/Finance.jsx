import { useState } from "react";
import { getUserName } from "../utils/getUserName";

export const Finance = () => {
  const userName = getUserName();

  const [activeTab, setActiveTab] = useState("ingresos");

  const ingresos = [
    { id: 1, descripcion: "Salario", monto: 2000 },
    { id: 2, descripcion: "Freelance", monto: 800 },
    { id: 3, descripcion: "Venta", monto: 400 },
  ];

  const egresos = [
    { id: 1, descripcion: "Alquiler", monto: 700 },
    { id: 2, descripcion: "Supermercado", monto: 150 },
    { id: 3, descripcion: "Entretenimiento", monto: 100 },
  ];

  // Función para cambiar entre ingresos y egresos
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full px-4">
      <h1 className="text-2xl font-bold">{`¡Bienvenido, ${userName}!`}</h1>
      <p className="py-0 mb-4">
        Veamos como han cambiado tus ingresos y egresos.
      </p>

      {/* Sección de botones para Ingresos y Egresos */}
      <div className="flex justify-center space-x-1 mb-6">
        <button
          onClick={() => handleTabClick("ingresos")}
          className={`w-button-xs flex justify-center items-center text-center border border-primary text-primary py-buttonPadding rounded-3xl hover:bg-primary-dark hover:text-white hover:border-primary-dark transition duration-300 ${
            activeTab === "ingresos"
              ? "bg-cyan-700 text-white"
              : "bg-white text-black"
          }`}
        >
          Ingresos
        </button>
        <button
          onClick={() => handleTabClick("egresos")}
          className={`w-button-xs flex justify-center items-center text-center border border-primary text-primary py-buttonPadding rounded-3xl hover:bg-primary-dark hover:text-white hover:border-primary-dark transition duration-300 ${
            activeTab === "egresos"
              ? "bg-cyan-700 text-white"
              : "bg-white text-black"
          }`}
        >
          Egresos
        </button>
      </div>

      {/* Listado de ingresos o egresos */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        {activeTab === "ingresos" ? (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              Listado de Ingresos
            </h2>
            <ul>
              {ingresos.map((ingreso) => (
                <li
                  key={ingreso.id}
                  className="border-b py-2 flex justify-between"
                >
                  <span>{ingreso.descripcion}</span>
                  <span className="font-semibold text-green-600">
                    ${ingreso.monto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              Listado de Egresos
            </h2>
            <ul>
              {egresos.map((egreso) => (
                <li
                  key={egreso.id}
                  className="border-b py-2 flex justify-between"
                >
                  <span>{egreso.descripcion}</span>
                  <span className="font-semibold text-red-600">
                    ${egreso.monto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
