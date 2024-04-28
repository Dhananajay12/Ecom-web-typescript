import { Calendar, CircleUserRound } from 'lucide-react'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Blog = () => {
	return (
		<div className='container mx-auto'>
			<p>Home{' >'} Blog</p>

			<div>
				<p className='font-bold mt-4 '>ARTICLE</p>
				<p className='text-[70px] font-bold mt-2'>How to make a busy bathroom a place to relax</p>
				<div className='flex mt-5'>
					<div className='flex mr-2'>
						<CircleUserRound strokeWidth={1} size={23} className='text-[#616161]' />
						<p className='ml-1 text-[#616161]'>Henrik Annemark</p>
					</div>
					<div className='flex ml-2'>
						<Calendar strokeWidth={1} size={23} className='text-[#616161]' />
						<p className='ml-1 text-[#616161]'>October 16,2023</p>
					</div>
				</div>
				<div className='mt-5'>
					<LazyLoadImage src="src/images/blog-page/chairs.jpg"
						alt="Image Alt"
						className='w-full rounded'
					/>
			
				</div>
			</div>
			<div>
				<p className='mt-5 '>Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>
				<p className='text-[20px] mt-3 font-bold'>	A cleaning hub with built-in ventilation </p>
				<p className='mt-2'>
					Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.
				</p>

				<div className='grid grid-cols-2 mt-4'>
					<div className='p-1 '>
						<LazyLoadImage src="src/images/blog-page/kitchen.jpg"
							alt="Image Alt"
							className='w-full rounded'
						/>
						
					</div>
					<div className='p-1 '>
						<LazyLoadImage src="src/images/blog-page/kitchen-1.jpg"
							alt="Image Alt"
							className='w-full rounded'
						/>
						
					</div>
				</div>
				<div className='mt-2'>
					<p className='font-bold text-[20px] mt-2'>Storage with a calming effect</p>
					<p className='mt-1 text-[15px]'>	Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).
					</p>
					<p className='font-bold text-[20px] mt-2'>Kit your clutter for easy access</p>

					<p className='mt-1 text-[15px]'>

						Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.
					</p>
				</div>

			</div>
			<div className='grid grid-cols-2 mt-4'>
				<div className=''>
					<LazyLoadImage src="src/images/blog-page/chair-1.jpg"
						alt="Image Alt"
						className='rounded max-h-[800px] w-full'
					/>
				
				</div>
				<div className='px-4'>
					<p className='mt-2 font-bold text-[20px]'>An ecosystem of towels</p>
					<p className='mt-1 text-[15px]'>Racks or hooks that allow air to circulate around each towel prolong their freshness. They dry quick and the need for frequent washing is minimized.</p>
					<p className='mt-2 font-bold text-[20px]'> Make your mop disappear</p>
					<p className='mt-1 text-[15px]'>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>
				</div>

			</div>
			<div>
				<div className='flex justify-between mt-10'>
					<p className='font-bold text-[25px]'> You might also like</p>
					<p>More Airtcles </p>
				</div>
				<div className='grid grid-cols-3  mt-5'>
					<div className='p-1'>
						<LazyLoadImage src="src/images/blog-page/table-1.jpg"
							alt="Image Alt"
							className='h-[400px] w-full rounded'
						/>

						<p className='mt-4  font-semibold'>Modern texas home is beautiful and completely kid-friendly</p>
						<p className='mt-2 text-[#545454]'>October 16, 2023</p>
					</div>
					<div className='p-1 '>
						<LazyLoadImage src="src/images/blog-page/table-2.jpg"
							alt="Image Alt"
							className='h-[400px] w-full rounded'
						/>
					
						<p className='mt-4  font-semibold'>Modern texas home is beautiful and completely kid-friendly</p>
						<p className='mt-2 text-[#545454]'>October 16, 2023</p>
					</div>
					<div className='p-1'>
						<LazyLoadImage src="src/images/blog-page/table-3.jpg"
							alt="Image Alt"
							className='h-[400px] w-full rounded'
						/>
				
						<p className='mt-4 font-semibold'>Modern texas home is beautiful and completely kid-friendly</p>
						<p className='mt-2 text-[#545454]'>October 16, 2023</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog