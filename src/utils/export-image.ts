import html2canvas from "html2canvas";

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
    const canvas = await html2canvas(element, {
      backgroundColor: "#0f172a",
      scale: 2, // Mayor resolución
      logging: false,
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error("Error exporting image:", error);
  }
};
