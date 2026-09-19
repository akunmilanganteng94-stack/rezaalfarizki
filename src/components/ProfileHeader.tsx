import React, { useState, useEffect } from 'react';
import { VerifiedBadgeIcon } from './Icons';

export const ProfileHeader: React.FC = () => {
  const targetText = 'rezaalfarizki14';
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isWaiting) {
      // Pause at full word or after empty
      const waitDuration = isDeleting ? 600 : 1800;
      timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(!isDeleting);
      }, waitDuration);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < targetText.length) {
        timer = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        }, 110 + Math.random() * 40); // Natural human typing cadence
      } else {
        setIsWaiting(true);
      }
    } else {
      // Backspacing
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length - 1));
        }, 60);
      } else {
        setIsWaiting(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isWaiting]);

  return (
    <div className="flex flex-col items-center text-center pt-8 pb-4 relative z-10 select-none">
      {/* Profile Photo Wrapper with 3D Floating & Multi-layer Glowing Ring */}
      <div className="relative group mb-5">
        {/* Outer glowing ambient background aura */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#006EFF] via-[#00A8FF] to-[#006EFF] opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-700 animate-soft-pulse" />

        {/* Outer Rotating Conic-Gradient Ring */}
        <div
          className="absolute -inset-1.5 rounded-full p-[2px] animate-spin-slow"
          style={{
            background: 'conic-gradient(from 0deg, #006EFF, #00A8FF, rgba(255,255,255,0.7), #006EFF)',
            boxShadow: '0 0 25px rgba(0, 110, 255, 0.4)',
          }}
        >
          <div className="w-full h-full rounded-full bg-[#050B18]" />
        </div>

        {/* Counter-rotating subtle dashed ring */}
        <div className="absolute -inset-3.5 rounded-full border border-[#00A8FF]/30 border-dashed animate-spin-slow-reverse pointer-events-none" />

        {/* Glass Ring Enclosure & Profile Image */}
        <div className="relative w-[118px] h-[118px] sm:w-[130px] sm:h-[130px] rounded-full p-[3.5px] bg-gradient-to-b from-white/80 via-[#00A8FF]/40 to-[#006EFF]/90 shadow-[0_12px_32px_rgba(0,0,0,0.8),0_0_28px_rgba(0,110,255,0.45)] animate-float-slow">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0A1935] border border-white/30 relative">
            <img
              src="https://cdn.phototourl.com/free/2026-09-19-bc71fd44-9662-4a5a-9abc-3c115c5d416e.jpg"
              alt="Foto Profil REZZA"
              loading="eager"
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gloss reflection layer */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Typewriter Username */}
      <div className="relative inline-flex items-center justify-center min-h-[36px]">
        <h1
          id="profile-username"
          className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight flex items-center drop-shadow-[0_2px_12px_rgba(0,110,255,0.35)]"
        >
          <span className="text-[#00A8FF] font-semibold mr-0.5 select-none">@</span>
          {displayText}
          <span
            className="inline-block w-[2.5px] h-[1.15em] bg-[#00A8FF] ml-1 animate-pulse shadow-[0_0_8px_#00A8FF]"
            aria-hidden="true"
          />
        </h1>
      </div>

      {/* Subtitle */}
      <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium tracking-wide mt-2 opacity-75">
        Digital Creator • Persib Inside • Content
      </p>

      {/* Verified Status Badge */}
      <div className="mt-3">
        <div
          id="verified-badge"
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel-light border border-[#006EFF]/40 shadow-[0_0_15px_rgba(0,110,255,0.25)] hover:border-[#00A8FF]/70 transition-all duration-300 group cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A8FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EFF]"></span>
          </span>

          <VerifiedBadgeIcon className="w-4 h-4 text-[#00A8FF] drop-shadow-[0_0_6px_rgba(0,168,255,0.8)]" />

          <span className="font-display font-bold text-xs tracking-wider text-white">
            REZZA
          </span>

          <span className="text-[10px] uppercase font-semibold text-[#00A8FF]/90 tracking-wider ml-0.5">
            VERIFIED
          </span>
        </div>
      </div>
    </div>
  );
};
