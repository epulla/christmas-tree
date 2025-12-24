import { useOrnaments } from "../hooks/use-ornaments";
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
          <p className="text-yellow-100 text-lg md:text-xl font-semibold mb-4">
            Crea tu árbol personalizado con los nombres de tus seres queridos
          </p>

          {/* Redes sociales */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://github.com/epulla/christmas-tree"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-yellow-600 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm font-semibold">GitHub</span>
            </a>

            <a
              href="https://www.tiktok.com/@erickdev11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-yellow-600 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span className="text-sm font-semibold">TikTok</span>
            </a>

            <a
              href="https://www.linkedin.com/in/erickpulla/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-yellow-600 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-semibold">LinkedIn</span>
            </a>
          </div>
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
              className="relative w-full aspect-square max-w-2xl mx-auto bg-linear-to-b from-slate-800 to-slate-900 rounded-3xl shadow-2xl border-4 border-yellow-600 overflow-hidden flex items-center justify-center"
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
          <p className="text-sm">Hecho con ❤️ para esta Navidad 2024 🎄</p>
        </footer>
      </div>
    </div>
  );
}
