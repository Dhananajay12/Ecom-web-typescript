import React from 'react'
import { Card, CardContent } from "../ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import { MoveRight, Star } from 'lucide-react'
import img from '../../images/bed.png'

function StarRating() {
	const stars = [];

	for (let i = 0; i < 5; i++) {
		stars.push(<span style={{ color: "#121212", fontSize: '25px' }} key={i}>&#9733;</span>);
	}

	return <div>{stars}</div>;
}
const SliderHome = () => {
	return (
		<div className='container mt-10' >
			<div className='flex justify-between '>
				<p className='text-[35px]'>New Arrivals</p>
				<p className='flex mt-5' style={{borderBottom:'1px solid black'}}>More Products <MoveRight className='mx-2 ' /></p>

			</div>

			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full mt-5 mb-4"
			>
				<CarouselContent>
					{Array.from({ length: 8 }).map((_, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
							<div className="p-1">
								<Card className='border-none'>
									<img src={img} alt="error" className='bx-100 rounded'/>
									<CardContent className="">
										<p className='flex mt-4 text-black'>
											<StarRating  />
											{/* <Star style={{color:"black" , background:""}} /><Star /><Star /><Star /><Star /> */}
											</p>
										<p className='mt-` font-bold'>Loveseat Sofa</p>
										<p className='mt-2 font-bold'><span>$199.00</span> <s className='text-[#949494]  ml-1' >$199.00</s></p>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default SliderHome