import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../model/productModel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import { Heart } from 'lucide-react';
import SliderHome, { StarRating } from '../components/homepage/SliderHome';
import Review from '../components/reviewComponents/Review';
import { IProductSingleResponse } from '../model/HomeModel';
import instance from '../apicall/AuthFunction';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/swiper-bundle.css';
import { Skeleton } from '../components/ui/skeleton';
import './singleproductstyle.css'
// SwiperCore.use([FreeMode, Navigation, Thumbs, EffectFade, Pagination]);
const SingleProduct = () => {

	const { id } = useParams()
	const [product, setProduct] = useState<Product>();
	const [thumbsSwiper, setThumbsSwiper] = useState();
	const [loading, setLoading] = useState(true);

	const fetchProduct = async () => {
		await instance.get(`/products/getById/${id}`)
			.then(({ data }: { data: IProductSingleResponse }) => {
				if (data.statusCode === 200) {
					setProduct(data.data)
					setLoading(false)
				}
			})
			.catch((err: any) => err);
	};

	useEffect(() => {
		fetchProduct()
		window.scrollTo(0, 0)
		return () => {
		};
	}, []);

	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-1 md:grid-cols-2 mt-5'>

				<div className='md:mx-5 mt-5'>
					{loading ? <Skeleton className='h-[30rem] w-[100%] bg-[#cacaca]'> </Skeleton> :
						<Swiper
							loop={true}
							spaceBetween={10}
							navigation={true}
							thumbs={{ swiper: thumbsSwiper }}
							modules={[FreeMode, Navigation, Thumbs]}
							className="mySwiper2"
						>
							{product?.gallery.map((item) => (
								<SwiperSlide>
									<img src={item} className='w-full' />
								</SwiperSlide>
							))}
						</Swiper>
					}
					<Swiper
						loop={true}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper mt-3"
					>
						{product?.gallery.map((item) => (
							<SwiperSlide>
								<img src={item} className='w-full' />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='md:mx-5 mt-5'>
					<div className='flex'>
						<StarRating starNumber={product?.star} />
						<p className='mt-2 mx-2 text-[#6C7275]'>11 review</p>
					</div>
					<p className='font-bold  mt-2 text-[30px]'>{product?.name}</p>
					<p className='mt-4 text-[#6C7275]'>{product?.description}</p>

					<div className='price-component mt-3 mb-2'>
						<p className='mt-2 text-xl '><span className='font-bold'>${product?.salePrice}</span> <s className='text-[#949494]  ml-1' >${product?.price}</s></p>
					</div>

					<p className='mt-5 text-[#4a4a4a]'>Offer expires in:</p>
					<div className='flex mt-3 mb-5'>
						<div className='mx-2 text-center'>
							<p className='text-[25px] font-bold'>02</p>
							<p>Days</p>
						</div >
						<div className='mx-2 text-center'>
							<p className='text-[25px] font-bold'>02</p>
							<p>Days</p>
						</div>
						<div className='mx-2 text-center'>
							<p className='text-[25px] font-bold'>02</p>
							<p>Days</p>
						</div>
						<div className='mx-2 text-center'>
							<p className='text-[25px] font-bold'>02</p>
							<p>Days</p>
						</div>
					</div>
					<div className='mt-8'>
						<p className='mt-1'>Measurements</p>
						<p className='mt-2'>17 1/2x20 5/8"</p>
					</div>
					<div className='w-full mt-10'>
						<div className='md:flex mt-4 w-100'>
							{/* <div className='flex w-[50%] md:w-[30%]'>
								<p className='p-1 mr-1 py-2 px-4 text-xl bg-[#b5b5b5] rounded'> - </p>
								<p className='p-1 mx-2 py-2 text-lg'> 1 </p>
								<p className='p-1 ml-1 py-2 px-4 text-xl bg-[#b5b5b5] rounded' > + </p>
							</div> */}
							<div className=' bg-[#121212] text-white px-4 py-2 rounded flex w-[100%] md:w-[100%] text-center justify-center mt-2 md:mx-1'>
								<p className='text-lg'>ADD TO CART</p>
							</div>
							<div className='border border-[#121212] px-4 py-2 rounded flex w-[100%] md:w-[100%] text-center justify-center mt-2 md:mx-1'>
								<Heart size={23} className='mr-1 mt-[3px]' /> <p className='text-lg'>wishlist</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
			<div className='mt-10'>
				<SliderHome />
			</div>
			<br></br>
			<div>
				<Review />
			</div>
		</div>
	)
}

export default SingleProduct