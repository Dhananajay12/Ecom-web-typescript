import React, { useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import img from '../images/bed.png'
import img1 from '../images/back-shop.png'

import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';

function StarRating() {
	const stars = [];

	for (let i = 0; i < 5; i++) {
		stars.push(<span style={{ color: "#121212", fontSize: '25px' }} key={i}>&#9733;</span>);
	}

	return <div>{stars}</div>;
}


const Shop = () => {

	const [range, setRange] = useState(0)

	return (
		<>
			<div className='container flex relative items-center justify-center'>
				<img src={img1} alt='error' className='w-full' />
				<div className='text-center absolute'>
					<p className='text-xl text-gray-500'>Home  <span className='text-black'> {">"} Shop</span></p>
					<p className='text-3xl md:text-[50px] mt-5'>Shop Page</p>
					<p className='text-xl mt-10'>Let’s design the place you always imagined.</p>

				</div>
			</div>
			<div className='container grid grid-cols-1 md:grid-cols-4 mt-20'>
				<div className=' '>
					<p className='flex text-2xl font-bold '><SlidersHorizontal strokeWidth={1.5} size={24} className='mt-1 mr-2' /> Filter</p>

					<div className='mt-10'>
						<p className='text-xl font-bold'>CATEGORIES</p>
						<p className='text-md mt-4 text-gray-400'>Living Room</p>
						<p className='text-md mt-2 text-gray-400'>Bedroom</p>
						<p className='text-md mt-2 text-gray-400'>Kitchen</p>
						<p className='text-md  mt-2 text-gray-400'>Dinning</p>
						<p className='text-md  mt-2 text-gray-400'>Outdoor</p>
						<p></p>
						<p></p>
					</div>
					<div className='mt-10'>
						<p className='text-xl font-bold mt-4'>PRICE</p>
						<input type="range" min="0" className='w-[70%]' max="100000" value={range} onChange={(e) => setRange(parseInt(e.target.value))} step="0.5" />
						<p> 0 to {range} </p>
						{/* <p className='text-md mt-4 text-gray-400'>Filter</p>
						<p className='text-md mt-1 text-gray-400'>Filter<s/p>
						<p className='text-md  mt-1 text-gray-400'>Fislter</p> */}
					</div>
					<div className='mt-10'>
						<Button variant="secondary">Apply</Button>
					</div>
				</div>
				<div className='col-span-3'>
					<div className='flex justify-between'>
						<div>
							<p className='font-bold text-xl'>Living Room</p>
						</div>
						<div>
							<p className='flex'>Sort by <ChevronDown strokeWidth={1.5} /></p>
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
						<div>
							<div className="p-1">
								<Card className='border-none'>
									<img src={img} alt="error" className='bx-100 rounded' />
									<CardContent className="">
										<p className='flex mt-4 text-black'>
											<StarRating />
											{/* <Star style={{color:"black" , background:""}} /><Star /><Star /><Star /><Star /> */}
										</p>
										<p className='mt-` font-bold'>Loveseat Sofa</p>
										<p className='mt-2 font-bold'><span>$199.00</span> <s className='text-[#949494]  ml-1' >$199.00</s></p>
									</CardContent>
								</Card>
							</div>
						</div>
						<div>
							<div className="p-1">
								<Card className='border-none'>
									<img src={img} alt="error" className='bx-100 rounded' />
									<CardContent className="">
										<p className='flex mt-4 text-black'>
											<StarRating />
											{/* <Star style={{color:"black" , background:""}} /><Star /><Star /><Star /><Star /> */}
										</p>
										<p className='mt-` font-bold'>Loveseat Sofa</p>
										<p className='mt-2 font-bold'><span>$199.00</span> <s className='text-[#949494]  ml-1' >$199.00</s></p>
									</CardContent>
								</Card>
							</div>
						</div>
						<div>
							<div className="p-1">
								<Card className='border-none'>
									<img src={img} alt="error" className='bx-100 rounded' />
									<CardContent className="">
										<p className='flex mt-4 text-black'>
											<StarRating />
											{/* <Star style={{color:"black" , background:""}} /><Star /><Star /><Star /><Star /> */}
										</p>
										<p className='mt-` font-bold'>Loveseat Sofa</p>
										<p className='mt-2 font-bold'><span>$199.00</span> <s className='text-[#949494]  ml-1' >$199.00</s></p>
									</CardContent>
								</Card>
							</div>
						</div>
						<div>
							<div className="p-1">
								<Card className='border-none'>
									<img src={img} alt="error" className='bx-100 rounded' />
									<CardContent className="">
										<p className='flex mt-4 text-black'>
											<StarRating />
											{/* <Star style={{color:"black" , background:""}} /><Star /><Star /><Star /><Star /> */}
										</p>
										<p className='mt-` font-bold'>Loveseat Sofa</p>
										<p className='mt-2 font-bold'><span>$199.00</span> <s className='text-[#949494]  ml-1' >$199.00</s></p>
									</CardContent>
								</Card>
							</div>
						</div>
						<div>
							<div className="p-1">
								<Card className='border-none'>
									<img src={img} alt="error" className='bx-100 rounded' />
									<CardContent className="">
										<p className='flex mt-4 text-black'>
											<StarRating />
											{/* <Star style={{color:"black" , background:""}} /><Star /><Star /><Star /><Star /> */}
										</p>
										<p className='mt-` font-bold'>Loveseat Sofa</p>
										<p className='mt-2 font-bold'><span>$199.00</span> <s className='text-[#949494]  ml-1' >$199.00</s></p>
									</CardContent>
								</Card>
							</div>
						</div>
						<div>
							<div className="p-1">
								<Card className='border-none'>
									<img src={img} alt="error" className='bx-100 rounded' />
									<CardContent className="">
										<p className='flex mt-4 text-black'>
											<StarRating />
											{/* <Star style={{color:"black" , background:""}} /><Star /><Star /><Star /><Star /> */}
										</p>
										<p className='mt-` font-bold'>Loveseat Sofa</p>
										<p className='mt-2 font-bold'><span>$199.00</span> <s className='text-[#949494]  ml-1' >$199.00</s></p>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Shop