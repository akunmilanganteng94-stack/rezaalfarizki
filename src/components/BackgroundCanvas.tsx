import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles configuration
    const particleCount = Math.min(width < 768 ? 35 : 65, 70);
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      pulseVal: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ['#006EFF', '#00A8FF', '#38BDF8', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.15,
        opacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseVal: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Mouse movement subtle parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const offsetX = (mouseX - width / 2) * 0.03;
      const offsetY = (mouseY - height / 2) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineOpacity = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 168, 255, ${lineOpacity})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x + offsetX, particles[i].y + offsetY);
            ctx.lineTo(particles[j].x + offsetX, particles[j].y + offsetY);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.pulseVal += p.pulseSpeed;
        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulseVal));

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const posX = p.x + offsetX * (p.size * 0.5);
        const posY = p.y + offsetY * (p.size * 0.5);

        ctx.save();
        ctx.beginPath();
        ctx.arc(posX, posY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 4;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      id="ambient-particles-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
};
