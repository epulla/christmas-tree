import { useOrnaments } from "@/hooks/use-ornaments";
import Ornament from "./ornament";
import ControlPanel from "./control-panel";
import ExportButton from "./export-button";
import SnowEffect from "./snow-effect";

export default function ChristmasTree() {
  const { ornaments, addOrnament, removeOrnament, updateOrnamentPosition } =
    useOrnaments();

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Efecto de nieve */}
      <SnowEffect />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-500 via-yellow-500 to-green-500 mb-2 drop-shadow-lg">
            🎄 Mi Árbol de Navidad 🎄
          </h1>
          <p className="text-yellow-100 text-lg md:text-xl font-semibold">
            Crea tu árbol personalizado con los nombres de tus seres queridos
          </p>
        </header>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Panel de control - izquierda */}
          <div className="lg:col-span-1 space-y-6">
            <ControlPanel
              onAddOrnament={addOrnament}
              currentCount={ornaments.length}
            />
            <ExportButton
              elementId="christmas-tree-container"
              disabled={ornaments.length === 0}
            />

            {/* Advertencia */}
            {ornaments.length > 0 && (
              <div className="bg-yellow-600 bg-opacity-20 border-2 border-yellow-500 rounded-lg p-4">
                <p className="text-yellow-100 text-sm text-center">
                  ⚠️ <strong>Importante:</strong> Si recargas la página,
                  perderás tus cambios. Descarga tu árbol antes de salir.
                </p>
              </div>
            )}
          </div>

          {/* Árbol - centro/derecha */}
          <div className="lg:col-span-2">
            <div
              id="christmas-tree-container"
              className="relative w-full aspect-square max-w-2xl mx-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl shadow-2xl p-8 border-4 border-yellow-600"
              style={{ userSelect: "none" }}
            >
              {/* SVG del árbol */}
              <svg
                viewBox="0 0 200 240"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))" }}
              >
                {/* Tronco */}
                <rect x="85" y="190" width="30" height="40" fill="#7C3810" />

                {/* Capas del árbol (de abajo hacia arriba) */}
                <polygon
                  points="100,190 30,190 15,160 185,160 170,190"
                  fill="#15803D"
                />
                <polygon
                  points="100,165 40,165 25,135 175,135 160,165"
                  fill="#16A34A"
                />
                <polygon
                  points="100,140 50,140 35,110 165,110 150,140"
                  fill="#15803D"
                />
                <polygon
                  points="100,115 60,115 45,85 155,85 140,115"
                  fill="#16A34A"
                />
                <polygon
                  points="100,90 70,90 55,60 145,60 130,90"
                  fill="#15803D"
                />
                <polygon
                  points="100,65 80,65 65,35 135,35 120,65"
                  fill="#16A34A"
                />
                <polygon
                  points="100,40 85,40 75,15 125,15 115,40"
                  fill="#15803D"
                />

                {/* Estrella en la punta */}
                <g transform="translate(100, 8)">
                  <path
                    d="M 0,-8 L 2,-2 L 8,-1 L 3,2 L 4,8 L 0,4 L -4,8 L -3,2 L -8,-1 L -2,-2 Z"
                    fill="#F59E0B"
                    stroke="#D97706"
                    strokeWidth="0.5"
                  />
                  <circle cx="0" cy="0" r="2" fill="#FDE047" opacity="0.8" />
                </g>

                {/* Luces decorativas en el árbol */}
                {[
                  { cx: 50, cy: 50, color: "#EF4444" },
                  { cx: 150, cy: 50, color: "#F59E0B" },
                  { cx: 70, cy: 80, color: "#F59E0B" },
                  { cx: 130, cy: 80, color: "#EF4444" },
                  { cx: 60, cy: 110, color: "#EF4444" },
                  { cx: 140, cy: 110, color: "#F59E0B" },
                  { cx: 50, cy: 140, color: "#F59E0B" },
                  { cx: 150, cy: 140, color: "#EF4444" },
                  { cx: 40, cy: 170, color: "#EF4444" },
                  { cx: 160, cy: 170, color: "#F59E0B" },
                ].map((light, index) => (
                  <circle
                    key={index}
                    cx={light.cx}
                    cy={light.cy}
                    r="3"
                    fill={light.color}
                    className="animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </svg>

              {/* Esferas navideñas */}
              {ornaments.map((ornament) => (
                <Ornament
                  key={ornament.id}
                  ornament={ornament}
                  onRemove={removeOrnament}
                  onUpdatePosition={updateOrnamentPosition}
                />
              ))}

              {/* Mensaje cuando no hay esferas */}
              {ornaments.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center bg-slate-800 bg-opacity-80 p-6 rounded-xl">
                    <p className="text-yellow-100 text-xl font-bold mb-2">
                      ¡Tu árbol está esperando!
                    </p>
                    <p className="text-yellow-200">
                      Agrega esferas con los nombres de tus seres queridos ➡️
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-yellow-100">
          <p className="text-sm">Hecho con ❤️ para esta Navidad 2024 🎄</p>
        </footer>
      </div>
    </div>
  );
}
