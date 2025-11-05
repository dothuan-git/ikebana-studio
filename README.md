# Ikebana Studio

A beautiful, interactive web application for creating digital ikebana (Japanese flower arrangements). Experience the zen-like art of ikebana with realistic physics-based interactions and a carefully crafted Japanese aesthetic.
Visit: https://ikebana-studio.vercel.app/

![Ikebana Studio](docs/screenshot.png)

## Features

- **5 Unique Pots**: Choose from shallow bowls, tall vases, rectangular containers, asymmetric vessels, and rustic clay pots
- **8 Flower Varieties**: Cherry blossom, chrysanthemum, iris, plum blossom, forsythia, lily, peony, and jasmine - each with detailed multi-element SVG designs
- **7 Leaf Types**: Bamboo, maple (green and red), fern, broad leaves, pine needles, and willow branches
- **Interactive Drag & Drop**: Smooth, natural drag-and-drop with physics-based animations
- **Dynamic Scaling**: Scroll over elements to adjust their size
- **Rotation Support**: Transform elements for perfect composition
- **Pot Switching**: Change pots while preserving your entire arrangement
- **High-Quality Export**: Save your creation as a high-resolution PNG image
- **Japanese Zen Aesthetic**: Carefully designed color palette, typography, and UI inspired by Japanese design principles

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling with custom Japanese theme
- **Zustand** - Lightweight state management
- **Framer Motion** - Smooth animations and transitions
- **html2canvas** - High-quality canvas export
- **Matter.js** - Physics engine (planned integration)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ikebana-studio.git
cd ikebana-studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Usage Guide

### Creating Your Arrangement

1. **Select a Pot**: Click on any pot in the left sidebar to choose your vessel
2. **Add Flowers**: Click on flowers in the sidebar to place them in the arrangement
3. **Add Leaves**: Click on leaves/foliage to add greenery to your composition
4. **Rearrange**: Drag placed elements to move them around
5. **Scale**: Scroll your mouse wheel over an element to make it larger or smaller
6. **Delete**:
   - Select an element and press Delete/Backspace
   - Or drag it to the trash zone in the bottom-right corner
7. **Switch Pots**: Click a different pot - your arrangement will be preserved!
8. **Save**: Click the "Save Arrangement" button to export as PNG

### Keyboard Shortcuts

- `Delete` / `Backspace` - Remove selected element
- Mouse scroll - Scale selected element

## Project Structure

```
ikebana-studio/
├── src/
│   ├── components/
│   │   ├── Pot/              # 5 pot variants (multi-element SVG)
│   │   ├── Flower/           # 8 flower types with petals, stems, leaves
│   │   ├── Leaf/             # 6 leaf/foliage types
│   │   ├── Sidebar/          # Selection panel
│   │   ├── Canvas/           # Main arrangement area
│   │   ├── TrashZone/        # Delete functionality
│   │   └── SaveButton/       # PNG export
│   ├── contexts/
│   │   └── useArrangementStore.ts  # Zustand state management
│   ├── types/                # TypeScript definitions
│   ├── constants/            # Pots, flowers, leaves data
│   ├── styles/               # Global CSS
│   └── App.tsx               # Main application
├── docs/                     # Documentation
├── public/                   # Static assets
└── package.json
```

## Design Philosophy

This application embodies the Japanese aesthetic principles of:

- **Simplicity (簡素, Kanso)**: Clean, uncluttered interface
- **Asymmetry (非対称, Hishou)**: Natural, organic arrangements
- **Natural Beauty (自然美, Shizenbou)**: Realistic flower and leaf components
- **Subtle Profundity (幽玄, Yugen)**: Calming color palette and smooth interactions

## Color Palette

### Primary Colors
- Sand: `#F5F1E8` - Warm, neutral background
- Bamboo: `#8B9D83` - Muted green
- Clay: `#C9ADA7` - Soft terracotta
- Charcoal: `#4A4A48` - Deep gray

### Accent Colors
- Sakura: `#FADADD` - Cherry blossom pink
- Matcha: `#9BB89F` - Soft green tea
- Indigo: `#4A5D7C` - Japanese indigo

## Development

### Adding New Flowers

1. Create a new component in `src/components/Flower/`
2. Build the flower using SVG elements (petals, stem, leaves, center)
3. Add the flower type to `src/types/flower.ts`
4. Add flower data to `src/constants/flowers.ts`
5. Import and add to switch case in `Flower.tsx`

### Adding New Pots

1. Create a new component in `src/components/Pot/`
2. Design using SVG with multiple elements (rim, body, base, shadow)
3. Add pot type to `src/types/pot.ts`
4. Add pot data to `src/constants/pots.ts`
5. Import and add to switch case in `Pot.tsx`

## Future Enhancements

- [ ] Full Matter.js physics integration with gravity simulation
- [ ] Stem bending based on flower weight
- [ ] Rotation controls (Alt + drag)
- [ ] Undo/Redo functionality
- [ ] Local storage for saving arrangements
- [ ] Share arrangements via URL
- [ ] Pre-made arrangement templates
- [ ] Seasonal flower collections
- [ ] Tutorial mode for learning ikebana principles
- [ ] Mobile touch support optimization
- [ ] Multiple arrangement styles (moribana, nageire, shoka)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the ancient Japanese art of ikebana
- Designed with principles from "The Beauty of Japanese Design"
- Font: Noto Serif JP and Inter

---

**Enjoy creating beautiful digital ikebana arrangements!** 🌸

For questions or feedback, please open an issue on GitHub.
