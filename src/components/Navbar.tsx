import { CircleUserRound, Search, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className=" p-6">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className=" text-xl font-bold text-[#3d3d3d]">RazeeeOne</h1>

				<div className="lg:flex hidden">
					<p className="text-lg text-[#3d3d3d] mr-4">Home</p>
					<p className="text-lg text-[#3d3d3d] mr-4">Shop</p>
					<p className="text-lg  text-[#3d3d3d] mr-4">Product</p>
					<p className="text-lg text-[#3d3d3d] ">Contact Us</p>
				</div>
				<div
					className={`lg:hidden lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'
						} mt-4 lg:mt-0`}
				>
					<p className=" mr-4">Home</p>
					<p className=" mr-4">About</p>
					<p className=" mr-4">Contact</p>
					<p className="">Product</p>
				</div>

				<div className='flex'>
					<Search size={25} className='mr-2 text-[#3d3d3d]' />
					<ShoppingCart size={25} className='mr-2 text-[#3d3d3d]' />
					<CircleUserRound size={25} className='mr-2 text-[#3d3d3d]' />
					<div className="lg:hidden">
						<button
							onClick={toggleNavbar}
							className="focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								></path>
							</svg>
						</button>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default Navbar