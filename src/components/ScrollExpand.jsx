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
      media.style.transform = `scale3d(${(mediaZoom + (1 - mediaZoom) * e).toFixed(3)}, ${(mediaZoom + (1 - mediaZoom) * e).toFixed(3)}, 1)`;

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

    applyProgress(0);

    const st = ScrollTrigger.create({
      trigger: track,
      start: 'top top+=80',
      end: '+=100%',
      pin: stage,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.5,
      onUpdate: self => {
        applyProgress(self.progress);
      }
    });

    return () => {
      st.kill();
    };
  }, [startWidth, startHeight, startRadius, endRadius, mediaZoom, overlayScrim]);

  return (
    <div ref={rootRef} className={`relative w-full ${className}`.trim()} style={style} {...rest}>
      <div ref={trackRef} className="relative w-full h-[180vh]">
        <div ref={stageRef} className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          <div
            ref={frameRef}
            className="relative w-full h-full overflow-hidden shadow-2xl bg-slate-950 will-change-[clip-path,transform] [transform:translateZ(0)]"
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                ref={mediaRef}
                src={src}
                alt={alt}
                className="w-full h-full object-cover object-center will-change-transform [transform:translateZ(0)]"
              />
              <div ref={scrimRef} className="absolute inset-0 bg-slate-950 pointer-events-none transition-opacity duration-150" />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 sm:p-8 pointer-events-auto">
              <div ref={titleRef} className="w-full max-w-5xl mx-auto text-center will-change-transform [transform:translateZ(0)]">
                {children}
              </div>
            </div>

            {scrollHint && (
              <div
                ref={hintRef}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-white text-xs font-mono font-bold tracking-widest uppercase bg-slate-950/70 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-lg will-change-transform"
              >
                {scrollHint}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollExpand;
