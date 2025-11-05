# Claude Code Prompt: Ikebana Digital Arrangement Application

## Project Overview
Build a professional, interactive web application for creating digital ikebana (Japanese flower arrangements). The app should provide a zen-like, relaxing experience with realistic physics and a clean, maintainable codebase.

## Initial Setup
**IMPORTANT**: Before starting any work, activate the Python virtual environment:
```bash
source venv/bin/activate
```

## Core Requirements

### 1. Application Architecture
- **Framework**: Use React with TypeScript for type safety and maintainability
- **Styling**: Tailwind CSS for utility-first styling with custom Japanese-inspired theme
- **Physics Engine**: Integrate Matter.js or similar for realistic drag-and-drop with gravity simulation
- **State Management**: React Context API or Zustand for clean state management
- **File Structure**: Organize as a production-ready application:
  ```
  src/
  ├── components/         # Reusable UI components
  │   ├── Pot/           # Pot component with variants
  │   ├── Flower/        # Flower components (petals, stems, leaves)
  │   ├── Sidebar/       # Selection sidebar
  │   ├── Canvas/        # Main arrangement area
  │   ├── TrashZone/     # Delete area
  │   └── SaveButton/    # Export functionality
  ├── hooks/             # Custom React hooks
  ├── contexts/          # State management
  ├── utils/             # Helper functions
  ├── types/             # TypeScript definitions
  ├── assets/            # Images, SVGs
  ├── styles/            # Global styles, theme
  └── constants/         # Configuration constants
  ```

### 2. User Interface Layout

#### Left Sidebar (Selection Panel)
- **Width**: ~250-300px, fixed position
- **Sections**: 
  - Pots section (collapsible)
  - Flowers section (collapsible)
  - Leaves/Foliage section (collapsible)
- **Interaction**: Click to select items, visual indication of selected item
- **Scrollable**: Handle overflow gracefully

#### Main Canvas (Arrangement Area)
- **Center stage**: Display selected pot as the focal point
- **Drag-drop zone**: Accept flowers/leaves dropped from sidebar or canvas
- **Responsive**: Adapt to different screen sizes while maintaining aspect ratio
- **Background**: Subtle Japanese-inspired pattern or gradient (washi paper texture, soft beige/cream tones)

#### Top Bar
- **Save Button**: Top-right corner, exports canvas as high-quality PNG/JPG
- **App Title**: Elegant typography with Japanese aesthetic
- **Optional**: Undo/Redo buttons

#### Bottom Right
- **Trash Zone**: Visible trash can icon (subtle when empty, highlighted on hover with flower)
- **Drag-to-delete**: Flowers dragged here are removed with smooth fade-out animation

### 3. Design System (Japanese Zen Aesthetic)

#### Color Palette
```javascript
const theme = {
  primary: {
    sand: '#F5F1E8',        // Warm sand
    bamboo: '#8B9D83',      // Muted green
    clay: '#C9ADA7',        // Soft terracotta
    charcoal: '#4A4A48',    // Deep gray
  },
  accent: {
    sakura: '#FADADD',      // Cherry blossom pink
    matcha: '#9BB89F',      // Soft green tea
    indigo: '#4A5D7C',      // Japanese indigo
  },
  neutral: {
    white: '#FAFAFA',
    lightGray: '#E8E8E8',
    mediumGray: '#B8B8B8',
    darkGray: '#5A5A5A',
  }
}
```

#### Typography
- **Headings**: Noto Serif JP or similar elegant serif font
- **Body**: Inter or Noto Sans JP for readability
- **Sizes**: Use harmonious scale (1.125 ratio)

#### Visual Elements
- Rounded corners (border-radius: 8-12px)
- Subtle shadows (soft, diffused)
- Smooth transitions (200-300ms ease)
- Minimalist icons (outlined style)

### 4. Component Design (Multi-Element, Not Icons)

#### Pots
Create pots using SVG or composed div elements:
- **Parts**: Rim, body, base, shadow
- **Variants**: 
  - Ceramic bowl (shallow, wide)
  - Tall vase (cylindrical)
  - Traditional moribana container (rectangular)
  - Asymmetric vessel (organic shape)
- **Properties**: Different colors, textures, sizes
- **Responsive**: Scale proportionally when canvas resizes

#### Flowers
Build flowers from multiple SVG/CSS elements:
- **Components**: 
  - Individual petals (5-20 depending on flower type)
  - Center/pistil
  - Stem (with segments for bending)
  - Leaves (attached to stem)
- **Varieties**:
  - Cherry blossom (sakura) - 5 petals, pink/white
  - Chrysanthemum - many layered petals, various colors
  - Plum blossom - 5 rounded petals
  - Iris - 3 upright petals, 3 drooping
  - Bamboo - segmented stalks with leaves
- **States**: Normal, dragging, placed, hovered
- **Each flower should have**: Unique ID, position, rotation, scale properties

#### Leaves & Foliage
- Various shapes: elongated, rounded, serrated
- Different sizes: small, medium, large
- Colors: Multiple shades of green, autumn colors
- Can be placed independently or attached to flowers

### 5. Physics & Animation (Realistic Interactions)

#### Drag & Drop Behavior
- **Picking up**: Smooth lift animation (slight scale up, shadow increases)
- **Dragging**: Element follows cursor with slight lag (spring physics)
- **During drag**: 
  - Show preview/ghost at original position
  - Element rotates slightly based on drag direction
  - Apply subtle wobble/sway animation
- **Dropping**: 
  - Falls with gravity if dropped mid-air above pot
  - Settles into pot with bounce effect
  - Stems bend naturally based on placement angle
  - Collision detection with pot boundaries

#### Gravity Simulation
- Use physics engine (Matter.js recommended):
  - Flowers have mass and respond to gravity
  - Stems bend realistically under petal weight
  - Elements settle naturally when dropped
  - Prevent flowers from falling through pot bottom
- Configurable gravity strength for artistic flexibility

#### Arrangement Interactions
- **Rotation**: Alt/Option + drag to rotate flowers
- **Scaling**: Scroll while hovering to adjust size
- **Layering**: Automatic z-index based on placement order (or manual controls)
- **Snapping**: Optional grid or angle snapping for precise placement

### 6. Core Features

#### Pot Selection & Switching
- Click any pot in sidebar to select
- Smooth transition when switching pots:
  - Fade out current pot
  - Fade in new pot
  - **Preserve all placed flowers**:
    - Maintain their positions relative to pot center
    - Keep rotation, scale, and layering
    - Adjust positions if new pot has different dimensions
- Visual indicator shows currently selected pot

#### Flower Management
- **Adding**: Click flower in sidebar, then click canvas to place
- **Rearranging**: Drag already-placed flowers to new positions
- **Removing**: 
  - Drag to trash zone (bottom-right)
  - Trash can highlights when flower hovers over it
  - Fade-out animation when released over trash
  - OR: Select flower and press Delete key
- **Duplicating**: Ctrl/Cmd + click on placed flower to duplicate
- **Selection**: Click on flower to select (show selection indicator/handles)

#### Export Functionality
- **Save Button**: Prominent in top-right corner
- **Export Process**:
  - Capture entire canvas including pot and all flowers
  - Generate high-resolution image (PNG, transparent background optional)
  - Download with timestamp: `ikebana-arrangement-YYYYMMDD-HHMMSS.png`
  - Show success notification
- **Alternative**: "Share" button to copy image to clipboard

### 7. Content Library

#### Initial Asset Collection
**Pots (minimum 5 varieties)**:
1. Shallow ceramic bowl (beige/cream)
2. Tall cylindrical vase (matte white)
3. Traditional rectangular container (dark brown)
4. Modern asymmetric vessel (charcoal gray)
5. Rustic clay pot (terracotta)

**Flowers (minimum 8 varieties)**:
1. Cherry blossom - pink, 5 petals
2. White chrysanthemum - many layers
3. Purple iris - 6 petals
4. Red plum blossom - 5 rounded petals
5. Yellow forsythia - 4 petals
6. Orange lily - 6 elongated petals
7. Pink peony - many ruffled petals
8. White jasmine - small, 5 petals

**Leaves/Foliage (minimum 6 types)**:
1. Bamboo leaves - long, narrow
2. Maple leaves - 5-pointed, optional red
3. Fern fronds - delicate, multiple segments
4. Broad leaves - simple, oval
5. Pine needles - clusters
6. Willow branches - drooping, thin leaves

### 8. Project Structure & Best Practices

#### Code Organization
```
ikebana-app/
├── public/
│   ├── index.html
│   └── assets/
│       └── textures/        # Background textures
├── src/
│   ├── components/
│   │   ├── Pot/
│   │   │   ├── Pot.tsx
│   │   │   ├── PotVariant.tsx
│   │   │   └── Pot.module.css
│   │   ├── Flower/
│   │   │   ├── Flower.tsx
│   │   │   ├── Petal.tsx
│   │   │   ├── Stem.tsx
│   │   │   └── Flower.module.css
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── ItemCard.tsx
│   │   │   └── Sidebar.module.css
│   │   ├── Canvas/
│   │   │   ├── Canvas.tsx
│   │   │   ├── ArrangementArea.tsx
│   │   │   └── Canvas.module.css
│   │   ├── TrashZone/
│   │   │   └── TrashZone.tsx
│   │   ├── SaveButton/
│   │   │   └── SaveButton.tsx
│   │   └── common/
│   │       ├── Button.tsx
│   │       └── Icon.tsx
│   ├── hooks/
│   │   ├── useDragAndDrop.ts
│   │   ├── usePhysics.ts
│   │   ├── useExport.ts
│   │   └── useArrangement.ts
│   ├── contexts/
│   │   ├── ArrangementContext.tsx
│   │   └── ThemeContext.tsx
│   ├── utils/
│   │   ├── physics.ts
│   │   ├── export.ts
│   │   └── geometry.ts
│   ├── types/
│   │   ├── pot.ts
│   │   ├── flower.ts
│   │   └── arrangement.ts
│   ├── constants/
│   │   ├── pots.ts
│   │   ├── flowers.ts
│   │   ├── leaves.ts
│   │   └── theme.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── theme.css
│   ├── App.tsx
│   ├── index.tsx
│   └── vite-env.d.ts
├── docs/
│   ├── USER_GUIDE.md          # End-user instructions
│   ├── DEVELOPER_GUIDE.md     # Development documentation
│   ├── ARCHITECTURE.md        # System architecture
│   └── API.md                 # Component API reference
├── tests/
│   ├── components/
│   └── utils/
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

#### Development Principles
- **Component Isolation**: Each component is self-contained and reusable
- **Type Safety**: Comprehensive TypeScript types for all data structures
- **Performance**: Use React.memo, useMemo, useCallback for optimization
- **Accessibility**: ARIA labels, keyboard navigation support
- **Responsive**: Mobile-friendly (consider touch interactions)
- **Testing**: Unit tests for utilities, integration tests for key flows
- **Documentation**: JSDoc comments for complex functions

### 9. Documentation Requirements

#### README.md
Should include:
- Project description and purpose
- Screenshot/demo GIF of the application
- Features list
- Tech stack
- Quick start guide (installation, running locally)
- Project structure overview
- Contributing guidelines
- License

#### docs/USER_GUIDE.md
End-user instructions:
- How to select a pot
- How to add flowers and leaves
- Arranging elements (drag, rotate, resize)
- Removing elements
- Changing pots without losing arrangement
- Saving and exporting your creation
- Tips for creating beautiful ikebana arrangements
- Keyboard shortcuts
- Troubleshooting common issues

#### docs/DEVELOPER_GUIDE.md
Development documentation:
- Setting up development environment
- Project structure detailed explanation
- Component architecture
- State management strategy
- Physics engine integration
- Adding new pots/flowers/leaves
- Styling conventions
- Testing strategy
- Build and deployment process
- Performance optimization tips

#### docs/ARCHITECTURE.md
System design:
- High-level architecture diagram
- Data flow explanation
- Component hierarchy
- State management design
- Physics simulation approach
- Export mechanism details

### 10. Technical Specifications

#### Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "matter-js": "^0.19.0",        // Physics engine
    "html2canvas": "^1.4.1",        // Canvas export
    "zustand": "^4.4.0",            // State management
    "framer-motion": "^10.16.0"     // Smooth animations
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vite": "^4.4.0",
    "@types/react": "^18.2.0",
    "@types/matter-js": "^0.19.0",
    "tailwindcss": "^3.3.0",
    "eslint": "^8.50.0",
    "prettier": "^3.0.0"
  }
}
```

#### Performance Targets
- Initial load: < 2 seconds
- Drag-drop latency: < 16ms (60fps)
- Export generation: < 3 seconds for 1920x1080 image
- Smooth animations at 60fps
- Memory efficient (< 100MB for typical arrangement)

#### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 11. Implementation Steps

#### Phase 1: Foundation
1. Set up React + TypeScript + Vite project
2. Configure Tailwind CSS with custom theme
3. Create basic layout structure (sidebar, canvas, top bar)
4. Implement routing/navigation (if needed)
5. Set up state management

#### Phase 2: Core Components
1. Build pot components with variants
2. Create flower components (petals, stems, leaves)
3. Implement sidebar with item selection
4. Create canvas/arrangement area

#### Phase 3: Interactions
1. Integrate physics engine (Matter.js)
2. Implement drag-and-drop functionality
3. Add gravity and realistic settling animations
4. Create trash zone with delete functionality
5. Add rotation and scaling controls

#### Phase 4: Features
1. Pot switching while preserving arrangement
2. Export/save functionality (PNG generation)
3. Keyboard shortcuts
4. Undo/redo functionality (optional but recommended)

#### Phase 5: Polish
1. Refine animations and transitions
2. Add sound effects (optional, subtle)
3. Improve mobile responsiveness
4. Performance optimization
5. Accessibility improvements

#### Phase 6: Documentation
1. Write comprehensive README.md
2. Create user guide in docs/USER_GUIDE.md
3. Write developer documentation in docs/DEVELOPER_GUIDE.md
4. Add architecture documentation in docs/ARCHITECTURE.md
5. Include code comments and JSDoc

### 12. Testing Strategy

- **Unit Tests**: Test utility functions, physics calculations, export logic
- **Component Tests**: Test individual components in isolation
- **Integration Tests**: Test complete user flows (add flower, arrange, export)
- **Visual Regression**: Ensure UI consistency across changes
- **Performance Tests**: Validate smooth 60fps animations

### 13. Future Enhancements (Optional, for Consideration)

- Save/load arrangements from local storage or database
- Share arrangements via URL
- Pre-made arrangement templates
- Seasonal flower collections
- Tutorial/guided mode for learning ikebana principles
- Different arrangement styles (moribana, nageire, shoka)
- Background customization options
- Print-ready export formats

## Success Criteria

The application is considered complete when:
- ✅ All core features are implemented and working smoothly
- ✅ Physics-based drag-and-drop feels natural and realistic
- ✅ UI provides a calming, zen-like experience with Japanese aesthetic
- ✅ Code is well-organized, typed, and maintainable
- ✅ Documentation is comprehensive for both users and developers
- ✅ Application is responsive and performs well
- ✅ Export functionality generates high-quality images
- ✅ At least 5 pots, 8 flowers, and 6 leaf types are available

## Final Notes

This is a creative application that celebrates the art of ikebana. The user experience should feel **meditative, elegant, and joyful**. Every interaction should reinforce the Japanese aesthetic principles of simplicity, asymmetry, and natural beauty.

Remember: This app should be built as a **production-ready application**, not a prototype. Code quality, organization, and documentation are just as important as functionality.

Good luck creating something beautiful! 🌸
