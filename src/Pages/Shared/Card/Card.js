import React from 'react'
import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

const Card = ({props}) => {
  return (
			<div className=' card'>
				<div className='p-4 flex flex-col justify-center items-center gap-8 '>
					<img className='rounded-xl h-[200px] w-[280px]' src={props.image} alt=''/>
					<p className='pl-2 self-start text-h4 font-[600] max-w-[150px]'>
						{props.name}
					</p>
				</div>
			</div>
  )
}

export default Card