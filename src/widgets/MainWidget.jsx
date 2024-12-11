import React, { useState } from 'react';
import './MainWidget.css'; // Import CSS for the widget
import { CiSearch, CiPower } from "react-icons/ci";
import AppLayout from './AppLayout';
import Projects from './Projects.jsx'; // Example component for Projects
import AboutMe from './AboutMe.jsx'; // Example component for About Me
import Socials from './Socials.jsx'; // Example component for Socials
// Import other components as needed...

const iconData = [
  { src: "idea.png", label: "Projects" },
  { src: "working.png", label: "About Me" },
  { src: "digital-advertising.png", label: "Socials" },
  { src: "chat.png", label: "Contact" },
  { src: "github.png", label: "Github" },
  { src: "visual-studio.png", label: "Code" },
  { src: "photoshop.png", label: "Photoshop" },
  { src: "excel.png", label: "Excel" },
  { src: "word.png", label: "Word" },
  { src: "microsoft.png", label: "Edge" },
];

const MainWidget = ({ isVisible }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [currentContent, setCurrentContent] = useState(null); // State to hold current content

  const filteredIcons = iconData.filter(icon =>
    icon.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleIconClick = (label) => {
    setIsMaximized(true);
    switch (label) {
      case "Projects":
        setCurrentContent(<Projects />);
        break;
      case "About Me":
        setCurrentContent(<AboutMe />);
        break;
      case "Socials":
        setCurrentContent(<Socials />);
        break;
      // Add cases for other icons as needed
      default:
        setCurrentContent(null);
    }
  };

  if (isMaximized) {
    return (
      <AppLayout>{currentContent}</AppLayout>
    );
  }

  return (
    <div className={`main-widget ${isVisible ? 'visible' : ''}`}>
      <div className="top-search">
        <div className="search-icon">
          <CiSearch />
        </div>
        <input
          className='min-w-full p-3 rounded-md'
          type="text"
          placeholder="Type here to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <p className='font-semibold pt-7 pl-2'>Pinned</p>

      <div className="icons-widget">
        {filteredIcons.map((icon, index) => (
          <div className="div-icon" onClick={() => handleIconClick(icon.label)} key={index}>
            <img src={icon.src} alt={icon.label} />
            <p>{icon.label}</p>
          </div>
        ))}
      </div>

      <div className="main-bottom flex justify-between">
        <div className="user flex items-center align-baseline mt-44">
          <img className='h-14' src="Avatar.png" alt="" />
          <p className='font-semibold ml-2'>Muffakir Hamid</p>
        </div>
        <CiPower className='text-2xl mt-48 hover:cursor-pointer hover:scale-110' />
      </div>
    </div>
  );
}

export default MainWidget;