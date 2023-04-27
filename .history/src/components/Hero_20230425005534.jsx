// import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <headder className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
      
            <button
                type='button'
                onClick={()=>window.open('https://github.com/dmaxwell7')}
                class
            >
                GitHub
            </button>
        </nav>
    </headder>
  )
}

export default Hero
