import React from 'react';

export const Background3DText: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      style={{ perspective: '1200px' }}
      aria-hidden="true"
    >
      {/* Subtle deep nebula glows */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-gradient-to-b from-[#006EFF]/20 via-[#00A8FF]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] -left-[10%] w-[450px] h-[450px] rounded-full bg-[#006EFF]/12 blur-[100px] pointer-events-none animate-soft-pulse" />
      <div className="absolute top-[65%] -right-[15%] w-[500px] h-[500px] rounded-full bg-[#00A8FF]/10 blur-[130px] pointer-events-none animate-soft-pulse" />

      {/* Layer 1: Massive Deep Background 3D Text REZZA */}
      <div
        className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-drift-1 flex flex-col items-center justify-center pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span
          className="font-display font-black tracking-widest text-3d-deep text-[22vw] sm:text-[18vw] md:text-[15vw] leading-none uppercase select-none opacity-40 blur-[1.5px]"
          style={{ letterSpacing: '0.18em' }}
        >
          REZZA
        </span>
      </div>

      {/* Layer 2: Mid-Depth 3D Text REZZA (slight offset, parallax & rotation) */}
      <div
        className="absolute top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 animate-drift-2 flex flex-col items-center justify-center pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span
          className="font-display font-extrabold tracking-widest text-3d-front text-[16vw] sm:text-[13vw] md:text-[11vw] leading-none uppercase select-none opacity-25 blur-[1px]"
          style={{ letterSpacing: '0.22em' }}
        >
          REZZA
        </span>
      </div>

      {/* Layer 3: Lower subtle ghost imprint */}
      <div
        className="absolute top-[82%] left-[52%] -translate-x-1/2 -translate-y-1/2 animate-drift-1 flex flex-col items-center justify-center pointer-events-none"
        style={{ transformStyle: 'preserve-3d', animationDirection: 'reverse', animationDuration: '34s' }}
      >
        <span
          className="font-display font-black tracking-widest text-3d-deep text-[18vw] sm:text-[14vw] md:text-[12vw] leading-none uppercase select-none opacity-20 blur-[2px]"
          style={{ letterSpacing: '0.25em' }}
        >
          REZZA
        </span>
      </div>

      {/* Abstract 3D geometric shapes in background */}
      {/* Floating 3D Cube / Diamond 1 (Top Right) */}
      <div
        className="absolute top-[12%] right-[8%] w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border border-[#00A8FF]/20 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-[2px] animate-float-slow opacity-40 shadow-[0_0_30px_rgba(0,110,255,0.15)]"
        style={{ transform: 'rotateX(45deg) rotateY(25deg) rotateZ(15deg)' }}
      />

      {/* Floating 3D Rounded Ring 2 (Mid Left) */}
      <div
        className="absolute top-[48%] left-[5%] w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-[#006EFF]/25 animate-spin-slow opacity-35"
        style={{ transform: 'rotateX(60deg) rotateZ(20deg)' }}
      />

      {/* Floating 3D Glass Pill 3 (Bottom Left) */}
      <div
        className="absolute bottom-[18%] left-[10%] w-20 h-10 sm:w-28 sm:h-14 rounded-full border border-white/10 bg-[#006EFF]/[0.03] animate-float-reverse opacity-30 shadow-[0_0_25px_rgba(0,168,255,0.1)]"
        style={{ transform: 'rotateZ(-25deg) rotateY(30deg)' }}
      />

      {/* Floating 3D Glass Shape 4 (Bottom Right) */}
      <div
        className="absolute bottom-[28%] right-[6%] w-16 h-16 sm:w-24 sm:h-24 rounded-2xl border border-[#00A8FF]/15 bg-gradient-to-tr from-[#006EFF]/10 to-transparent animate-float-slow opacity-35"
        style={{ transform: 'rotate(35deg) skewX(10deg)' }}
      />
    </div>
  );
};
