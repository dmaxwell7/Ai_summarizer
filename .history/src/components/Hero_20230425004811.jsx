// import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <headder className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo} alt='sumz' />
        </nav>
    </headder>
  )
}

export default Hero
