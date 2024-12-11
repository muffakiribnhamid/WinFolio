import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4 text-red-500'>Here are some of my projects:</h1>
      <p className='text-2xl cursor-pointer project-item transition duration-300 ease-in-out hover:border hover:border-black hover:rounded-lg hover:p-1'>
        <span className='text-red-500'><a href="https://memeify-muffakir.netlify.app/">Memeify</a></span>: A next-level terminal UI meme generator
      </p>
      <p className='text-2xl mt-3 cursor-pointer project-item transition duration-300 ease-in-out hover:border hover:border-black hover:rounded-lg hover:p-1'>
        <span className='text-red-500'><a href="https://mood-tracker-muffakir.netlify.app/">Mood Tracker</a></span>: A Mood Tracker Social App Made Using Firebase
      </p>
      <p className='text-2xl mt-3 cursor-pointer project-item transition duration-300 ease-in-out hover:border hover:border-black hover:rounded-lg hover:p-1'>
        <span className='text-red-500'><a href="https://muffakir-tic-tac-toe.netlify.app/">Tic Tac Toe</a></span>: A Tic Tac Toe Game Made With Cool Design and AI Mode
      </p>
    </div>
  );
}

export default Projects;