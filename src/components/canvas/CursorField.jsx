import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";

const GRID = 56; // must match the page grid in App.js
const RADIUS = 220; // reach of the lit patch around the cursor, px
const EASE = 0.16; // how quickly the patch catches up with the cursor
const RIPPLE_SPEED = 520; // px per second
const RIPPLE_LIFE = 0.9; // seconds

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const hexToRgb = (hex) => {
  const value = parseInt(hex.replace("#", ""), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
};

/**
 * Cursor-reactive backdrop. The page sits on a faint 56px grid; the stretch of
 * it under the pointer lights up node by node, and a click sends a ping
 * rippling outward along the same nodes. It also feeds each card the pointer
 * position (--mx / --my) so cards can draw their own highlight.
 *
 * Skipped on touch devices and when the visitor prefers reduced motion.
 */
const CursorField = () => {
  const canvasRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const [r1, g1, b1] = hexToRgb(theme.primary);
    const [r2, g2, b2] = hexToRgb(theme.secondary);

    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let presence = 0; // 0 = pointer away, 1 = pointer on the page
    let inside = false;
    const target = { x: -9999, y: -9999 };
    const pos = { x: -9999, y: -9999 };
    let ripples = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /** Brightness (0..1) of the grid node at viewport point (x, y). */
    const nodeLevel = (x, y) => {
      const distance = Math.hypot(x - pos.x, y - pos.y);
      let level =
        distance < RADIUS ? (1 - distance / RADIUS) ** 1.6 * presence : 0;

      for (const ripple of ripples) {
        const fromRing = Math.abs(
          Math.hypot(x - ripple.x, y - ripple.y) - ripple.radius
        );
        if (fromRing < 44) {
          level = Math.max(level, (1 - fromRing / 44) * ripple.strength);
        }
      }
      return level;
    };

    const draw = (time) => {
      const dt = Math.min((time - lastTime) / 1000 || 0, 0.05);
      lastTime = time;

      pos.x += (target.x - pos.x) * EASE;
      pos.y += (target.y - pos.y) * EASE;
      presence += ((inside ? 1 : 0) - presence) * 0.1;

      ripples = ripples
        .map((ripple) => ({
          ...ripple,
          age: ripple.age + dt,
          radius: ripple.radius + RIPPLE_SPEED * dt,
          strength: Math.max(0, 1 - (ripple.age + dt) / RIPPLE_LIFE),
        }))
        .filter((ripple) => ripple.strength > 0);

      ctx.clearRect(0, 0, width, height);

      // Soft pool of light under the pointer.
      if (presence > 0.01) {
        const glow = ctx.createRadialGradient(
          pos.x,
          pos.y,
          0,
          pos.x,
          pos.y,
          RADIUS * 1.2
        );
        glow.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, ${0.1 * presence})`);
        glow.addColorStop(1, `rgba(${r1}, ${g1}, ${b1}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(
          pos.x - RADIUS * 1.2,
          pos.y - RADIUS * 1.2,
          RADIUS * 2.4,
          RADIUS * 2.4
        );
      }

      // Grid nodes live in page space, so they scroll with the content.
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const reach = ripples.reduce(
        (max, ripple) => Math.max(max, ripple.radius + 44),
        RADIUS
      );
      const centers = [pos, ...ripples];
      const minX = Math.min(...centers.map((c) => c.x)) - reach;
      const maxX = Math.max(...centers.map((c) => c.x)) + reach;
      const minY = Math.min(...centers.map((c) => c.y)) - reach;
      const maxY = Math.max(...centers.map((c) => c.y)) + reach;

      const firstCol = Math.max(0, Math.floor((minX + scrollX) / GRID));
      const lastCol = Math.ceil((Math.min(maxX, width) + scrollX) / GRID);
      const firstRow = Math.max(0, Math.floor((minY + scrollY) / GRID));
      const lastRow = Math.ceil((Math.min(maxY, height) + scrollY) / GRID);

      ctx.lineWidth = 1;
      for (let col = firstCol; col <= lastCol; col += 1) {
        for (let row = firstRow; row <= lastRow; row += 1) {
          const x = col * GRID - scrollX;
          const y = row * GRID - scrollY;
          const level = nodeLevel(x, y);
          if (level < 0.02) continue;

          // Blend mint to cyan left to right across the viewport.
          const mix = Math.min(1, Math.max(0, x / width));
          const r = Math.round(r1 + (r2 - r1) * mix);
          const g = Math.round(g1 + (g2 - g1) * mix);
          const b = Math.round(b1 + (b2 - b1) * mix);

          // Light the grid segments running right and down from this node.
          const right = Math.min(level, nodeLevel(x + GRID, y));
          const down = Math.min(level, nodeLevel(x, y + GRID));
          if (right > 0.02) {
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${right * 0.75})`;
            ctx.beginPath();
            ctx.moveTo(x + 0.5, y + 0.5);
            ctx.lineTo(x + GRID + 0.5, y + 0.5);
            ctx.stroke();
          }
          if (down > 0.02) {
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${down * 0.75})`;
            ctx.beginPath();
            ctx.moveTo(x + 0.5, y + 0.5);
            ctx.lineTo(x + 0.5, y + GRID + 0.5);
            ctx.stroke();
          }

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, level * 1.1)})`;
          ctx.beginPath();
          ctx.arc(x + 0.5, y + 0.5, 1.2 + level * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const settled =
        Math.abs(target.x - pos.x) < 0.2 &&
        Math.abs(target.y - pos.y) < 0.2 &&
        Math.abs((inside ? 1 : 0) - presence) < 0.01 &&
        ripples.length === 0;
      frame = settled ? 0 : requestAnimationFrame(draw);
    };

    const wake = () => {
      if (!frame) {
        lastTime = performance.now();
        frame = requestAnimationFrame(draw);
      }
    };

    const onPointerMove = (event) => {
      if (event.pointerType === "touch") return;
      target.x = event.clientX;
      target.y = event.clientY;
      if (!inside) {
        // First sighting: start at the cursor instead of gliding in from afar.
        pos.x = target.x;
        pos.y = target.y;
        inside = true;
      }
      wake();

      // Hand the pointer position to the card under it.
      const card = event.target.closest?.("[data-glow], article");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }
    };

    const onPointerDown = (event) => {
      if (event.pointerType === "touch") return;
      ripples.push({
        x: event.clientX,
        y: event.clientY,
        radius: 0,
        age: 0,
        strength: 1,
      });
      if (ripples.length > 4) ripples.shift();
      wake();
    };

    const onLeave = () => {
      inside = false;
      wake();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("scroll", wake, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", wake);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, [theme.primary, theme.secondary]);

  return <Canvas ref={canvasRef} aria-hidden="true" />;
};

export default CursorField;
