import React from 'react';

export const ScrollStackItem = ({ children, itemClassName = '', style = {}, index = 0 }) => {
  const topOffset = 120 + index * 24;

  return (
    <div
      className={`scroll-stack-card sticky transition-transform duration-300 ease-out w-full box-border ${itemClassName}`.trim()}
      style={{
        top: `${topOffset}px`,
        zIndex: index + 1,
        marginBottom: '2rem',
        ...style
      }}
    >
      {children}
    </div>
  );
};

const ScrollStack = ({ children, className = '' }) => {
  return (
    <div className={`relative w-full pb-16 ${className}`.trim()}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { index });
      })}
    </div>
  );
};

export default ScrollStack;
