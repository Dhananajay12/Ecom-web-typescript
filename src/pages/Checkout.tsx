import StepsForBuy from '../components/cartcomponents/StepsForBuy'
import { BadgePercent, Truck } from 'lucide-react'
import { Label } from '../components/ui/label'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import img from '../images/bed.png'
import truck from '../images/truck.png'


const Checkout = () => {
	return (
		<>
			<div className='container text-center mx-auto mt-10'>
				<p className='text-3xl font-bold'>Checkout</p>
				<StepsForBuy />
			</div>
			<div className='container mx-auto'>
				<div className='grid grid-cols-3 mt-5 md:mt-20'>
					<div className='col-span-3 md:col-span-2 md:px-4'>
						<div className='mt-4 border border-gray-400 rounded p-4'>
							<div className=' font-bold text-xl flex'>Payment method</div>
							<RadioGroup defaultValue="option-one" className='mt-5'>
								<div className="mt-2 flex items-center space-x-2 border border-[#121212] p-3 rounded cursor-pointer">
									<RadioGroupItem value="option-one" id="option-one" />
									<Label htmlFor="option-one" className='text-lg cursor-pointer'>
										Card , NetBanking  and UPI
									</Label>
								</div>
								<div className="mt-2 flex items-center space-x-2  border border-[#121212] p-3 rounded cursor-pointer">
									<RadioGroupItem value="option-two" id="option-two" />
									<Label htmlFor="option-two" className='text-lg cursor-pointer'>Cash on delivery</Label>
								</div>
							</RadioGroup>
							<button className='bg-[#121212] text-white mt-6 px-10 p-2 w-full rounded' >Place Order</button>
						</div>
					</div>
					<div className='col-span-3 md:col-span-1'>
						<div className='mt-4 border border-gray-400 rounded p-4 flex'>
							{/* <Truck size={40} strokeWidth={1.5} /> */}
							<img src={truck} className='w-[55px]' />
							<div className='mx-2 mt-1'>
								<p className='font-bold text-md'>Estimate Delivery </p>
								<p className=''>Tomorrow , Feb 5th ,2024 </p>
							</div>
						</div>
						<div className='mt-4 rounded p-5 bg-green-200'>
							<p className='font-bold text-lg text-green-900'>$18 total saving off</p>
							<p className='text-green-900'>with CODE20 coupon</p>
						</div>
						<div className='mt-4 border border-gray-400 rounded p-4'>
							<div className=' font-bold text-xl '>Order Summary</div>
							<div className='flex justify-between  mt-6'>
								<div className='flex'>
									<img src={img} alt="error" className='w-[80px] rounded' />
									<div className='mx-2 inline-block'>
										<p>Trey Table</p>
										<p>qty : 2</p>
									</div>
								</div>
								<p>₹13.00</p>
							</div>
							<div className='flex justify-between  mt-5'>
								<div className='flex'>
									<img src={img} alt="error" className='w-[80px] rounded' />
									<div className='mx-2'>
										<p className=''>Trey Table</p>
										<p className='mt-1'>qty : 2</p>
									</div>
								</div>
								<p>₹13.00</p>
							</div>
							<div className='flex justify-between  mt-5'>
								<div className='flex'>
									<img src={img} alt="error" className='w-[80px] rounded' />
									<div className='mx-2'>
										<p className=''>Trey Table</p>
										<p className='mt-1'>qty : 2</p>
									</div>
								</div>
								<p>₹13.00</p>
							</div>
						
							<p className='mt-2 border-b border-gray-500'></p>
							<div className='flex justify-between  mt-3'>
			
								<p>Total</p>
						
								<p>₹13.00</p>
							</div>
							<button className='bg-[#121212] text-white mt-6 px-10 p-2 w-full rounded' >Checkout</button>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default Checkout