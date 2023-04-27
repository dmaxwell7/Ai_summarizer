// import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <headder className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
      
            <button
                type='button'
                onClick={()=>window.open('https://github.com/dmaxwell7')}
                className='black_btn'
            >
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br />
            
        </h1>
    </headder>
  )
}

export default Hero
