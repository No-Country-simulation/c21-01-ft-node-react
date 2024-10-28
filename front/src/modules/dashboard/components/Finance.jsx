import { getUserName } from "../utils/getUserName";
import { ToggleSection } from "./ToggleSection";

export const Finance = () => {
  const userName = getUserName();
  return (
    <div className="w-full px-4">
      <h1 className="text-2xl font-bold">{`¡Bienvenido, ${userName}!`}</h1>
      <p className="py-0 mb-2">
        Coloca tus ingresos y egresos para controlar tus finanzas.
      </p>

      <ToggleSection />
    </div>
  );
};
