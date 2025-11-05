# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

- **Development**: `npm run dev` - Start Vite dev server at http://localhost:5173
- **Build**: `npm run build` - Compile TypeScript and bundle with Vite
- **Lint**: `npm run lint` - Check code style with ESLint (max 0 warnings)
- **Preview**: `npm run preview` - Preview production build locally

## Architecture Overview

### Core Technology Stack
- **React 18** + **TypeScript** - Component-based UI with type safety
- **Vite** - Fast build tool and dev server
- **Zustand** - Lightweight state management (useArrangementStore)
- **Tailwind CSS** - Utility-first styling with custom Japanese theme
- **Framer Motion** - Animations and transitions
- **Matter.js** - Physics engine (currently imported but not deeply integrated)
- **html2canvas** - Canvas/DOM export to PNG

### State Management Architecture

**useArrangementStore** (`src/contexts/useArrangementStore.ts`) is the central store using Zustand:
- **selectedPotId**: Current pot being used (default: 'shallow-bowl-1')
- **placedElements**: Array of flowers/leaves on canvas with position, rotation, scale, z-index
- **selectedElementId**: Currently selected element for editing
- **dragState**: Track dragging interactions
- **nextZIndex**: Auto-increment z-index for proper layering

Key types:
- **PlacedElement**: `{ id, type ('flower'|'leaf'), elementType, x, y, rotation, scale, zIndex, branchSize?, flowerSize?, leafSize? }`
- **Pot**: `{ id, name, description, width, height, color }`
- **Flower/Leaf**: IDs map to React components (e.g., 'cherry-blossom' → CherryBlossom.tsx)

### Component Structure

```
src/components/
├── Pot/           - 5 pot variants (ShallowBowl, TallVase, RectangularContainer, AsymmetricVessel, RusticPot)
├── Flower/        - 12 flower types rendered as SVG (each has petals, stem, leaves, center)
├── Leaf/          - 6 leaf/foliage types (BambooLeaves, MapleLeaf, FernFrond, BroadLeaf, PineNeedles, WillowBranch)
├── Canvas/        - Main arrangement area (Canvas.tsx + PlacedElementComponent.tsx)
├── Sidebar/       - Selection UI (Sidebar.tsx + ItemCard.tsx)
├── PropertyPanel/ - Element size/property editor (shown when element selected)
├── TrashZone/     - Delete zone (bottom-right)
└── SaveButton/    - PNG export functionality
```

### Data Structure

- **Constants** (`src/constants/`):
  - `pots.ts`: Array of 5 pot definitions with SVG dimensions
  - `flowers.ts`: 12 flower type definitions
  - `leaves.ts`: 6 leaf type definitions
  - `theme.ts`: Color palette (sand, bamboo, clay, charcoal, sakura, matcha, indigo)

- **Types** (`src/types/`):
  - `arrangement.ts`: PlacedElement, ArrangementState interfaces
  - `flower.ts`: FlowerType, LeafType union types
  - `pot.ts`: PotType union type

### Key Interaction Flows

1. **Adding Elements**: Click flower/leaf in Sidebar → `addElement()` in store → PlacedElementComponent renders at center
2. **Dragging**: Mouse events on PlacedElementComponent → `updateElement()` with new x/y
3. **Scaling**: Scroll wheel or +/- keys → `updateElement()` with new scale value
4. **Pot Switching**: Click pot in Sidebar → `setSelectedPotId()` → Canvas re-renders (elements preserved)
5. **Selection**: Click element → `setSelectedElementId()` → PropertyPanel shows sizing controls
6. **Export**: SaveButton → html2canvas → PNG download

### Layout Structure

- Fixed 16px header bar (title + SaveButton)
- Left sidebar (288px wide, z50) - pot/flower/leaf selection
- Main canvas (flex-1, centered pot + elements)
- Bottom-right trash zone (floating)
- PropertyPanel (right side when element selected)

## Styling & Theme

- **Tailwind Config**: Custom colors and 'zen' radius (8px) for rounded corners
- **Japanese Aesthetic**: Sand/charcoal foreground, soft accent colors (sakura pink, matcha green, indigo)
- **Typography**: Serif fonts for headings (Noto Serif JP), sans-serif for UI
- **z-index Strategy**: Pot is z-0, placed elements use auto-incrementing zIndex, UI overlays at z-40+

## Adding New Content

### Add New Flower Type
1. Create component at `src/components/Flower/NewFlower.tsx` (export SVG-based render)
2. Add type to `src/types/flower.ts` (update FlowerType union)
3. Add data object to `src/constants/flowers.ts`
4. Import and add case in `src/components/Flower/Flower.tsx` render switch

### Add New Pot
1. Create component at `src/components/Pot/NewPot.tsx`
2. Add type to `src/types/pot.ts`
3. Add data object to `src/constants/pots.ts`
4. Import and add case in `src/components/Pot/Pot.tsx` render switch

### Add New Leaf Type
Similar to flowers - create component, add type, add constants, add to LeafComponent switch.

## Development Tips

- **SVG Components**: All flowers/leaves/pots are SVG-based React components - use viewBox and relative positioning for responsiveness
- **Scale Calculations**: Use `scale` prop on PlacedElement (1.0 = normal) when rendering components
- **Z-Index Layering**: PlacedElements are sorted by zIndex before rendering to maintain proper depth ordering
- **Color Access**: Import from `src/constants/theme.ts` for consistent Japanese palette colors
- **TypeScript**: All components should be typed as `React.FC` with proper prop interfaces
- **Commits**: Write short and concise commit messages per project guidelines

## Known Limitations

- Matter.js physics integration is planned but not fully utilized
- Mobile touch support is not optimized
- Local storage for saving arrangements is not yet implemented
- Undo/Redo functionality is not available