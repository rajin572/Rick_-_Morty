import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../media/Logo.png'

const Logo = () => {
  return (
    <div className=' flex justify-center items-center pt-5'>
        <Link to='/home'><img src={logo} alt="" className=' h-12 w-56'/></Link>
    </div>
  )
}

export default Logo