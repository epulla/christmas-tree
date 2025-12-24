import { useState } from "react";
import { exportAsImage } from "@/utils/export-image";

interface ExportButtonProps {
  elementId: string;
  disabled?: boolean;
}

export default function ExportButton({
  elementId,
  disabled = false,
}: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportAsImage(elementId, "mi-arbol-navidad.png");
    } catch (error) {
      console.error("Error al exportar:", error);
      alert("Hubo un error al exportar la imagen. Por favor intenta de nuevo.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={disabled || isExporting}
      className="w-full py-4 px-6 bg-slate-800 disabled:from-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-200 hover:scale-105 active:scale-95 border-4 border-yellow-600"
    >
      {isExporting ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Exportando...
        </span>
      ) : (
        "📸 Descargar mi Árbol como Imagen"
      )}
    </button>
  );
}
