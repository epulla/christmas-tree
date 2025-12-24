# 🎄 Árbol de Navidad Interactivo

## 📦 Instalación

```bash
npm install html2canvas
npm install -D @types/html2canvas
```

## 📁 Estructura

```
src/
├── components/
│   ├── christmas-tree.tsx      # Componente principal
│   ├── ornament.tsx            # Esfera individual con drag & drop
│   ├── control-panel.tsx       # Panel para agregar esferas
│   ├── snow-effect.tsx         # Efecto de nieve
│   └── export-button.tsx       # Botón para descargar
├── hooks/
│   └── use-ornaments.ts        # Hook para manejar estado
├── utils/
│   ├── constants.ts            # Colores y configuración
│   └── export-image.ts         # Lógica de exportación
├── styles/
│   └── global.css              # Estilos y animaciones CSS
└── pages/
    └── index.astro             # Página principal

public/
└── tree.webp                   # Imagen del árbol navideño
```

## 🚀 Uso

1. Copia los archivos a tu proyecto Astro existente
2. Importa en tu página principal
3. Listo!

## 🎨 Personalizar

**Cambiar colores:** Edita `src/utils/constants.ts`
**Cambiar límite de esferas:** Cambia `MAX_ORNAMENTS` en constants.ts
