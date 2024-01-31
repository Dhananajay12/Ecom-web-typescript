import React from 'react'
import StepsForBuy from '../components/cartcomponents/StepsForBuy'
import img from '../images/bed.png'
import { BadgePercent } from 'lucide-react'


const Cart = () => {
	return (
		<div className='container text-center mx-auto mt-10'>
			<p className='text-3xl font-bold'>Cart</p>
			<StepsForBuy />
			<br></br>
			<br></br>
			<div className='grid grid-cols-3 mt-10'>
				<div className='col-span-3 md:col-span-2'>
					<table style={{ width: "100%" }}>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Subtotal</th>
						</tr>
						<br></br>
						<br></br>
						<tr className='mt-4'>
							<td className='flex  justify-center s'>
								<img src={img} alt="error" className='w-[100px] rounded' />

							</td>
							<td><div> - 1 + </div></td>
							<td>$199</td>
							<td>$999</td>

						</tr>
						<br></br>
						<tr className='mt-4'>
							<td className='flex  justify-center s'>
								<img src={img} alt="error" className='w-[100px]' />
							</td>
							<td><div> - 1 + </div></td>
							<td>$199</td>
							<td>$999</td>
						</tr>
					</table>
				</div>
				<div className='col-span-3 md:col-span-1   '>
					<div className=''>
						<p className='flex font-bold'>Have a coupon?</p>
						<p className='flex text-gray-500 mt-2'>Add your cade for an instant cart discount</p>
						<div>
							<div className='mt-7 flex p-2 min-w-[400px] rounded' style={{ border: '1px solid #808080' }}>
								<BadgePercent size={33} strokeWidth={1.25} className='text-[#808080]' />
								<input placeholder='Coupon code' className='mr-5 p-1 px-4 rounded-md border border-none border-gray-300 focus:border-none outline-none  ' />
								<p className='mt-1 ml-20 text-[#808080] '>Submit</p>
							</div>
						</div>
					</div>
					<div className='mt-4 border border-gray-400 rounded p-4'>
						<div className=' font-bold text-xl '>Cart summary</div>
						<div className='flex justify-between mt-10'>
							<p>Subtotal</p>
							<p>$1213.00</p></div>
						<div className='flex justify-between mt-5'>
							<p>Shipping Charges</p>
							<p>$1213.00</p>
						</div>
						<button className='bg-[#121212] text-white mt-10 px-10 p-2 w-full rounded' >Checkout</button>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Cart