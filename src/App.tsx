import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Background3DText } from './components/Background3DText';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';
import { DonateButton } from './components/DonateButton';
import { QrisModal } from './components/QrisModal';
import {
  TikTokIcon,
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from './components/Icons';
import { soundFx } from './utils/audio';
import { Share2, Volume2, VolumeX, Check, Heart } from 'lucide-react';

export default function App() {
  const [isQrisOpen, setIsQrisOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    soundFx.enabled = soundOn;
  }, [soundOn]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleShare = async () => {
    soundFx.playClick();
    const shareData = {
      title: 'REZZA | Official Profile & Links',
      text: 'Kunjungi profil resmi REZZA / rezaalfarizki14 (Persib Inside & Content Creator)',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or not supported
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link profil REZZA berhasil disalin! 📋');
      } catch {
        showToast('Link profil: ' + window.location.href);
      }
    }
  };

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    if (nextState) {
      soundFx.enabled = true;
      soundFx.playClick();
      showToast('Efek suara diaktifkan 🔊');
    } else {
      showToast('Efek suara dinonaktifkan 🔇');
    }
  };

  const handleButtonClick = () => {
    soundFx.playClick();
  };

  const handleOpenDonate = () => {
    soundFx.playClick();
    setIsQrisOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-white relative selection:bg-[#006EFF]/40 flex flex-col justify-between overflow-x-hidden font-sans">
      {/* 1. Deep 3D Background with Multi-Layered REZZA typography & floating geometric shapes */}
      <Background3DText />

      {/* 2. Interactive Canvas for Smooth Luminous Particles & Neural Grid */}
      <BackgroundCanvas />

      {/* Top Floating Utility Bar (Share & Audio Toggle) */}
      <header className="relative z-20 w-full max-w-[650px] mx-auto px-4 pt-4 sm:pt-6 flex items-center justify-between">
        {/* Brand identity badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel-light border border-white/10 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#00A8FF] animate-ping" />
          <span className="font-display font-bold text-xs tracking-wider text-slate-200">
            REZZA.BIO
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            id="toggle-sound-button"
            type="button"
            onClick={toggleSound}
            aria-label="Toggle Sound Effects"
            className="w-9 h-9 rounded-full glass-panel-light flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00A8FF]/50 transition-all duration-200 active:scale-90"
            title={soundOn ? 'Matikan Suara' : 'Aktifkan Suara'}
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4 text-[#00A8FF]" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Share Profile Button */}
          <button
            id="share-profile-button"
            type="button"
            onClick={handleShare}
            aria-label="Bagikan Profil"
            className="px-3.5 h-9 rounded-full glass-panel-light flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#00A8FF]/50 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>Bagikan</span>
          </button>
        </div>
      </header>

      {/* Main Content Card Container (Mobile-first, centered, max-w ~650px) */}
      <main className="relative z-10 w-full max-w-[650px] mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-start">
        {/* Section 1: Profile Header (Photo + Typewriter Name + Status Badge) */}
        <ProfileHeader />

        {/* Section 2: Special DONATE REZZA Highlight Button */}
        <DonateButton onClick={handleOpenDonate} />

        {/* Section 3: Official Links Stack */}
        <div className="w-full flex flex-col gap-3 sm:gap-3.5 my-2">
          {/* LINK 1 — TikTok Persib */}
          <LinkButton
            id="link-tiktok-persib"
            title="TikTok Persib"
            subtitle="@rezaalfarizki_14 • Update & Sorotan Persib"
            url="https://www.tiktok.com/@rezaalfarizki_14?_r=1&_t=ZS-99qgsUBWB1j"
            icon={<TikTokIcon className="w-5 h-5 text-white" />}
            iconBgColor="bg-gradient-to-tr from-cyan-500/20 to-blue-600/30 border-cyan-400/30"
            onButtonClick={handleButtonClick}
          />

          {/* LINK 2 — TikTok Pribadi */}
          <LinkButton
            id="link-tiktok-pribadi"
            title="TikTok Pribadi"
            subtitle="@rzeapb_ • Akun Personal & Daily"
            url="https://www.tiktok.com/@rzeapb_?_r=1&_t=ZS-99qgtfTBal8"
            icon={<TikTokIcon className="w-5 h-5 text-white" />}
            iconBgColor="bg-gradient-to-tr from-slate-700/40 to-slate-800/50 border-white/20"
            onButtonClick={handleButtonClick}
          />

          {/* LINK 3 — Instagram Persib */}
          <LinkButton
            id="link-instagram-persib"
            title="Instagram Persib"
            subtitle="@persibinside_1 • Komunitas & Berita Persib"
            url="https://www.instagram.com/persibinside_1?stkn=MXZzcDg0N2l6cTNwOQ=="
            icon={<InstagramIcon className="w-5 h-5 text-white" />}
            iconBgColor="bg-gradient-to-tr from-[#006EFF]/40 to-[#00A8FF]/30 border-[#00A8FF]/40"
            onButtonClick={handleButtonClick}
          />

          {/* LINK 4 — Instagram Pribadi */}
          <LinkButton
            id="link-instagram-pribadi"
            title="Instagram Pribadi"
            subtitle="@rezza_09_ • Official Personal Account"
            url="https://www.instagram.com/rezza_09_?stkn=ZmhmNjZsejJmM25y"
            icon={<InstagramIcon className="w-5 h-5 text-white" />}
            iconBgColor="bg-gradient-to-tr from-pink-600/30 to-purple-600/30 border-pink-400/30"
            onButtonClick={handleButtonClick}
          />

          {/* LINK 5 — YouTube Persib Inside */}
          <LinkButton
            id="link-youtube-persib"
            title="YouTube Persib Inside"
            subtitle="@persibinside-e4q • Video, Match Review & Vlog"
            url="https://youtube.com/@persibinside-e4q?si=UjGZyeGuygfTc4Sz"
            icon={<YouTubeIcon className="w-5 h-5 text-[#FF0000]" />}
            iconBgColor="bg-gradient-to-tr from-red-600/25 to-red-900/30 border-red-500/30"
            onButtonClick={handleButtonClick}
          />

          {/* LINK 6 — Saluran WhatsApp */}
          <LinkButton
            id="link-whatsapp-saluran"
            title="Saluran WhatsApp"
            subtitle="Bergabung ke Official Channel REZZA"
            url="https://whatsapp.com/channel/0029VbCG16u0wajjAOZxOQ3O"
            icon={<WhatsAppIcon className="w-5 h-5 text-[#25D366]" />}
            iconBgColor="bg-gradient-to-tr from-emerald-600/30 to-green-800/30 border-emerald-400/30"
            onButtonClick={handleButtonClick}
          />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative z-10 w-full max-w-[650px] mx-auto px-4 pt-8 pb-7 text-center select-none">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <p className="font-display font-medium text-xs text-slate-400 tracking-wider">
            © 2026 REZZAALFARIZKI14
          </p>
          <p className="font-sans text-[11px] text-slate-500 font-normal flex items-center justify-center gap-1 opacity-70">
            Made with <Heart className="w-3 h-3 text-[#00A8FF] fill-[#00A8FF]" /> by REZZA
          </p>
        </div>
      </footer>

      {/* QRIS Modal */}
      <QrisModal
        isOpen={isQrisOpen}
        onClose={() => {
          soundFx.playClick();
          setIsQrisOpen(false);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full glass-modal border border-[#00A8FF]/50 text-xs font-semibold text-white shadow-2xl flex items-center gap-2 animate-float-slow"
        >
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
