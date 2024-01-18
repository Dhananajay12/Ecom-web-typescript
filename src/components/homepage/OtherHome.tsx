import { LockKeyhole, MoveRight, Phone, Truck, Wallet } from 'lucide-react'
import img from '../../images/small-banner.png'
import bed1 from '../../images/hall.png'
import bed2 from '../../images/tables.png'
import bed3 from '../../images/bed.png'

import { useEffect, useRef } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css";


const OtherHome = () => {

	const ref = useRef<HTMLInputElement>(null)
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	useEffect(()=>{
		ref.current?.focus();
	},[ref])

	return (
		<>
			<div className='container mx-auto mt-10'>
				<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3'>
					<div className='p-10 bg-[#eaeaea] rounded-lg'>
						<Truck strokeWidth={1.25} size={50} />
						<div className='mt-5'>
							<p>Free Shipping</p>
							<p className='text-[#8d8d8d] mt-1'>Order above $200</p>
						</div>
					</div>

					<div className='p-10 bg-[#eaeaea] rounded-lg' >
						<Wallet strokeWidth={1.25} size={50} />
						<div className='mt-5'>
							<p>Money-back</p>
							<p className='text-[#8d8d8d] mt-1'>30 days guarantee</p>
						</div>
					</div>

					<div className='p-10 bg-[#eaeaea] rounded-lg' >

						<LockKeyhole strokeWidth={1.25} size={50} />
						<div className='mt-5'>
							<p>Secure Payment</p>
							<p className='text-[#8d8d8d] mt-1'>Secured by stripe</p>
						</div>
					</div>

					<div className='p-10 bg-[#eaeaea] rounded-lg' >

						<Phone strokeWidth={1.25} size={50} />
						<div className='mt-5'>
							<p>24/7 Support</p>
							<p className='text-[#8d8d8d] mt-1'>Phone And Email support</p>
						</div>
					</div>

				</div>
			</div>
			<br></br>
			<div className='grid grid-cols-1 lg:grid-cols-2 mt-20'>
				<div>
					<img src={img} alt="error" className='w-full' />
				</div>
				<div className="flex items-center justify-center h-full">
					<div className="">
						<p className='text-[20px] text-blue-600'>SALE UP TO 35% OFF</p>
						<p className='mt-4 text-[50px]'>HUNDREDS of <br /> New lower prices!</p>
						<p className='mt-4 text-[20px] text-[#7d7d7d] '>It’s more affordable than ever to give every <br /> room in your home a stylish makeover</p>
						<p className='mt-4 text-[20px] flex max-w-[145px] pb-2' style={{ borderBottom: '1px solid black' }}>Shop Now <MoveRight className='mx-2 mt-1' /></p>
					</div>
				</div>
			</div>
			<div className='container mx-auto mt-20'>
				<div className='flex justify-between '>
					<p className='text-[35px]'>Articles</p>
					<p className='flex mt-5' style={{ borderBottom: '1px solid black' }}>More Articles <MoveRight className='mx-2' /></p>

				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7'>
					<div data-aos="fade-right" data-aos-duration="5000">
						<img src={bed1} alt="error" className='w-full' />
						<div className='mx-2 mt-2'>

							<p className='mt-7 text-xl'>7 ways to decor your home</p>
							<p className='flex mt-2 max-w-[128px] pb-1' style={{ borderBottom: '1px solid black' }}>Read More <MoveRight className='mx-2 ' /></p>
						</div>

					</div>
					<div data-aos="fade-up" data-aos-duration="5000">
						<img src={bed2} alt="error" className='w-full' />
						<div className='mx-2 mt-2'>

							<p className='mt-7 text-xl'>Kitchen organization</p>
							<p className='flex mt-2 max-w-[128px] pb-1' style={{ borderBottom: '1px solid black' }}>Read More <MoveRight className='mx-2 ' /></p>
						</div>
					</div>
					<div data-aos="fade-left" data-aos-duration="5000">
						<img src={bed3} alt="error" className='w-full' />
						<div className='mx-2 mt-2'>
							<p className='mt-7 text-xl'>Decor your bedroom</p>
							<p className='flex mt-2 max-w-[128px] pb-1' style={{ borderBottom: '1px solid black' }}>Read More <MoveRight className='mx-2 ' /></p>
						</div>
					</div>
				</div>
			</div>
	
		</>
	)
}

export default OtherHome