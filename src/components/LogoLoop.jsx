import React, { memo } from 'react';

export const LogoLoop = memo(
  ({
    logos,
    speed = 40,
    direction = 'left',
    logoHeight = 48,
    fadeOut = true,
    fadeOutColor = '#ffffff',
    ariaLabel = 'OEM Partner logos',
    className = ''
  }) => {
    // Duplicate logo array 6x for an ultra-smooth, continuous non-stop loop
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

    return (
      <div
        className={`relative overflow-hidden w-full select-none py-4 ${className}`}
        role="region"
        aria-label={ariaLabel}
      >
        {/* Left & Right Edge Vignette Fade Overlays */}
        {fadeOut && (
          <>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32"
              style={{
                background: `linear-gradient(to right, ${fadeOutColor} 20%, transparent 100%)`
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32"
              style={{
                background: `linear-gradient(to left, ${fadeOutColor} 20%, transparent 100%)`
              }}
            />
          </>
        )}

        {/* Buttery Smooth GPU-Accelerated Continuous Marquee Track */}
        <div
          className="flex items-center gap-8 sm:gap-12 w-max animate-marquee hover:[animation-play-state:paused] [will-change:transform]"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction === 'right' ? 'reverse' : 'normal'
          }}
        >
          {duplicatedLogos.map((item, index) => (
            <div
              key={index}
              className="flex-none px-6 py-2 flex items-center justify-center text-center group cursor-pointer min-w-[130px] sm:min-w-[160px]"
            >
              <img
                src={item.src}
                alt={item.alt || item.title || 'Partner Logo'}
                title={item.title}
                className="w-auto object-contain mx-auto my-auto block pointer-events-none group-hover:scale-110 transition-transform duration-300"
                style={{ height: `${logoHeight}px`, maxHeight: `${logoHeight}px`, maxWidth: '170px' }}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
