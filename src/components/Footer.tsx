import { Facebook, Instagram, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
	return (
		<div className='bg-[#121212]'>
			<div className='container mx-auto flex justify-between p-5 pb-20' style={{ borderBottom: '1px  solid white' }}>
				<div className='flex mt-10 gap-5 text-white'>
					<p className='text-[24px] text-white'>3legant </p>
					<p className='w-[10px]' style={{borderLeft:'1px  solid white'}} ></p>
					<p className='text-[20px] text-white font-extralight'> Gift & Decoration Store</p>
				</div>
				<div className='flex gap-7 mt-10 text-white'>
					<p style={{fontWeight:'font'}}>Home </p>
					<p>Shop </p>
					<p>Product </p>
					<p>Blog </p>
					<p>Contact Us </p>
				</div>
			
			</div>
			<div className='container mx-auto flex justify-between mt-[-20px]'>
				<div className='flex mt-10 gap-5 text-white'>
					<p className='text-[15px] text-[#cacaca] '>Copyrigth 2023 3legant. All rights researved </p>
					<p className='' >Privacy Policy </p>
					<p className=' text-white font-extralight'>Teams of Use</p>
				</div>
				<div className='flex gap-7 mt-10 text-white'>
					<Instagram />
					<Facebook />
					<Youtube />
				</div>
			</div>
			<br></br>
			<br></br>

		</div>
	)
}

export default Footer