"use client";

import { useEffect, useRef } from "react";

export default function QuantumAnimation() {
  const canvasRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const canvas = canvasRef.current;
    if (!banner || !canvas) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let deviceRatio = window.devicePixelRatio || 1;

    const numLines = 6;
    const numQubits = 18;
    let lineYs = [];

    const qubits = [];
    let lastTime = performance.now();

    function resizeCanvas() {
      const rect = banner.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      deviceRatio = window.devicePixelRatio || 1;
      canvas.width = width * deviceRatio;
      canvas.height = height * deviceRatio;

      ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);

      computeLines();
    }

    function computeLines() {
      lineYs = [];
      const topPadding = height * 0.2;
      const bottomPadding = height * 0.2;
      const usableHeight = height - topPadding - bottomPadding;

      for (let i = 0; i < numLines; i++) {
        const t = numLines === 1 ? 0.5 : i / (numLines - 1);
        lineYs.push(topPadding + t * usableHeight);
      }

      qubits.forEach((q) => {
        const closest = findClosestLine(q.y);
        q.lineIndex = closest;
        q.y = lineYs[closest];
      });
    }

    function randomRange(min, max) {
      return min + Math.random() * (max - min);
    }

    function findClosestLine(y) {
      let bestIndex = 0;
      let bestDist = Infinity;
      lineYs.forEach((ly, i) => {
        const d = Math.abs(ly - y);
        if (d < bestDist) {
          bestDist = d;
          bestIndex = i;
        }
      });
      return bestIndex;
    }

    class Qubit {
      constructor() {
        this.reset(true);
      }

      reset(initial) {
        this.lineIndex = Math.floor(Math.random() * numLines);
        this.x = initial
          ? randomRange(0, width)
          : Math.random() < 0.5
          ? -20
          : width + 20;

        this.y = lineYs[this.lineIndex] || height / 2;
        this.baseRadius = randomRange(4, 7);
        this.speedX = randomRange(40, 120) * (Math.random() < 0.5 ? 1 : -1);

        this.isJumping = false;
        this.jumpTime = 0;
        this.jumpDuration = randomRange(0.7, 1.4);
        this.startY = this.y;
        this.targetLineIndex = this.lineIndex;

        this.phase = Math.random() * Math.PI * 2;
        this.bitValue = Math.random() < 0.5 ? 0 : 1;
        this.bitTimer = randomRange(0.2, 1.5);
      }

      triggerJump() {
        let newIndex = this.lineIndex;
        if (numLines > 1) {
          while (newIndex === this.lineIndex) {
            newIndex = Math.floor(Math.random() * numLines);
          }
        }
        this.isJumping = true;
        this.jumpTime = 0;
        this.jumpDuration = randomRange(0.5, 1.2);
        this.startY = this.y;
        this.targetLineIndex = newIndex;
      }

      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      update(dt) {
        this.x += this.speedX * dt;

        if (this.x < -30) this.x = width + 30;
        if (this.x > width + 30) this.x = -30;

        if (!this.isJumping && Math.random() < dt * 0.25) {
          this.triggerJump();
        }

        if (this.isJumping) {
          this.jumpTime += dt;
          let t = this.jumpTime / this.jumpDuration;
          if (t >= 1) {
            t = 1;
            this.isJumping = false;
            this.lineIndex = this.targetLineIndex;
            this.y = lineYs[this.lineIndex];
          } else {
            const eased = this.easeInOutQuad(t);
            const startY = this.startY;
            const endY = lineYs[this.targetLineIndex];
            this.y = startY + (endY - startY) * eased;

            const arcHeight = (height / numLines) * 0.25;
            const bump = Math.sin(t * Math.PI) * arcHeight;
            this.y -= bump;
          }
        } else {
          this.y = lineYs[this.lineIndex];
        }

        this.bitTimer -= dt;
        if (this.bitTimer <= 0) {
          this.bitValue = this.bitValue === 0 ? 1 : 0;
          this.bitTimer = randomRange(0.2, 1.5);
        }

        this.phase += dt * randomRange(2, 6);
      }

      draw(ctx) {
        const pulse = 1 + 0.3 * Math.sin(this.phase);
        const r = this.baseRadius * pulse;

        // Glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, r * 3, 0, Math.PI * 2);
        const glowGrad = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          r * 3
        );
        glowGrad.addColorStop(0, "rgba(96, 165, 250, 0.70)");
        glowGrad.addColorStop(1, "rgba(15, 23, 42, 0)");
        ctx.fillStyle = glowGrad;
        ctx.fill();
        ctx.restore();

        // Core qubit
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        const coreGrad = ctx.createRadialGradient(
          this.x - r * 0.3,
          this.y - r * 0.3,
          r * 0.3,
          this.x,
          this.y,
          r
        );
        coreGrad.addColorStop(0, "#e5e7eb");
        coreGrad.addColorStop(1, "#60a5fa");
        ctx.fillStyle = coreGrad;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(191, 219, 254, 0.8)";
        ctx.stroke();

        // Bit label (0 or 1)
        ctx.fillStyle = "#020617";
        ctx.font = `${Math.max(8, r + 2)}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.bitValue.toString(), this.x, this.y + 0.5);
        ctx.restore();
      }
    }

    function initQubits() {
      qubits.length = 0;
      for (let i = 0; i < numQubits; i++) {
        qubits.push(new Qubit());
      }
    }

    function drawBackground() {
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(51, 65, 85, 0.7)";

      lineYs.forEach((y) => {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        for (let i = 0; i < 40; i++) {
          const x = (width / 40) * i + randomRange(-4, 4);
          const alpha = Math.random() * 0.15;
          ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
          ctx.fillRect(x, y + randomRange(-2, 2), 1, 1);
        }
      });
      ctx.restore();
    }

    function loop(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);
      drawBackground();

      qubits.forEach((q) => {
        q.update(dt);
        q.draw(ctx);
      });

      requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    initQubits();
    lastTime = performance.now();
    const animationId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="w-full h-[260px] relative overflow-hidden bg-transparent"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
