import React from 'react'
import { StarRating } from '../homepage/SliderHome'
import { Link, MessageCircle, ThumbsUp } from 'lucide-react'

const Review = () => {
	return (
		<>

			<div className='mt-3'>
				<p className='text-[20px] font-bold '> 11 Review </p>
				<div className='grid grid-cols-1 lg:grid-cols-12 mt-10'>
					<div className='col-span-1'>
						<img className='rounded-[90px] w-[80px] h-[80px]' src='https://s3-alpha-sig.figma.com/img/fbee/bffb/ad67ac62a1529eb723526726093127ba?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzo8AcDFqRJRbt~RcN3ZbXpRGBoHKUXgb2eqePSllVreE41brLXDpuV8vzZ6-YSHfF8Siah3GEssB-eLvyB5Y88bZcy6f05V~WmyRnik7pFfbT77t40GHeO2CBWHHmGVccWlxQxNUyXcwY-R35YA0DrY4-uX3O6SUNyzLdgr832wPxP8WUNto1s07GCRu7SkUjKseytZhnn~r27mkCu3zqC54X7YE2Rtqky6C3JQoHD2LsSJhq5aV3c3OPcSgnglWZpdJSs-DZZtm0pzY1YCUUpXQR4ymXgu8Vx51wHoLIqU5ARWmeQS~a3WX6pvOikmh7EcaxCyT1yoz35wDDILqw__' />
					</div>
					<div className='col-span-11'>
						<p className="mb-2" >Sofia Harvetz</p>
						<StarRating starNumber={4} className="mt-4" />
						<p className='mt-4 text-[#353945]'>I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
						<div className='flex mt-4'>
							<p className='mr-2 text-[#353945]'><ThumbsUp strokeWidth={1.4} /></p>
							<p className='ml-2 text-[#353945]'><MessageCircle strokeWidth={1.4} /></p>
						</div>
					</div>
					
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-12 mt-10'>
					<div className='col-span-1'>
						<img className='rounded-[90px] w-[80px] h-[80px]' src='https://s3-alpha-sig.figma.com/img/fbee/bffb/ad67ac62a1529eb723526726093127ba?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzo8AcDFqRJRbt~RcN3ZbXpRGBoHKUXgb2eqePSllVreE41brLXDpuV8vzZ6-YSHfF8Siah3GEssB-eLvyB5Y88bZcy6f05V~WmyRnik7pFfbT77t40GHeO2CBWHHmGVccWlxQxNUyXcwY-R35YA0DrY4-uX3O6SUNyzLdgr832wPxP8WUNto1s07GCRu7SkUjKseytZhnn~r27mkCu3zqC54X7YE2Rtqky6C3JQoHD2LsSJhq5aV3c3OPcSgnglWZpdJSs-DZZtm0pzY1YCUUpXQR4ymXgu8Vx51wHoLIqU5ARWmeQS~a3WX6pvOikmh7EcaxCyT1yoz35wDDILqw__' />
					</div>
					<div className='col-span-11'>
						<p className="mb-2" >Sofia Harvetz</p>
						<StarRating starNumber={4} className="mt-4" />
						<p className='mt-4 text-[#353945]'>I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
						<div className='flex mt-4'>
							<p className='mr-2 text-[#353945]'><ThumbsUp strokeWidth={1.4} /></p>
							<p className='ml-2 text-[#353945]'><MessageCircle strokeWidth={1.4} /></p>
						</div>
					</div>

				</div>
				<div className='grid grid-cols-1 lg:grid-cols-12 mt-10'>
					<div className='col-span-1'>
						<img className='rounded-[90px] w-[80px] h-[80px]' src='https://s3-alpha-sig.figma.com/img/fbee/bffb/ad67ac62a1529eb723526726093127ba?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzo8AcDFqRJRbt~RcN3ZbXpRGBoHKUXgb2eqePSllVreE41brLXDpuV8vzZ6-YSHfF8Siah3GEssB-eLvyB5Y88bZcy6f05V~WmyRnik7pFfbT77t40GHeO2CBWHHmGVccWlxQxNUyXcwY-R35YA0DrY4-uX3O6SUNyzLdgr832wPxP8WUNto1s07GCRu7SkUjKseytZhnn~r27mkCu3zqC54X7YE2Rtqky6C3JQoHD2LsSJhq5aV3c3OPcSgnglWZpdJSs-DZZtm0pzY1YCUUpXQR4ymXgu8Vx51wHoLIqU5ARWmeQS~a3WX6pvOikmh7EcaxCyT1yoz35wDDILqw__' />
					</div>
					<div className='col-span-11'>
						<p className="mb-2" >Sofia Harvetz</p>
						<StarRating starNumber={4} className="mt-4" />
						<p className='mt-4 text-[#353945]'>I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
						<div className='flex mt-4'>
							<p className='mr-2 text-[#353945]'><ThumbsUp strokeWidth={1.4} /></p>
							<p className='ml-2 text-[#353945]'><MessageCircle strokeWidth={1.4} /></p>
						</div>
					</div>

				</div>
				<div className='grid grid-cols-1 lg:grid-cols-12 mt-10'>
					<div className='col-span-1'>
						<img className='rounded-[90px] w-[80px] h-[80px]' src='https://s3-alpha-sig.figma.com/img/fbee/bffb/ad67ac62a1529eb723526726093127ba?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzo8AcDFqRJRbt~RcN3ZbXpRGBoHKUXgb2eqePSllVreE41brLXDpuV8vzZ6-YSHfF8Siah3GEssB-eLvyB5Y88bZcy6f05V~WmyRnik7pFfbT77t40GHeO2CBWHHmGVccWlxQxNUyXcwY-R35YA0DrY4-uX3O6SUNyzLdgr832wPxP8WUNto1s07GCRu7SkUjKseytZhnn~r27mkCu3zqC54X7YE2Rtqky6C3JQoHD2LsSJhq5aV3c3OPcSgnglWZpdJSs-DZZtm0pzY1YCUUpXQR4ymXgu8Vx51wHoLIqU5ARWmeQS~a3WX6pvOikmh7EcaxCyT1yoz35wDDILqw__' />
					</div>
					<div className='col-span-11'>
						<p className="mb-2" >Sofia Harvetz</p>
						<StarRating starNumber={4} className="mt-4" />
						<p className='mt-4 text-[#353945]'>I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
						<div className='flex mt-4'>
							<p className='mr-2 text-[#353945]'><ThumbsUp strokeWidth={1.4} /></p>
							<p className='ml-2 text-[#353945]'><MessageCircle strokeWidth={1.4} /></p>
						</div>
					</div>

				</div>
			</div>

		</>
	)
}

export default Review