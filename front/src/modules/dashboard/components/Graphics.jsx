export const Graphics = () => {
  return (
    <div className="w-full h-full relative p-4">
      <div className="bg-slate-200 h-1/2 w-full mb-2 rounded-2xl shadow-md shadow-gray-300">
        <p className="text-center pt-24">Gráfico Grande</p>
      </div>

      <div className="grid grid-cols-3 gap-2 h-1/2">
        <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
          <p className="text-center pt-16">Gráfico Pequeño 1</p>
        </div>
        <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
          <p className="text-center pt-16">Gráfico Pequeño 2</p>
        </div>
        <div className="bg-slate-200 h-full rounded-2xl shadow-md shadow-gray-300">
          <p className="text-center pt-16">Gráfico Pequeño 3</p>
        </div>
      </div>
    </div>
  );
};
