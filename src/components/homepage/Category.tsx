import React from 'react'
import couch from '../../images/couch.png'
import bedroom from '../../images/bedroom.png'
import kitchen from '../../images/kitchen.png'


const Category = () => {
	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-1 lg:grid-cols-2 p-4'>
				<div className='text-center'>
					<p className='lg:text-[70px]'>Simply Unique</p>
					<p className='lg:text-[70px]'>Simply Better</p>
				</div>
				
				<div className='text-center '>
					<p className='lg:text-lg p-20 text-[#787878]'>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</p>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				<div className='flex relative p-4'>
					<img src={couch} alt="" className='w-full' />
		
					<div className='absolute p-10'>
						<p className='text-3xl'>Living Room</p>
						<p className='text-md mt-2'>Shop Now {"->"}</p>
					</div>
				</div>
				<div>
					<div className='flex relative p-4'>
						<img src={bedroom} alt="" className='w-full' />
						<div className='absolute p-10'>
							<p className='text-3xl'>Bedroom</p>
							<p className='text-md mt-2'>Shop Now {"->"}</p>
						</div>
					</div>
					<div className='flex relative p-4'>
						<img src={kitchen} alt="" className='w-full' />
						<div className='absolute p-10'>
							<p className='text-3xl'>Kitchen</p>
							<p className='text-md mt-2'>Shop Now {"->"}</p>
						</div>
					</div>
				
				</div>
			</div>
		</div>
	)
}

export default Category