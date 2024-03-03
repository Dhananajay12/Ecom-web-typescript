import { Calendar, CircleUserRound } from 'lucide-react'
import React from 'react'

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

					<img src="https://s3-alpha-sig.figma.com/img/ae6e/7c35/8ccda35cdc7a178d61e13ef549257aa3?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbYaWvvmU8riDoBsf06c5Sj~V6kBDjblR~sXCp~4GH4~jpK3akL-T8bhhSH4JtdBDcmi0O15TzeND2N1sKajOF-EDbPCHB~dP55E5-ljtGFqXERJIqxG7zcu53NmlFWsJ2zfQ9fkvev4qzv4~sceh0SNlmnnyFbKEPSo7m3p2I5FSBss2WlPq1k6WvXTq3tk3GsELOVyii7bT7T0NEKu-eEN3r5-o2sdWTvhS-WQLqWj-oA-zMpat3dvkZywQvNClWcp5KVwQFseZdroaerbuguIW0E714QdxYbWnZlOsCrNAxzegBUmjCIJWIh0t1QTgy8QgkOJ72ClF-Cy~yFARg__" className='w-full rounded' />
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
						<img src="https://s3-alpha-sig.figma.com/img/dc3b/1272/10c2c4191d9b2986a67df8d01f099ef3?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcAyWctHOB60D61dj2InnlArNlYgnXntUouQeD2auDcsWWw39jkTNrgCsZio9BPRSl9MER1Iak72bdyDKRFYC4yFT3DxGjb8ntXV~U8lIm5mu-LsEiIJ8Y~dNavoYySMeV-Ke8C~rv0krHwf~XiIRj1xKweOD7lvfvqH0rRztgGHS1922QyKn87Yawt8NV9s3K-WH7scjPqxZsuxdZrXEZ~O~oe0cDHvAR5mUNecu56-4lMK2V4YVs2C6fJfsjIs1iYVgcNkn-goOFd4u7O~pmAld-wfWUgp~ZX~pebAlrBEjsrcSlmXvSk8pbGESaLiFtW6slibNuP0FBW-mdJmAg__" className='w-full rounded' />
					</div>
					<div className='p-1 '>
						<img src="https://s3-alpha-sig.figma.com/img/dc3b/1272/10c2c4191d9b2986a67df8d01f099ef3?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcAyWctHOB60D61dj2InnlArNlYgnXntUouQeD2auDcsWWw39jkTNrgCsZio9BPRSl9MER1Iak72bdyDKRFYC4yFT3DxGjb8ntXV~U8lIm5mu-LsEiIJ8Y~dNavoYySMeV-Ke8C~rv0krHwf~XiIRj1xKweOD7lvfvqH0rRztgGHS1922QyKn87Yawt8NV9s3K-WH7scjPqxZsuxdZrXEZ~O~oe0cDHvAR5mUNecu56-4lMK2V4YVs2C6fJfsjIs1iYVgcNkn-goOFd4u7O~pmAld-wfWUgp~ZX~pebAlrBEjsrcSlmXvSk8pbGESaLiFtW6slibNuP0FBW-mdJmAg__" className='w-full rounded' />
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
					<img className='rounded h-[800px] w-full' src='https://s3-alpha-sig.figma.com/img/0eae/ee44/13bb0136bfa6e494c048470f4ddc358a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nk5aflbu3FIfTMaIunmwTiMnXnmD3AJXerwAymOqoZ0e~QsnefX6631WRQRl3h1aVVrDfnPwe3-Qm9ryfnsoE~ok9-gb-kZYLG8tGn9Bs79P6YFuePmeO5TgZIwwTQVXKAABHoieoVxaUP4iwwCmwKBq7qsC241FkoodV1DUvJPcQuc4CEILjsJrZ7VjhN0iuHIyKN7kGoVp~PqrbBPSucC1TxRfw4K3bso0ZJJLUvAj~yGFoJH3o~NKh1qnF0y92lCJlOI-S7FnVtTumPkIx5CXUmYKoKJ8hBBnL1S3fliQVv675x3z~OJ1F0isQsnu2HUNesa~AKLzyHV4n0g5mQ__' />
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
						<img className='h-[400px] w-full rounded' src="https://s3-alpha-sig.figma.com/img/92ea/3616/d8352134b62d96ace4c60d66b07a8736?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9uHUIjCVw9bfkoFR9YFHAuMc-guwtKiOP616FlluexvS1eiz1QlgyI9J8sb56n5vdaloyDmf1tL1TPe7AwGxFB~--JhZs4Sux0eQufqJhYBh8yugcjU3nXDDkgVsfuzwjIlt3EjTOGnPPDcXCnbduX8Mu2JKisCVrju1XofRfEFyJa~CDDAy9MRC3kLdXB2Z0TZkIib1d5yjXWqwQZ1--F8UFqxmysoT-P5RxiTnuC0ApiCp2Y0WJPJRhcv64sFRW8HuXxBIZxGGs3bmgGBQQCH~sl56jQCgfXnhBpW3ImOnQVxyTeSfSk6IQHwbZ7xtUo-xCcpKy-uxsEB0BmQog__" />
						<p className='mt-4  font-semibold'>Modern texas home is beautiful and completely kid-friendly</p>
						<p className='mt-2 text-[#545454]'>October 16, 2023</p>
					</div>
					<div className='p-1 '>
						<img className='h-[400px] w-full rounded' src="https://s3-alpha-sig.figma.com/img/25d6/ad10/01f746b19633bd34c070fb89d697ae32?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FetvqBL99iXH8AAQoU6BdCqFF5rCWV-82IkTaiRNAXckULyJn~s0z6tHJ9aeQLZ42f7DMGBlZpHIKo6cv68naq1yLzVtCAqOlwdo3vB0AsUvnTLs9vvn275ChFCbs6F9nFzt~vO6HZixO3f0NexvyGzGHRLcJjDZn5Jq0c0TojO-gVs531g0qoxZKU4QwKBee0UenbKrJrIHS7mWdM15v0BBNcJ4u-1Z~LQ6eAzZ4DArZ8g560pAKvBcTyRQyv4rRlE2ou7jbXL5Z-8tr7hga~5YiNi66JzULVh6lQCHyGbEA1cX8Ex95QzSr8NVduG1h7EMJA7MUDAr9NtPkRsQGw__" />
						<p className='mt-4  font-semibold'>Modern texas home is beautiful and completely kid-friendly</p>
						<p className='mt-2 text-[#545454]'>October 16, 2023</p>
					</div>
					<div className='p-1'>
						<img className='h-[400px] w-full rounded' src="https://s3-alpha-sig.figma.com/img/c186/632f/05e25d33e7c01e207fe2c1296c7fa050?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bJGEFdVx1mY5VrMwCf8Q6nDxBubCtk6wLshmBLcH1oA4kaatRCUlDEeKSbUDfEngXfeG2Sut4ltkYqA0BNn6MrK9ZZHLIfNRHqJLyFGsGKonXqK50nqpbVqhUV9hytroCsIb8nx31WGd4-GNsZutyMo5e61gYxcvl7HGhCcvHaJYMya-YALxOeAoAhdwShXnwkrJnUf-Gg8KMdH6igjtx3tRadUt3Y7P1rPQ9RNdCZlE~f90J7y6fa9TAmaR1Qq8WvVdJR9k5-WaHXVckyUcCnfDxrDNbWEw7eI4NLWbZuUE6ZSCv0ypfCxzjEgEBXMawMyL99qiNhfk~KXq-5ED8w__" />
						<p className='mt-4 font-semibold'>Modern texas home is beautiful and completely kid-friendly</p>
						<p className='mt-2 text-[#545454]'>October 16, 2023</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog