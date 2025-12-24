import { useState } from "react";
import { MAX_ORNAMENTS } from "../utils/constants";

interface ControlPanelProps {
  onAddOrnament: (name: string) => void;
  currentCount: number;
}

export default function ControlPanel({
  onAddOrnament,
  currentCount,
}: ControlPanelProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCount < MAX_ORNAMENTS) {
      onAddOrnament(name.trim());
      setName("");
    }
  };

  const isMaxReached = currentCount >= MAX_ORNAMENTS;

  return (
    <div className="bg-black/50 p-6 rounded-2xl shadow-2xl border-4 border-yellow-600">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="ornament-name"
            className="block text-sm font-semibold text-yellow-100 mb-2"
          >
            Nombre para tu esfera (opcional):
          </label>
          <input
            id="ornament-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Mamá, Papá... o déjalo vacío"
            maxLength={20}
            disabled={isMaxReached}
            className="w-full px-4 py-3 rounded-lg border-2 border-yellow-600 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-900 font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={isMaxReached}
          className="w-full py-3 px-6 bg-yellow-600 hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {isMaxReached ? "🎄 Árbol Completo" : "✨ Agregar Esfera"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-yellow-100 font-semibold">
          Esferas: {currentCount} / {MAX_ORNAMENTS}
        </p>
        {isMaxReached && (
          <p className="text-yellow-300 text-sm mt-2">
            ¡Tu árbol está completo! 🎉
          </p>
        )}
      </div>

      <div className="mt-4 p-3 bg-green-800 bg-opacity-50 rounded-lg">
        <p className="text-xs text-yellow-100 text-center">
          💡 <strong>Tip:</strong> Arrastra las esferas para moverlas. El nombre
          es opcional. Pasa el mouse sobre ellas para eliminarlas.
        </p>
      </div>
    </div>
  );
}
