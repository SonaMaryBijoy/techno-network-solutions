import React from 'react';

const StarBorder = ({
  as: Component = 'div',
  className = '',
  color = '#2563eb',
  speed = '5s',
  thickness = 1.5,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[24px] ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-80 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-80 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="relative z-10 bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 rounded-[22px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
