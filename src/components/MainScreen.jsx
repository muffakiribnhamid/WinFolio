import React, { useState } from 'react';
import './MainScreen.css'; // Import the CSS file for styles
import MainWidget from '../widgets/MainWidget';

const MainScreen = () => {
    const [isWidgetVisible, setWidgetVisible] = useState(false);

    const toggleWidget = () => {
        setWidgetVisible(prevState => !prevState );
    };
  return (
    <>
    <div className="main-screen">

    </div>
    <div className="bottom">
        <div className="icons ">
            <img onClick={toggleWidget} src="Logo.png" alt="" />
            <img src="search.png" onClick={toggleWidget} alt="" />
            <img src="Files.png" alt="" />
            <img src="microsoft-edge.png" alt="" />
            <img src="power.png" alt="" />
            <img src="word.png" alt="" />



        </div>
        {isWidgetVisible && <MainWidget isVisible={isWidgetVisible}/>}
    </div>
    </>
  );
}

export default MainScreen;