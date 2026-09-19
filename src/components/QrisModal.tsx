import React, { useEffect, useState } from 'react';
import { X, Heart, ShieldCheck, Download, Check, ExternalLink } from 'lucide-react';

interface QrisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrisModal: React.FC<QrisModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const qrisImageUrl = 'https://cdn.phototourl.com/free/2026-09-19-97467090-0c61-4db9-b054-261c24b63043.jpg';

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    // Open image or trigger download
    window.open(qrisImageUrl, '_blank');
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      id="qris-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      style={{
        backgroundColor: 'rgba(3, 8, 20, 0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Outer ambient glow */}
      <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#006EFF]/25 blur-[120px] pointer-events-none -z-10 animate-soft-pulse" />

      {/* Main Modal Card */}
      <div
        id="qris-modal-card"
        className="relative w-full max-w-[430px] rounded-[28px] glass-modal p-5 sm:p-7 text-white select-none transition-all duration-300 transform scale-100 opacity-100 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,110,255,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button X (Top Right) */}
        <button
          id="close-qris-modal-btn"
          type="button"
          onClick={onClose}
          aria-label="Tutup Modal QRIS"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A8FF]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center pt-1 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006EFF]/20 border border-[#00A8FF]/40 mb-2 shadow-[0_0_12px_rgba(0,110,255,0.3)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span className="text-[11px] font-display font-semibold tracking-wider text-[#00A8FF] uppercase">
              Official QRIS Payment
            </span>
          </div>

          <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(0,110,255,0.4)]">
            DONATE REZZA
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1 flex items-center justify-center gap-1">
            Scan QRIS untuk support Rezza <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          </p>
        </div>

        {/* Futuristic 3D Frame Around QRIS with Floating Rounded Square Decorators */}
        <div className="relative my-2 flex items-center justify-center">
          {/* FLOATING ROUNDED SQUARES (LEFT SIDE) */}
          <div className="absolute -left-3 sm:-left-6 top-[10%] flex flex-col gap-3 pointer-events-none z-10">
            {/* Square 1 */}
            <div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-[25px] border border-[#00A8FF]/40 bg-[#006EFF]/15 backdrop-blur-md shadow-[0_0_15px_rgba(0,168,255,0.35)] animate-float-slow"
              style={{ transform: 'rotate(-12deg)' }}
            />
            {/* Square 2 */}
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-[25px] border border-white/30 bg-white/[0.08] backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-float-reverse ml-2"
              style={{ transform: 'rotate(15deg)' }}
            />
            {/* Square 3 */}
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-[25px] border border-[#006EFF]/50 bg-[#00A8FF]/20 backdrop-blur-md shadow-[0_0_18px_rgba(0,110,255,0.4)] animate-float-slow mt-4"
              style={{ transform: 'rotate(-20deg)' }}
            />
          </div>

          {/* FLOATING ROUNDED SQUARES (RIGHT SIDE) */}
          <div className="absolute -right-3 sm:-right-6 top-[15%] flex flex-col gap-3 pointer-events-none z-10">
            {/* Square 4 */}
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-[25px] border border-[#006EFF]/40 bg-[#006EFF]/20 backdrop-blur-md shadow-[0_0_16px_rgba(0,110,255,0.4)] animate-float-slow"
              style={{ transform: 'rotate(14deg)' }}
            />
            {/* Square 5 */}
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-[25px] border border-white/35 bg-white/10 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-float-reverse mr-2"
              style={{ transform: 'rotate(-18deg)' }}
            />
            {/* Square 6 */}
            <div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-[25px] border border-[#00A8FF]/50 bg-[#00A8FF]/15 backdrop-blur-md shadow-[0_0_14px_rgba(0,168,255,0.35)] animate-float-slow mt-3"
              style={{ transform: 'rotate(25deg)' }}
            />
          </div>

          {/* Central Holographic Frame Container */}
          <div className="relative p-2.5 sm:p-3 rounded-[24px] bg-gradient-to-b from-white/20 via-white/5 to-[#006EFF]/20 border border-white/30 shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            {/* Futuristic Corner Accents */}
            <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#00A8FF] rounded-tl-lg pointer-events-none" />
            <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#00A8FF] rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#00A8FF] rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#00A8FF] rounded-br-lg pointer-events-none" />

            {/* QRIS Image Enclosure */}
            <div className="relative overflow-hidden rounded-[18px] bg-white p-2 shadow-inner">
              <img
                src={qrisImageUrl}
                alt="QRIS Donasi REZZA"
                className="w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] object-contain mx-auto block"
              />

              {/* Blue Scanning Laser Line Effect */}
              <div
                className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#006EFF] to-transparent shadow-[0_0_12px_#00A8FF] pointer-events-none animate-scan-laser"
                style={{ top: '0%' }}
              />

              {/* Subtle ambient scan grid */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,110,255,0.06)_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Supported Payment Logos / Information */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col items-center gap-2.5 text-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-slate-300 font-medium">
            <span className="px-2 py-0.5 rounded-md bg-white/10">BCA</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10">GoPay</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10">OVO</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10">DANA</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10">ShopeePay</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10">All Bank</span>
          </div>

          {/* Quick Action Button to Open/Save QRIS */}
          <div className="w-full flex gap-2 mt-1">
            <button
              type="button"
              onClick={handleDownload}
              className="flex-1 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Membuka QRIS...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#00A8FF]" />
                  <span>Buka / Simpan Foto</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 h-10 rounded-xl bg-[#006EFF] hover:bg-[#0056CC] text-white text-xs font-semibold flex items-center justify-center transition-all duration-200 active:scale-95 shadow-[0_0_12px_rgba(0,110,255,0.4)]"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
