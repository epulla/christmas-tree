import { useOrnaments } from "../hooks/use-ornaments";
import Ornament from "./ornament";
import ControlPanel from "./control-panel";
import ExportButton from "./export-button";
import SnowEffect from "./snow-effect";

export default function ChristmasTree() {
  const { ornaments, addOrnament, removeOrnament, updateOrnamentPosition } =
    useOrnaments();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Efecto de nieve */}
      <SnowEffect />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mb-2 drop-shadow-lg">
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
              className="relative w-full aspect-square max-w-2xl mx-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl shadow-2xl border-4 border-yellow-600 overflow-hidden flex items-center justify-center"
              style={{ userSelect: "none" }}
            >
              {/* Copos de nieve estáticos en el fondo */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: Math.random() * 4 + 2 + "px",
                      height: Math.random() * 4 + 2 + "px",
                      left: Math.random() * 100 + "%",
                      top: Math.random() * 100 + "%",
                      opacity: Math.random() * 0.6 + 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Contenedor del árbol y esferas */}
              <div className="relative w-[85%] h-[95%]">
                {/* Imagen del árbol */}
                <img
                  src="/tree.webp"
                  alt="Christmas Tree"
                  className="w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                />

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
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-yellow-100">
          <p className="text-sm">
            Hecho con ❤️ para esta Navidad {new Date().getFullYear()} 🎄
          </p>
        </footer>
      </div>
    </div>
  );
}
