import React, { useEffect } from 'react'
import couch from '../../images/couch.png'
import bedroom from '../../images/bedroom.png'
import kitchen from '../../images/kitchen.png'
import { MoveRight } from 'lucide-react'

import Aos from 'aos'
import "aos/dist/aos.css";

const Category = () => {

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);


	return (
		<div className='container mt-10 p-0'>

			<div className='grid grid-cols-1 lg:grid-cols-2 md:p-4'>
				<div className='text-center'>
					<p className='lg:text-[70px]'>Simply Unique</p>
					<p className='lg:text-[70px]'>Simply Better</p>
				</div>

				<div className='text-center'>
					<p className='lg:text-lg mt-5  lg:mt-0 lg:p-20 text-[#787878]'>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:mt-10'>
				<div className='col-span-1 md:col-span-1 flex relative p-4' data-aos="fade-right" data-aos-duration="5000">
					<img src={couch} alt="" className=' mt-10 lg:mt-0' />
					<div className='absolute p-10'>
						<p className='text-xl lg:text-3xl'>Living Room</p>
						<p className='text-md mt-2 flex pb-2 max-w-[125px]' style={{ borderBottom: '1px solid black' }}>Shop Now  <MoveRight className='mx-2' /></p>
					</div>
				</div>
				<div className='col-span-1 md:col-span-1' data-aos="fade-right" data-aos-duration="5000">
					<div className='flex relative p-4 col-span-1'>
						<img src={bedroom} alt="" className='' />
						<div className='absolute p-10 '>
							<p className='text-md md:text-3xl'>Bedroom</p>
							<p className='text-[13px]  md:text-md mt-2 flex pb-2  max-w-[65px] md:max-w-[125px]' style={{ borderBottom: '1px solid black' }}>Shop Now  <MoveRight className='mx-2 ' /></p>
						</div>
					</div>
					<div className='flex relative p-4 col-span-1' >
						<img src={kitchen} alt="" className='' />
						<div className='absolute p-10'>
							<p className='text-md md:text-3xl'>Kitchen</p>
							<p className='text-sm text-md mt-2 flex pb-2 max-w-[65px] md:max-w-[125px]' style={{ borderBottom: '1px solid black' }}>Shop Now  <MoveRight className='mx-2 ' /></p>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Category