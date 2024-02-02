import { Facebook, Instagram, Mail, Youtube } from 'lucide-react'
import React from 'react'
import footer from '../images/footer-img.png'
const Footer = () => {
	return (
		<>
			<div className='mt-20 flex relative items-center justify-center '>
				<img src={footer} alt="error" className=' min-w-[370px] h-[170px] md:w-full md:h-full ' />
				<div className='text-center absolute'>
					<p className='text-4xl '>Join Our Newsletter</p>
					<p className='text-lg mt-4 flex '> Sign up for deals, new products and promotions </p>
					<div className='mt-7 flex p-2 md:min-w-[350px] ' style={{ borderBottom: '1px solid #808080' }}>
						<Mail size={33} strokeWidth={1.25} className='text-[#808080]' />
						<input placeholder='Email' className='mr-5 p-1 px-4 rounded-md border border-none border-gray-300 focus:border-none outline-none  ' />
						<p className='mt-1 md:ml-10 text-[#808080] '>Submit</p>
					</div>
				</div>
			</div>
			<div className='bg-[#121212] c'>
				<div className='container mx-auto md:flex md:justify-between p-5 pb-20' style={{ borderBottom: '1px  solid white' }}>
					<div className='flex mt-10 gap-5 text-white'>
						<p className='text-[24px] text-white'>3legant </p>
						<p className='w-[10px]' style={{ borderLeft: '1px  solid white' }} ></p>
						<p className='text-[20px] text-white font-extralight'> Gift & Decoration Store</p>
					</div>
					<div className='inline-block gap-10 md:flex  md:gap-7 mt-10 text-white'>
						<span className='mx-1'>Home </span>
						<span className='mx-1'>Shop </span>
						<span className='mx-1'>Product </span>
						<span className='mx-1'>Blog </span>
						<span className='mx-1'>Contact Us </span>
					</div>
				</div>
				<div className='container mx-auto md:flex md:justify-between mt-[-20px]'>
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
		</>
	)
}

export default Footer