import React, { useState, useEffect } from 'react';

const ResizableBox = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px`, border: '1px solid black' }}
    >
     
    </div>
  );
};

export default ResizableBox;
