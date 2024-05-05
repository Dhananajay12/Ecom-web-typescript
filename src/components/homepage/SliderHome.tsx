import { Card, CardContent } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import { MoveRight, } from 'lucide-react'
import { Product } from '../../model/productModel'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import instance from "../../apicall/AuthFunction"
import { IProductMultipleResponse } from "../../model/HomeModel"

export function StarRating({ starNumber }: any) {
	const stars = [];


	for (let i = 0; i < starNumber; i++) {
		stars.push(<span style={{ color: "#121212", fontSize: '25px' }} key={i}>&#9733;</span>);
	}

	return <div >{stars}</div>;
}

const SliderHome = () => {
	const [products, setProducts] = useState<Product[]>();
	const [loading, setLoading] = useState<boolean>(true);


	const fetchProduct = async () => {
		await instance.get('/products')
			.then(({ data }: { data: IProductMultipleResponse }) => {
				if (data.statusCode === 200) {
					setProducts(data.data)
					setLoading(false)
				}
			})
			.catch((err: any) => err);
	};

	useEffect(() => {
		fetchProduct()
		return () => {
		};
	}, []);



	return (
		<div className='container mt-10  lg:px-10' >
			<div className='flex justify-between '>
				{loading ? <Skeleton className="h-[20px] w-[150px] rounded bg-[#cacaca]" /> : <p className='text-xl lg:text-[35px]'>New Arrivals</p>}
				{loading ?<Skeleton className="h-[20px] w-[150px] rounded bg-[#cacaca]"/>: <p className='flex mt-1 lg:mt-5 text-[13px]' style={{ borderBottom: '1px solid black' }}>More Products <MoveRight className='mx-2 ' /></p>}
			</div>

			{loading ?
				<>
					<Carousel
						opts={{
							align: "start",
						}}
						className="w-[95%] lg:w-full mt-5 mb-4 ml-[6px]"
					>
						<CarouselContent>
							{Array.from({ length: 4 }).map((_, index) => (
								<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
									<Skeleton className="h-[200px] w-[100%] rounded bg-[#cacaca]"/>
									<Skeleton className="h-[20px] w-[100%] rounded mt-2 bg-[#cacaca]" />
									<Skeleton className="h-[70px] w-[100%] rounded mt-2 bg-[#cacaca]" />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</>
				:
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-[95%] lg:w-full mt-5 mb-4 ml-[6px]"
				>
					<CarouselContent>
						{products?.map((items: Product) => (
							<CarouselItem key={items._id} className="md:basis-1/2 lg:basis-1/4 ">
								<Link to={`/singleproduct/${items._id}`}>
									<div className="p-1">
										<Card className='border-none'>
											<img style={{ width: "20rem" }} src={items.gallery[0]} alt="error" className='bx-100 rounded w-100' />
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
			}
		</div>
	)
}

export default SliderHome