import { getUserName } from "../utils/getUserName";

export const Graphics = () => {
  const userName = getUserName();

  return (
    <div className=" w-full px-4 ">
      <h1 className="text-2xl font-bold ">{`¡Bienvenido, ${userName}!`}</h1>
      <p className="py-0 mb-4">
        Tu panel financiero está listo para para simplificar la gestión de tus
        cuentas
      </p>

      <div className="bg-slate-200 h-64 w-full mb-4 rounded-2xl shadow-md shadow-gray-300">
        <p className="text-center pt-24">Gráfico Grande</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-200 h-36 rounded-2xl shadow-md shadow-gray-300">
          <p className="text-center pt-16">Gráfico Pequeño 1</p>
        </div>
        <div className="bg-slate-200 h-36 rounded-2xl shadow-md shadow-gray-300">
          <p className="text-center pt-16">Gráfico Pequeño 2</p>
        </div>
        <div className="bg-slate-200 h-36 rounded-2xl shadow-md shadow-gray-300">
          <p className="text-center pt-16">Gráfico Pequeño 3</p>
        </div>
      </div>
    </div>
  );
};
