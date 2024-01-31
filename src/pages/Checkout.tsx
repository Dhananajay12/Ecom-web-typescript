import React from 'react'
import StepsForBuy from '../components/cartcomponents/StepsForBuy'

const Checkout = () => {
	return (
		<div className='text-center mx-auto mt-10'>
			<p className='text-3xl font-bold'>Checkout</p>
			<StepsForBuy/>
		</div>
	)
}

export default Checkout