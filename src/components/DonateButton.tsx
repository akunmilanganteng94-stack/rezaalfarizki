import React, { useState, useRef } from 'react';
import { Heart, Sparkles, QrCode } from 'lucide-react';

interface DonateButtonProps {
  onClick: () => void;
}

export const DonateButton: React.FC<DonateButtonProps> = ({ onClick }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rippleId = Date.now();

      setRipples((prev) => [...prev, { x, y, id: rippleId }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 700);
    }
    onClick();
  };

  return (
    <div className="w-full flex flex-col items-center my-3 relative select-none">
      {/* Outer ambient pulsing glow */}
      <div className="absolute w-[92%] sm:w-[94%] max-w-[600px] h-[64px] rounded-[22px] bg-gradient-to-r from-[#006EFF] via-[#00A8FF] to-[#006EFF] opacity-40 blur-xl animate-soft-pulse pointer-events-none -z-10" />

      <button
        id="donate-rezza-button"
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        className="group relative w-[92%] sm:w-[94%] max-w-[600px] h-[62px] sm:h-[66px] rounded-[20px] flex items-center justify-between px-5 overflow-hidden transition-all duration-300 transform active:scale-[0.97] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00A8FF]"
        style={{
          background: 'linear-gradient(135deg, #0056CC 0%, #006EFF 45%, #00A8FF 100%)',
          border: '1px solid rgba(255, 255, 255, 0.45)',
          boxShadow: '0 12px 30px -4px rgba(0, 110, 255, 0.55), inset 0 2px 2px rgba(255, 255, 255, 0.4)',
        }}
      >
        {/* Animated continuous shine sweep */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine pointer-events-none" />

        {/* Dynamic click ripples */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/40 pointer-events-none animate-ping"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
              width: 50,
              height: 50,
            }}
          />
        ))}

        {/* Left Icon with glowing container */}
        <div className="w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0 bg-white/20 border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300">
          <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center justify-center flex-1 px-3">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-black text-base sm:text-lg text-white tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Donate Rezza
            </span>
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          </div>
          <span className="text-[11px] sm:text-xs text-white/85 font-medium tracking-wide">
            Support Karya & Konten via QRIS
          </span>
        </div>

        {/* Right QR badge indicator */}
        <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 bg-black/20 border border-white/20 text-white/90 group-hover:bg-white/20 transition-all duration-300">
          <QrCode className="w-5 h-5" />
        </div>
      </button>
    </div>
  );
};
