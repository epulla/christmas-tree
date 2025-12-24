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

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((moveEvent.clientX - rect.left) / rect.width) * 100;
      const y = ((moveEvent.clientY - rect.top) / rect.height) * 100;

      // Limitar dentro del contenedor
      const clampedX = Math.max(5, Math.min(95, x));
      const clampedY = Math.max(5, Math.min(95, y));

      onUpdatePosition(ornament.id, clampedX, clampedY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
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
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Esfera */}
      <div
        className={`relative w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
          isDragging ? "scale-110" : "hover:scale-105"
        }`}
        style={{
          backgroundColor: ornament.color,
          boxShadow: `0 4px 8px rgba(0,0,0,0.3), inset -2px -2px 8px rgba(0,0,0,0.3), inset 2px 2px 8px rgba(255,255,255,0.3)`,
        }}
      >
        {/* Brillo de la esfera */}
        <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full opacity-40"></div>

        {/* Gancho superior */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-600 rounded-full"></div>
      </div>

      {/* Nombre */}
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="text-xs font-semibold text-yellow-100 bg-green-900 bg-opacity-80 px-2 py-1 rounded shadow">
          {ornament.name}
        </span>
      </div>

      {/* Botón eliminar (solo visible en hover) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(ornament.id);
        }}
        className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-xs font-bold hover:bg-red-700"
        aria-label="Eliminar esfera"
      >
        ×
      </button>
    </div>
  );
}
