import React from 'react';
const wallpaper = '/wallpaper1.png';

//function to get time in 12 hour format 

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, '0')}`;
};


//function  day name with current month and date

const getDayName = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};
const LockScreen = () => {
  return (
    <div className='lock-screen'>
      <div className='background-image'></div>
      <style jsx>{`
        .lock-screen {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${wallpaper});
          background-size: cover;
          background-position: center;
          filter: blur(5px);
          z-index: -1;
        }
        .text-container {
          margin-top: 20px;
          z-index: 1;
        }
      `}</style>
      <div className='text-container'>
        <div className="flex flex-col mt-28 items-center ">
          <p className='text-white text-8xl  font-semibold'>{getTime()}</p>
          <p className='text-white text-xl'>{getDayName()}</p>

          <p className='text-white pt-64'>Press anywhere to unlock!</p>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;