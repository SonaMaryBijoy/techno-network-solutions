import React, { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const DEFAULT_TEXT = 'Draw Attention';

const StrokeText = ({
  text = DEFAULT_TEXT,
  strokeColor = '#2563eb',
  fillColor = '#0f172a',
  strokeWidth = 1.4,
  drawDuration = 1.6,
  fillDelay = 0.2,
  stagger = 0.05,
  ease = 'power2.out',
  trigger = 'mount',
  fillMode = 'wipe',
  fontSize = 84,
  fontWeight = 900,
  letterSpacing = 0,
  fontFamily = "Unbounded, SuperGType, GType, Syne, sans-serif",
  reverse = false,
  className = '',
  style = {}
}) => {
  const rootRef = useRef(null);
  const strokeTextRef = useRef(null);
  const wipeRectRef = useRef(null);

  const [box, setBox] = useState(null);

  const rawId = useId();
  const wipeId = `stroke-text-wipe-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const characters = useMemo(() => Array.from(String(text ?? '')), [text]);

  const dash = Math.max(fontSize * 7, 200);

  const fontStyle = useMemo(
    () => ({
      fontSize: `${fontSize}px`,
      fontWeight,
      letterSpacing: `${letterSpacing}px`,
      fontFamily
    }),
    [fontSize, fontWeight, letterSpacing, fontFamily]
  );

  useLayoutEffect(() => {
    const node = strokeTextRef.current;
    if (!node) return undefined;

    let cancelled = false;

    const measure = () => {
      if (cancelled || !strokeTextRef.current) return;
      let bbox;
      try {
        bbox = strokeTextRef.current.getBBox();
      } catch {
        return;
      }
      if (!bbox || !bbox.width) return;

      const pad = Math.max(Number(strokeWidth) * 4, fontSize * 0.2);
      const next = {
        x: bbox.x - pad,
        y: bbox.y - pad,
        width: bbox.width + pad * 2,
        height: bbox.height + pad * 2
      };

      setBox(prev =>
        prev &&
        Math.abs(prev.x - next.x) < 0.5 &&
        Math.abs(prev.width - next.width) < 0.5 &&
        Math.abs(prev.y - next.y) < 0.5
          ? prev
          : next
      );
    };

    measure();
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [characters, fontSize, fontWeight, letterSpacing, strokeWidth]);

  useEffect(() => {
    const root = rootRef.current;
    if (typeof window === 'undefined' || !root || !box) return undefined;

    const strokes = gsap.utils.toArray(root.querySelectorAll('[data-stroke-char]'));
    const fills = gsap.utils.toArray(root.querySelectorAll('[data-fill-char]'));
    const wipe = wipeRectRef.current;
    if (!strokes.length) return undefined;

    const fillEnabled = fillMode !== 'none';
    const useWipe = fillEnabled && fillMode === 'wipe';
    const fillDuration = Math.max(0.4, drawDuration * 0.5);
    const staggerConfig = reverse ? { each: stagger, from: 'end' } : stagger;
    const targets = [...strokes, ...fills, wipe].filter(Boolean);

    const setStart = () => {
      gsap.killTweensOf(targets);
      gsap.set(strokes, { strokeDasharray: dash, strokeDashoffset: dash });
      gsap.set(fills, { opacity: useWipe ? 1 : 0 });
      if (wipe) gsap.set(wipe, { attr: { width: 0 } });
    };

    const setEnd = () => {
      gsap.killTweensOf(targets);
      gsap.set(strokes, { strokeDashoffset: 0 });
      gsap.set(fills, { opacity: 1 });
      if (wipe && box) gsap.set(wipe, { attr: { width: box.width } });
    };

    let timeline;

    const buildTimeline = () => {
      setStart();
      timeline = gsap.timeline({ paused: true });

      timeline.to(strokes, {
        strokeDashoffset: 0,
        duration: drawDuration,
        stagger: staggerConfig,
        ease
      });

      if (useWipe && wipe && box) {
        timeline.to(
          wipe,
          {
            attr: { width: box.width },
            duration: fillDuration,
            ease: 'power1.inOut'
          },
          `<+${fillDelay}`
        );
      } else if (fillEnabled && !useWipe) {
        timeline.to(
          fills,
          {
            opacity: 1,
            duration: fillDuration,
            stagger: staggerConfig,
            ease: 'power1.out'
          },
          `<+${fillDelay}`
        );
      }

      return timeline;
    };

    if (trigger === 'mount') {
      buildTimeline().play();
    } else if (trigger === 'hover') {
      buildTimeline();
      const enter = () => timeline?.play();
      const leave = () => timeline?.reverse();
      root.addEventListener('mouseenter', enter);
      root.addEventListener('mouseleave', leave);

      return () => {
        root.removeEventListener('mouseenter', enter);
        root.removeEventListener('mouseleave', leave);
        timeline?.kill();
      };
    } else if (trigger === 'scroll') {
      buildTimeline();
      const st = ScrollTrigger.create({
        trigger: root,
        start: 'top 80%',
        onEnter: () => timeline?.play(),
        once: true
      });

      return () => {
        st.kill();
        timeline?.kill();
      };
    } else {
      setEnd();
    }

    return () => {
      timeline?.kill();
      gsap.killTweensOf(targets);
    };
  }, [box, dash, drawDuration, fillDelay, stagger, ease, trigger, fillMode, reverse]);

  const viewBox = box ? `${box.x} ${box.y} ${box.width} ${box.height}` : `0 ${-fontSize} 600 ${fontSize * 1.3}`;

  return (
    <span
      ref={rootRef}
      className={`inline-flex justify-center max-w-full leading-none ${trigger === 'hover' ? 'cursor-pointer' : ''} ${className}`.trim()}
      style={style}
      role="img"
      aria-label={String(text ?? '')}
    >
      <svg
        className="block overflow-visible max-w-full"
        style={{ height: `${Math.round(fontSize * 1.2)}px`, width: box ? `${Math.round(box.width * (fontSize * 1.2 / box.height))}px` : 'auto', overflow: 'visible' }}
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {fillMode === 'wipe' && box && (
          <defs>
            <clipPath id={wipeId} clipPathUnits="userSpaceOnUse">
              <rect ref={wipeRectRef} x={box.x} y={box.y} width="0" height={box.height} />
            </clipPath>
          </defs>
        )}

        <text
          ref={strokeTextRef}
          className="select-none"
          x="0"
          y="0"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={fontStyle}
        >
          {characters.map((char, index) => (
            <tspan data-stroke-char key={`s-${index}`}>
              {char}
            </tspan>
          ))}
        </text>

        <text
          className="select-none"
          x="0"
          y="0"
          fill={fillColor}
          stroke="none"
          style={fontStyle}
          clipPath={fillMode === 'wipe' && box ? `url(#${wipeId})` : undefined}
        >
          {characters.map((char, index) => (
            <tspan data-fill-char key={`f-${index}`}>
              {char}
            </tspan>
          ))}
        </text>
      </svg>
    </span>
  );
};

export default StrokeText;
