import React from 'react'
import logo from '../../../media/Logo.png'

const Logo = () => {
  return (
    <div className=' flex justify-center items-center pt-5'>
        <img src={logo} alt="" className=' h-12 w-56'/>
    </div>
  )
}

export default Logo