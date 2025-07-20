'use client';

import { useEffect, useState } from 'react';

export default function TechFloatingElements() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasMounted, setHasMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setHasMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasMounted) return null; // Prevent mismatch

  const getOffset = (factor: number) => {
    const x = (mousePos.x - window.innerWidth / 2) * factor;
    const y = (mousePos.y - window.innerHeight / 2) * factor;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Circle */}
      <div
        className="absolute w-16 h-16 bg-primary/20 rounded-full blur-md"
        style={{
          top: '20%',
          left: '10%',
          ...getOffset(0.02),
        }}
      />
      {/* Square */}
      <div
        className="absolute w-20 h-20 bg-purple-400/20 rounded-lg blur-md"
        style={{
          bottom: '15%',
          right: '12%',
          ...getOffset(0.03),
        }}
      />
      {/* Dot */}
      <div
        className="absolute w-12 h-12 bg-blue-400/20 rounded-full blur-md"
        style={{
          top: '45%',
          right: '35%',
          ...getOffset(0.015),
        }}
      />
    </div>
  );
}
