import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

interface LinkButtonProps {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  onButtonClick?: () => void;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  id,
  title,
  subtitle,
  url,
  icon,
  iconBgColor = 'bg-white/10',
  onButtonClick,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <a
      id={id}
      ref={buttonRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative w-[92%] sm:w-[94%] max-w-[600px] h-[60px] sm:h-[64px] rounded-[20px] mx-auto flex items-center justify-between px-4 sm:px-5 select-none overflow-hidden transition-all duration-300 transform active:scale-[0.97] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
      }}
    >
      {/* Outer ambient glow on hover */}
      <div className="absolute -inset-0.5 rounded-[22px] bg-gradient-to-r from-[#006EFF] to-[#00A8FF] opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-md pointer-events-none -z-10" />

      {/* Internal interactive ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-[#00A8FF]/30 pointer-events-none animate-ping"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
        />
      ))}

      {/* Hover Glass Light Sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -skew-x-12" />

      {/* Left Icon with glass bubble */}
      <div
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] flex items-center justify-center shrink-0 border border-white/20 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#00A8FF]/50 group-hover:shadow-[0_0_15px_rgba(0,168,255,0.4)] ${iconBgColor}`}
      >
        <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {icon}
        </div>
      </div>

      {/* Center Text */}
      <div className="flex-1 text-center px-3 min-w-0">
        <span className="block font-sans font-bold text-sm sm:text-base text-white tracking-wide truncate group-hover:text-white transition-colors duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {title}
        </span>
        {subtitle && (
          <span className="block text-[11px] text-slate-400 font-medium truncate mt-0.5 opacity-80">
            {subtitle}
          </span>
        )}
      </div>

      {/* Right Arrow / Chevron */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-slate-400 group-hover:text-[#00A8FF] group-hover:translate-x-1 transition-all duration-300 bg-white/[0.04] border border-white/10 group-hover:border-[#00A8FF]/40">
        <ChevronRight className="w-4 h-4" />
      </div>
    </a>
  );
};
