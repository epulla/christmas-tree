import { toPng } from "html-to-image";

export const exportAsImage = async (
  elementId: string,
  filename: string = "mi-arbol-navidad.png"
) => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error("Element not found");
    return;
  }

  try {
    const dataUrl = await toPng(element, {
      quality: 1,
      pixelRatio: 3,
      backgroundColor: "#0f172a",
      cacheBust: true,
      style: {
        margin: "0",
        padding: "0",
      },
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Error exporting image:", error);
    throw error;
  }
};
