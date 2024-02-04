import React from 'react'
import StepsForBuy from '../components/cartcomponents/StepsForBuy'
import { MapPin } from 'lucide-react'

const SelectAddress = () => {
	return (
		<div className='min-h-[800px]'>
			<div className='container text-center mx-auto mt-10'>
				<p className='text-3xl font-bold'>Select Address</p>
				<StepsForBuy />
			</div>
			<br></br>
			<br></br>

			<div className='container mx-auto grid grid-cols-3 mt-10'>
				<div className='p-5'>
					<div className='flex border border-[#a65c0f] bg-[#fdead6] p-5'>
						<MapPin size={45} strokeWidth={0.8} />
						<div className='mx-4'>
							<p className='mt-1 font-thin text-lg'>Home</p>
							<p className='mt-1 font-thin text-[14px]'>204 satyam apt ,haji malang road,Kalyan,Maharashtra,India</p>
						</div>
					</div>
				</div>
				<div className='p-5'>
					<div className='flex border border-[#a65c0f] bg-[#fdead6] p-5'>
						<MapPin size={45} strokeWidth={0.8} />
						<div className='mx-4'>
							<p className='mt-1 font-thin text-lg'>Home</p>
							<p className='mt-1 font-thin text-[14px]'>204 satyam apt ,haji malang road,Kalyan,Maharashtra,India</p>
						</div>
					</div>
				</div>
				<div className='p-5'>
					<div className='flex border border-[#a65c0f] bg-[#fdead6] p-5'>
						<MapPin size={45} strokeWidth={0.8} />
						<div className='mx-4'>
							<p className='mt-1 font-thin text-lg'>Home</p>
							<p className='mt-1 font-thin text-[14px]'>204 satyam apt ,haji malang road,Kalyan,Maharashtra,India</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SelectAddress