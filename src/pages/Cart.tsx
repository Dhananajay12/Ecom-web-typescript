import React, { useEffect } from 'react'
import StepsForBuy from '../components/cartcomponents/StepsForBuy'
import img from '../images/bed.png'
import { BadgePercent, Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { add, decrease, getTotals, remove } from '../store/cartSlice'
import { Product } from '../model/ProductModel'
import './Cart.css'

const Cart = () => {

	const { cartItem, subTotal, total, shipping } = useSelector((state: RootState) => state?.cartReducer);

	const dispatch = useDispatch();
	
	const handleDecrease = (product: any) => {
		dispatch(decrease(product));
	};

	const handleAdd = (product:any) => {
		let items = {
			...product,
			quantity: 1,
		};
		dispatch(add(items))
	}
	const handleRemove = (product: any) => {
		dispatch(remove(product))
	}

	useEffect(() => {
		dispatch(getTotals({ shippingCharges: 39 }));

	}, [cartItem])

	return (
		<>

			<div className='container  mx-auto mt-10'>
				<p className='text-3xl font-bold'>Cart</p>
				<StepsForBuy />
				<br></br>
				<br></br>

				<div className='grid grid-cols-3 mt-5 md:mt-10'>

					<div className='col-span-3 md:col-span-2 px-4'>



						
							{cartItem?.length > 0 && cartItem?.map((item: any) => (
								<>
									<div className='grid grid-cols-12'>
										<div className='col-span-12 mt-2  md:col-span-9 flex '>
											{item?.gallery?.length > 0 && <img src={item?.gallery[0]} alt="error" className='w-[100px] rounded' />}
											<div className='mx-5'>
												<p className='flex justify-start font-bold'>{item.name}</p>
												<p className='text-[16px] mt-1'>{item.description?.slice(0,50) + '...'} </p>
											</div>
										</div>
										<div className='col-span-12 mt-5 md:col-span-3 flex justify-between'>
											<div className=' mt-1'>${item?.salePrice}</div>

											<div className=' increase-decrease-button-style py-4'>
												<button onClick={() => handleDecrease(item)} className='mx-3 text-[20px]  text-[#7a7a7a] border-none'> - </button>
												<span className='text-[18px]'>
													{item.quantity}
												</span>
												<button onClick={() => handleAdd(item)} className='mx-3 text-[20px]  text-[#7a7a7a] border-none' >+</button>
											</div>
											<div className=' md:col-span-1 mt-1'>
												<button onClick={() => handleRemove(item)}><Trash2 strokeWidth={0.75} /></button>
											</div>
										</div>
								
									</div>
									<br></br>
								</>
							))} 


				
						{/* <table style={{ width: "100%" }}>
							<tr className=''>
								<th>Product</th>
								<th>Quantity</th>
								<th>Price</th>

							</tr>

							<br></br>
							<br></br>
							{cartItem?.length > 0 && cartItem?.map((item: any) => (
								<>
									<tr className='mt-4'>
										<td className='flex  justify-center s'>
											{item?.gallery?.length > 0 && <img src={item?.gallery[0]} alt="error" className='w-[100px] rounded' />}
										</td>
										<td><div> 
											<button onClick={() => handleDecrease(item)}> - </button>
											{item.quantity} 
											<button onClick={() => handleAdd(item)}></button>
											 </div></td>
										<td>${item?.salePrice}</td>

									</tr>
									<br></br>
								</>
							))}


						</table> */}
					</div>
					<div className='col-span-3 md:col-span-1   '>
						<div className='mt-10 md:mt-0'>
							<p className='flex font-bold'>Have a coupon?</p>
							<p className='flex text-gray-500 mt-2 '>Add your cade for an instant cart discount</p>
							<div>
								<div className='mt-7 flex p-2  rounded' style={{ border: '1px solid #808080' }}>
									<BadgePercent size={33} strokeWidth={1.25} className='text-[#808080]' />
									<input placeholder='Coupon code' className='mr-5 p-1 px-4 rounded-md border border-none border-gray-300 focus:border-none outline-none  ' />
									<p className='mt-1 ml-[-20px] md:ml-20 text-[#808080] '>Submit</p>
								</div>
							</div>
						</div>
						<div className='mt-4 border border-gray-400 rounded p-4'>
							<div className=' font-bold text-xl '>Cart summary</div>
							<div className='flex justify-between mt-10'>
								<p>Subtotal</p>
								<p>₹{subTotal}</p></div>
							<div className='flex justify-between mt-5'>
								<p>Shipping Charges</p>
								<p>₹{shipping}</p>
							</div>
							<div className='flex justify-between mt-5 '>
								<p className='text-green-600'>Discount</p>
								<p className='text-green-600'>-₹13.00</p>
							</div>
							<p className='mt-4 border-b border-gray-500'></p>
							<div className='flex justify-between mt-5'>
								<p >Total</p>
								<p>₹{total}</p>
							</div>
							<button className='bg-[#121212] text-white mt-6 px-10 p-2 w-full rounded' >Checkout</button>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</>

	)
}

export default Cart
