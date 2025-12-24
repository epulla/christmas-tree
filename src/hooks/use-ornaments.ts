import { useState, useCallback } from "react";
import { ORNAMENT_COLORS, ORNAMENT_POSITIONS } from "@/utils/constants";

export interface Ornament {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
}

export const useOrnaments = () => {
  const [ornaments, setOrnaments] = useState<Ornament[]>([]);

  const addOrnament = useCallback(
    (name: string) => {
      const newId = Date.now().toString();
      const randomColor =
        ORNAMENT_COLORS[Math.floor(Math.random() * ORNAMENT_COLORS.length)];
      const position =
        ORNAMENT_POSITIONS[ornaments.length % ORNAMENT_POSITIONS.length];

      const newOrnament: Ornament = {
        id: newId,
        name,
        color: randomColor,
        x: position.x,
        y: position.y,
      };

      setOrnaments((prev) => [...prev, newOrnament]);
    },
    [ornaments.length]
  );

  const removeOrnament = useCallback((id: string) => {
    setOrnaments((prev) => prev.filter((o) => o.id !== id));
  }, []);

  const updateOrnamentPosition = useCallback(
    (id: string, x: number, y: number) => {
      setOrnaments((prev) =>
        prev.map((o) => (o.id === id ? { ...o, x, y } : o))
      );
    },
    []
  );

  return {
    ornaments,
    addOrnament,
    removeOrnament,
    updateOrnamentPosition,
  };
};
