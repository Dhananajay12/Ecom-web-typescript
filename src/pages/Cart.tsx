import React from 'react'
import StepsForBuy from '../components/cartcomponents/StepsForBuy'

const Cart = () => {
	return (
		<div className='container text-center mx-auto mt-10'>
			<p className='text-3xl font-bold'>Cart</p>
			<StepsForBuy />
			<br></br>
			<br></br>
			<div className='grid grid-cols-3 mt-10'>
				<div className='col-span-2'>
					<table style={{ width: "100%" }}>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Subtotal</th>
						</tr>
						<br></br>
						<br></br>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
							<td>Germany</td>

						</tr>
						<tr>
							<td>Centro comercial Moctezuma</td>
							<td>Francisco Chang</td>
							<td>Mexico</td>
							<td>Mexico</td>
						</tr>
					</table>
				</div>
				<div className='col-span-1 px-2'>
					  Cart summary
					<div className='mt-4 font-bold'>Free Shippings</div>

					<div className='flex justify-between mt-4'>
						<p>Subtotal</p>
						<p>$1213.00</p></div>
					<div className='flex justify-between mt-4'>
						<p>Subtotal</p>
						<p>$1213.00</p>
					</div>
					<div>Pick up</div>

					<button className='bg-[#121212] text-white mt-10 px-10 p-2 w-full rounded' >Checkout</button>
				</div>
			</div>
		</div>
	)
}

export default Cart