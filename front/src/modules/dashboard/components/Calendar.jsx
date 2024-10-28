import { getUserName } from "../utils/getUserName";

export const Calendar = () => {
  const userName = getUserName();

  return (
    <div className=" w-full px-4 ">
      <h1 className="text-2xl font-bold ">{`¡Bienvenido, ${userName}!`}</h1>
      <p className="py-0 mb-4">
        Escogamos las fechas en las que quieres ver tus movimientos.
      </p>
    </div>
  );
};
