import React, { useRef, useState } from 'react';
import './AppLayout.css'; // Import CSS for styling

const AppLayout = ({ children }) => {
  const layoutRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent default behavior
    setIsDragging(true);
    setOffset({
      x: e.clientX - layoutRef.current.getBoundingClientRect().left,
      y: e.clientY - layoutRef.current.getBoundingClientRect().top,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      requestAnimationFrame(() => {
        layoutRef.current.style.left = `${e.clientX - offset.x}px`;
        layoutRef.current.style.top = `${e.clientY - offset.y}px`;
        layoutRef.current.style.position = 'absolute';
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMinimize = () => {
    console.log('Minimize');
    // Implement minimize functionality
  };

  const handleMaximize = () => {
    console.log('Maximize');
    // Implement maximize functionality
  };

  const handleClose = () => {
    console.log('Close');
    // Implement close functionality
  };

  return (
    <div
      className='app-layout'
      ref={layoutRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleMouseDown} // Allow dragging from anywhere in the layout
    >
      <div className='top-bar'>
        <div className='window-controls'>
          <button onClick={handleMinimize} className='control-button'>_</button>
          <button onClick={handleMaximize} className='control-button'>[]</button>
          <button onClick={handleClose} className='control-button'>X</button>
        </div>
      </div>
      <div className='content'>
        {children} {/* This is where MainWidget will be rendered */}
      </div>
    </div>
  );
}

export default AppLayout;