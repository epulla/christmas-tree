import { useState, useRef, useEffect } from "react";
import type { Ornament as OrnamentType } from "@/hooks/use-ornaments";

interface OrnamentProps {
  ornament: OrnamentType;
  onRemove: (id: string) => void;
  onUpdatePosition: (id: string, x: number, y: number) => void;
}

export default function Ornament({
  ornament,
  onRemove,
  onUpdatePosition,
}: OrnamentProps) {
  const [isDragging, setIsDragging] = useState(false);
  const ornamentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Guardamos referencia al contenedor del árbol
    const treeContainer = document.getElementById("christmas-tree-container");
    if (treeContainer) {
      containerRef.current = treeContainer;
    }
  }, []);

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    // Limitar dentro del contenedor
    const clampedX = Math.max(5, Math.min(95, x));
    const clampedY = Math.max(5, Math.min(95, y));

    onUpdatePosition(ornament.id, clampedX, clampedY);
  };

  // Manejo de eventos de mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      updatePosition(moveEvent.clientX, moveEvent.clientY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Manejo de eventos táctiles (móvil)
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const handleTouchMove = (moveEvent: TouchEvent) => {
      moveEvent.preventDefault();
      const touch = moveEvent.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      ref={ornamentRef}
      className={`absolute group ${
        isDragging ? "cursor-grabbing z-50" : "cursor-grab z-10"
      }`}
      style={{
        left: `${ornament.x}%`,
        top: `${ornament.y}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none", // Prevenir scroll mientras se arrastra
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Esfera */}
      <div
        className={`relative w-8 h-8 rounded-full shadow-lg transition-all duration-300 ${
          isDragging ? "scale-110" : "hover:scale-105"
        }`}
        style={{
          backgroundColor: ornament.color,
          boxShadow: `
            0 4px 12px rgba(0,0,0,0.5), 
            inset -3px -3px 10px rgba(0,0,0,0.4), 
            inset 3px 3px 10px rgba(255,255,255,0.5),
            0 0 15px ${ornament.color}40
          `,
        }}
      >
        {/* Brillo de la esfera */}
        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-60"></div>

        {/* Gancho superior */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
      </div>

      {/* Nombre */}
      {ornament.name && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs font-semibold text-yellow-100 bg-green-900 bg-opacity-80 px-1.5 py-0.5 rounded shadow">
            {ornament.name}
          </span>
        </div>
      )}

      {/* Botón eliminar (siempre visible en móvil, hover en desktop) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(ornament.id);
        }}
        onTouchEnd={(e) => {
          e.stopPropagation();
        }}
        className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-600 text-white rounded-full opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-xs font-bold hover:bg-red-700 active:scale-90"
        aria-label="Eliminar esfera"
      >
        ×
      </button>
    </div>
  );
}
