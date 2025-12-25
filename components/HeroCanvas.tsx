
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseVx: number;
  baseVy: number;
}

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 80; 
    const connectionDistance = 180;
    const mouse = { x: -2000, y: -2000, radius: 300 };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.3;
        const vy = (Math.random() - 0.5) * 0.3;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx,
          vy: vy,
          baseVx: vx,
          baseVy: vy,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // 取得滑鼠在 Canvas 內的相對位置
        const rect = canvas.getBoundingClientRect();
        const mouseRelX = mouse.x - rect.left;
        const mouseRelY = mouse.y - rect.top;

        const dx = p.x - mouseRelX;
        const dy = p.y - mouseRelY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        
        if (distToMouse < mouse.radius) {
          const force = (mouse.radius - distToMouse) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          p.vx -= Math.cos(angle) * force * 0.4;
          p.vy -= Math.sin(angle) * force * 0.4;
          
          // 極淡的互動連線
          const mouseLineOpacity = (1 - distToMouse / mouse.radius) * 0.2;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(245, 158, 11, ${mouseLineOpacity})`;
          ctx.lineWidth = mouseLineOpacity * 2;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRelX, mouseRelY);
          ctx.stroke();
        } else {
          p.vx += (p.baseVx - p.vx) * 0.02;
          p.vy += (p.baseVy - p.vy) * 0.02;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = distToMouse < mouse.radius 
          ? `rgba(180, 83, 9, ${0.2 + (1 - distToMouse/mouse.radius) * 0.2})` 
          : `rgba(120, 113, 108, 0.1)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

          if (distNodes < connectionDistance) {
            const opacity = (1 - distNodes / connectionDistance) * 0.25;
            ctx.beginPath();
            const isNearMouse = (distToMouse < mouse.radius);
            ctx.strokeStyle = isNearMouse 
              ? `rgba(217, 119, 6, ${opacity * 0.3})` 
              : `rgba(120, 113, 108, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default HeroCanvas;
