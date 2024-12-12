import React, { useState } from 'react';
import './MainScreen.css'; // Import the CSS file for styles
import MainWidget from '../widgets/MainWidget';
import { FaChevronUp  } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";




const MainScreen = () => {
    const [isWidgetVisible, setWidgetVisible] = useState(false);

    const toggleWidget = () => {
        setWidgetVisible(prevState => !prevState );
    };

    const getDate = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
  
      return `${day}/${month}/${year}`;
    };
  
    const getTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedHours = hours % 12 || 12;
      return `${formattedHours}:${minutes.toString().padStart(2, '0')}`;
    };
  
  return (
    <>
    <div onClick={() =>setWidgetVisible(false)} className="main-screen">
      
      


    </div>
    <div className="bottom">
        <div className="icons ml-80 ">
            <img onClick={toggleWidget} src="Logo.png" alt="" />
            <img src="search.png" onClick={toggleWidget} alt="" />
            <img src="working.png" onClick={toggleWidget} alt="" />
            <img src="github.png" onClick={toggleWidget} alt="" />
            <img src="digital-advertising.png" onClick={toggleWidget} alt="" />
            <img src="idea.png" onClick={toggleWidget} alt="" />
        </div>
        <div className="flex  gap-5">
            <div className="flex gap-4 items-center">
                <FaChevronUp className='text-2xl' />
                <CiCloudOn className='text-2xl'/>
                <FaWifi className='text-2xl'/>
                <GiSpeaker className='text-2xl'/>
            </div>

            <div className="flex  flex-col justify-center items-center ml-4">
                <p>{getDate()}</p>
                {/* <p>{getTime()}</p> */}
            </div>

        </div>
        {isWidgetVisible && <MainWidget   isVisible={isWidgetVisible}/>}
    </div>
    </>
  );
}

export default MainScreen;