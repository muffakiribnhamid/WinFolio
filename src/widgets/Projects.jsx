import React from 'react'

const Projects = () => {
  return (
    <div>
        <h1>Projects</h1>
        <div onClick={() => window.open("https://memey-six.vercel.app/")} className="project rounded-md hover:border-2 hover:border-black hover:cursor-pointer  project1">
          <img className='p-4' width={100} height={100} src="https://memey-six.vercel.app/mainicon.png" alt="" />
            <div className="flex flex-col mt-5 content-center">
              <h2 className='font-bold text-2xl text-black'>Memey</h2>
              <p> A Meme Generator App - React and Vite</p>

            </div>
        </div>
        <div onClick={() => window.open("https://mood-tracker-react-js.vercel.app/")} className="project rounded-md hover:border-2 hover:border-black hover:cursor-pointer  project1">
          <img className='p-4' width={100} height={100} src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f525.png" alt="" />
            <div className="flex flex-col mt-5 content-center">
              <h2 className='font-bold text-2xl text-black'>Mood Tracker</h2>
              <p>Track Mood of People Online - React and Firebase</p>

            </div>
        </div>
        <div onClick={() => window.open("https://tic-tac-toe-online-multiplayer-alpha.vercel.app/")} className="project rounded-md hover:border-2 hover:border-black hover:cursor-pointer  project1">
          <img className='p-4' width={90} height={100} src="https://cdn-icons-png.flaticon.com/512/5791/5791753.png" alt="" />
            <div className="flex flex-col mt-5 content-center">
              <h2 className='font-bold text-2xl text-black'>Tic Tac Toe Deluxe</h2>
              <p> A Modern UI based Tic Tac Toe Game - React</p>

            </div>
        </div>
    </div>
  )
}

export default Projects