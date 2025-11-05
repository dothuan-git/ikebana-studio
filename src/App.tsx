import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Canvas } from './components/Canvas';
import { TrashZone } from './components/TrashZone';
import { SaveButton } from './components/SaveButton';

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Title Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-primary-sand/95 backdrop-blur-sm border-b border-primary-clay z-50 flex items-center justify-between px-6 shadow-zen">
        <div className="flex items-center">
          <h1 className="text-3xl font-serif text-primary-charcoal">
            Ikebana Studio
          </h1>
          <p className="ml-4 text-sm text-neutral-darkGray">
            Digital Flower Arrangement
          </p>
        </div>
        <SaveButton />
      </div>

      {/* Main Content */}
      <div>
        <Sidebar />
        <Canvas />
      </div>

      {/* Floating UI Elements */}
      <TrashZone />

      {/* Instructions Overlay (can be dismissed) */}
      <Instructions />
    </div>
  );
}

const Instructions: React.FC = () => {
  const [show, setShow] = React.useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-24 right-8 max-w-sm bg-white/95 backdrop-blur-sm rounded-zen shadow-zen-lg p-4 z-40 animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif text-lg text-primary-charcoal">Quick Guide</h3>
        <button
          onClick={() => setShow(false)}
          className="text-neutral-darkGray hover:text-primary-charcoal"
        >
          ✕
        </button>
      </div>
      <ul className="text-sm text-neutral-darkGray space-y-1">
        <li>• Select pot from sidebar to change vessel</li>
        <li>• Click flowers/leaves to add to arrangement</li>
        <li>• Drag elements to rearrange</li>
        <li>• Scroll to scale / +/- keys to resize</li>
        <li>• [ ] keys to rotate selected element</li>
        <li>• Delete key or drag to trash to remove</li>
        <li>• Click "Save" to export as PNG</li>
      </ul>
    </div>
  );
};

export default App;
