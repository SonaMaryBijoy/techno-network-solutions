import { useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

const ScrollExpand = ({
  src = '',
  mediaType = 'image',
  poster = '',
  alt = '',
  title = '',
  scrollHint = '',
  startWidth = 65,
  startHeight = 70,
  startRadius = 24,
  endRadius = 0,
  mediaZoom = 1.2,
  scrollDistance = 1.0,
  holdDistance = 0.3,
  overlayScrim = 0.35,
  children,
  className = '',
  style,
  ...rest
}) => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  const mediaRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);
  const scrimRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!root || !track || !stage || !frame || !media) return;

    const applyProgress = p => {
      const e = smoothstep(0, 1, p);

      const w = startWidth + (100 - startWidth) * e;
      const h = startHeight + (100 - startHeight) * e;
      const ix = Math.max(0, (100 - w) / 2);
      const iy = Math.max(0, (100 - h) / 2);
      const r = startRadius + (endRadius - startRadius) * e;

      frame.style.clipPath = `inset(${iy.toFixed(2)}% ${ix.toFixed(2)}% ${iy.toFixed(2)}% ${ix.toFixed(2)}% round ${r.toFixed(1)}px)`;
      media.style.transform = `scale(${(mediaZoom + (1 - mediaZoom) * e).toFixed(3)})`;

      if (scrimRef.current) scrimRef.current.style.opacity = `${(overlayScrim * e).toFixed(2)}`;

      if (titleRef.current) {
        const out = smoothstep(0.5, 0.9, p);
        titleRef.current.style.opacity = `${(1 - out * 0.3).toFixed(2)}`;
        titleRef.current.style.transform = `translate3d(0, ${-15 * out}px, 0)`;
      }

      if (hintRef.current) {
        const gone = smoothstep(0, 0.15, p);
        hintRef.current.style.opacity = `${(1 - gone).toFixed(2)}`;
        hintRef.current.style.transform = `translate3d(0, ${8 * gone}px, 0)`;
      }
    };

    // Apply initial state
    applyProgress(0);

    const st = ScrollTrigger.create({
      trigger: track,
      start: 'top top+=70',
      end: '+=100%',
      pin: stage,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.2,
      onUpdate: self => {
        applyProgress(self.progress);
      }
    });

    return () => {
      st.kill();
    };
  }, [startWidth, startHeight, startRadius, endRadius, mediaZoom, overlayScrim]);

  const media =
    mediaType === 'video' ? (
      <video
        ref={mediaRef}
        className="absolute inset-0 w-full h-full object-cover origin-center select-none [will-change:transform,clip-path] [image-rendering:crisp-edges]"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img
        ref={mediaRef}
        className="absolute inset-0 w-full h-full object-cover origin-center select-none [will-change:transform,clip-path] [image-rendering:crisp-edges] brightness-[1.03] contrast-[1.05]"
        src={src}
        alt={alt}
        draggable={false}
      />
    );

  return (
    <div
      ref={rootRef}
      className={`relative w-full ${className}`.trim()}
      style={style}
      {...rest}
    >
      <div ref={trackRef} className="relative w-full">
        <div ref={stageRef} className="w-full overflow-hidden h-[540px] sm:h-[620px]">
          <div
            ref={frameRef}
            className="absolute inset-0 [clip-path:inset(12%_14%_12%_14%_round_24px)] [will-change:clip-path] shadow-2xl overflow-hidden"
          >
            {media}
            {/* Dark contrast gradient overlay */}
            <div
              ref={scrimRef}
              className="absolute inset-0 opacity-35 pointer-events-none bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.25)_50%,rgba(0,0,0,0.5))]"
            />
            {children ? (
              <div
                ref={overlayRef}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 z-10 max-w-full overflow-hidden"
              >
                {children}
              </div>
            ) : null}
          </div>

          {title ? (
            <div
              ref={titleRef}
              className="absolute inset-0 flex items-center justify-center m-0 px-4 text-center font-bold text-white z-10 pointer-events-none"
            >
              {title}
            </div>
          ) : null}

          {scrollHint ? (
            <div
              ref={hintRef}
              className="absolute inset-x-0 bottom-4 text-center text-xs font-mono tracking-widest text-white/90 pointer-events-none drop-shadow z-10 uppercase font-bold"
            >
              {scrollHint}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ScrollExpand;
