import React, { useState } from 'react';
import html2canvas from 'html2canvas';

export const SaveButton: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const canvas = document.getElementById('arrangement-canvas');
      if (!canvas) return;

      const canvasImage = await html2canvas(canvas, {
        backgroundColor: null,
        scale: 2, // Higher resolution
        logging: false,
      });

      // Convert to blob and download
      canvasImage.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        link.download = `ikebana-arrangement-${timestamp}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      });
    } catch (error) {
      console.error('Error saving arrangement:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleSave}
        disabled={isSaving}
        className={`
          px-6 py-2.5 rounded-zen font-serif text-base
          transition-all duration-300 shadow-zen
          ${isSaving ? 'bg-neutral-mediumGray cursor-wait' : 'bg-accent-indigo text-white hover:bg-accent-indigo/90 hover:shadow-zen-lg'}
          disabled:opacity-50
        `}
      >
        {isSaving ? 'Saving...' : 'Save'}
      </button>

      {/* Success notification */}
      {showSuccess && (
        <div className="absolute top-full mt-2 right-0 bg-green-500 text-white px-4 py-2 rounded-zen shadow-zen-lg animate-fade-in whitespace-nowrap">
          Saved successfully!
        </div>
      )}
    </div>
  );
};
