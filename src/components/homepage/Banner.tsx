import React from 'react'
import img from '../../images/Banner.png'
const Banner = () => {
	return (
		<div className='container mx-auto p-0'>
			<img src={img} alt='banner' className='w-full' />
		</div>
	)
}

export default Banner