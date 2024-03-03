import { Card, CardContent } from "../ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import { MoveRight,  } from 'lucide-react'
import { productData } from '../../data/productData'
import { product } from '../../model/productModel'
import { Link } from 'react-router-dom'

export function StarRating({ starNumber }: any) {
	const stars = [];


	for (let i = 0; i < starNumber; i++) {
		stars.push(<span style={{ color: "#121212", fontSize: '25px' }} key={i}>&#9733;</span>);
	}

	return <div>{stars}</div>;
}

const SliderHome = () => {
	return (
		<div className='container mt-10  lg:px-10' >
			<div className='flex justify-between '>
				<p className='text-xl lg:text-[35px]'>New Arrivals</p>
				<p className='flex mt-1 lg:mt-5 text-[13px]' style={{ borderBottom: '1px solid black' }}>More Products <MoveRight className='mx-2 ' /></p>
			</div>

			<Carousel
				opts={{
					align: "start",
				}}
				className="w-[95%] lg:w-full mt-5 mb-4 ml-[6px]"
			>
				<CarouselContent>
					{productData.map((items: product) => (
						<CarouselItem key={items.id} className="md:basis-1/2 lg:basis-1/4">
							<Link to={`/singleproduct/${items.id}`}>
								<div className="p-1">
									<Card className='border-none'>
										<img src={items.img} alt="error" className='bx-100 rounded' />
										<CardContent className="">
											<p className='flex mt-4 text-black'>

												<StarRating starNumber={items.star} />
												{/* <Star style={{color:"black" , background:""}} /><Star /><Star /><Star /><Star /> */}
											</p>
											<p className='mt-` font-bold'>{items.name}</p>
											<p className='mt-2 font-bold'><span>${items.salePrice}</span> <s className='text-[#949494]  ml-1' >${items.price}</s></p>
										</CardContent>
									</Card>
								</div>
							</Link>
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