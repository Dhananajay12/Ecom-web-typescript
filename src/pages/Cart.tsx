import React from 'react'
import StepsForBuy from '../components/cartcomponents/StepsForBuy'

const Cart = () => {
	return (
		<div className='text-center mx-auto mt-10'>
			<p className='text-3xl font-bold'>Cart</p>
			
			<StepsForBuy />
		</div>
	)
}

export default Cart