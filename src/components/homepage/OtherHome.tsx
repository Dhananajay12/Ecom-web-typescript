import { Truck } from 'lucide-react'
import React from 'react'

const OtherHome = () => {
	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4'>
				<div className=''>
					<Truck strokeWidth={1.25}  style={{fontSize:'20px'}} />
					<div>
						<p>Free Shipping</p>
						<p>Order above $200</p>
					</div>
				</div>

				<div className=''>
					<Truck strokeWidth={1.25} size={25} />
					<div>
						<p>Free Shipping</p>
						<p>Order above $200</p>
					</div>
				</div>

				<div className=''>
					<Truck strokeWidth={1.25} size={25} />
					<div>
						<p>Free Shipping</p>
						<p>Order above $200</p>
					</div>
				</div>

				<div className=''>
					<Truck strokeWidth={1.25} size={30} />
					<div>
						<p>Free Shipping</p>
						<p>Order above $200</p>
					</div>
				</div>

			</div>
		</div>
	)
}

export default OtherHome