import React, { useState, useEffect } from 'react';

const MESSAGES = [
  'FREE SHIPPING ON ORDERS OVER ₹999 · EASY RETURNS',
  'SCIENCE × SIMPLICITY · EVIDENCE-INFORMED FORMULATIONS',
  'BUILT FOR THE EVERYDAY 3-MINUTE ROUTINE'
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="Announcement" className="bg-[#20231F] text-[#F8F5EF] text-[11px] font-mono-spec py-2 px-4 text-center border-b border-[#343A33] transition-all duration-500 tracking-wider">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4B5848]" />
        <span className="font-medium">{MESSAGES[index]}</span>
      </div>
    </aside>
  );
};
