import React, { useRef, useState, useEffect } from 'react';
import './AppLayout.css'; // Import CSS for styling

const AppLayout = ({ children, setIsMaximized }) => {
  const layoutRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [clickTime, setClickTime] = useState(0); // Track time of last click

  const handleMouseDown = (e) => {
    const now = Date.now();
    if (now - clickTime < 300) {
      // If double-click detected, reset dragging
      setIsDragging(false);
      handleDoubleClick();
      return;
    }

    setClickTime(now); // Update last click time

    if (e.target.classList.contains('top-bar')) {
      e.preventDefault();
      setIsDragging(true);
      setOffset({
        x: e.clientX - layoutRef.current.getBoundingClientRect().left,
        y: e.clientY - layoutRef.current.getBoundingClientRect().top,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      requestAnimationFrame(() => {
        layoutRef.current.style.left = `${e.clientX - offset.x}px`;
        layoutRef.current.style.top = `${e.clientY - offset.y}px`;
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    console.log('Double-click detected');
    handleMaximize(); // Use double-click to maximize the window
  };

  const handleMinimize = () => {
    console.log('Minimize');
    setIsMaximized(false);
    // Implement minimize functionality
  };

  const handleMaximize = () => {
    console.log('Maximize');
    layoutRef.current.style.left = '0px';
    layoutRef.current.style.top = '0px';
    layoutRef.current.style.width = '100vw';
    layoutRef.current.style.height = '100vh';
  };

  const handleRestore = () => {
    console.log('Restore');
    layoutRef.current.style.width = '800px';
    layoutRef.current.style.height = '600px';
    layoutRef.current.style.left = '50%';
    layoutRef.current.style.top = '50%';
    layoutRef.current.style.transform = 'translate(-50%, -50%)';
  };

  const handleClose = () => {
    console.log('Close');
    setIsMaximized(false);
    // Implement close functionality
  };

  return (
    <div
      className="app-layout"
      ref={layoutRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="top-bar">
        <div className="window-controls">
          <button onClick={handleMinimize} className="control-button minimize">
            _
          </button>
          <button onClick={handleRestore} className="control-button maximize">
            []
          </button>
          <button onClick={handleClose} className="control-button close">
            X
          </button>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default AppLayout;
