import React, { useEffect, useRef } from 'react';

export default function TextPressure({
  text = 'Text Pressure',
  fontFamily = "'Unbounded', 'Syne', 'Bricolage Grotesque', sans-serif",
  fontSize = 'clamp(1.5rem, 3vw, 2.5rem)',
  fontWeight = 900,
  textColor = '#0f172a',
  accentColor = '#12ACE0',
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll('.tp-char');

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      spans.forEach((span) => {
        const spanRect = span.getBoundingClientRect();
        const spanX = spanRect.left - rect.left + spanRect.width / 2;
        const spanY = spanRect.top - rect.top + spanRect.height / 2;

        const dist = Math.hypot(mouseX - spanX, mouseY - spanY);
        const maxDist = 180;
        const pressure = Math.max(0, 1 - dist / maxDist);

        const scale = 1 + pressure * 0.22;
        const translateY = -pressure * 6;
        const weight = Math.round(700 + pressure * 250);

        span.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        span.style.fontWeight = weight;
        span.style.color = pressure > 0.4 ? accentColor : textColor;
      });
    };

    const handleMouseLeave = () => {
      spans.forEach((span) => {
        span.style.transform = 'scale(1) translateY(0px)';
        span.style.fontWeight = fontWeight;
        span.style.color = textColor;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [accentColor, fontWeight, textColor]);

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap items-center cursor-pointer select-none ${className}`}
      style={{
        fontFamily,
        fontSize,
        fontWeight,
        color: textColor,
        ...style
      }}
    >
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className="tp-char inline-block transition-all duration-150 ease-out"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
