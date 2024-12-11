import React, { useEffect } from 'react'
import '../css/SignIn.css'

const SignIn = ({setIsLoggedIn }) => {
    useEffect(() => {
        const signInElement = document.querySelector('.sign-in-container');
        signInElement.classList.add('fade-in')  
    },[]);

    const handleSignIn = () => {
        setIsLoggedIn(true);
    }

  return (
    <div className='sign-in-container '>
       <div className="background-overlay   flex flex-col  items-center">
        <div className="flex flex-col items-center mt-52">
        <img  width={170} src={'Avatar.png'} alt="" />
        <h2 className='mt-4 font-medium text-3xl'>Muffakir Hamid</h2>
        <button onClick={handleSignIn} className=' font-medium mt-7 text-white text-xl'>Sign In</button>

        </div>
       </div>
    </div>
  )
}

export default SignIn