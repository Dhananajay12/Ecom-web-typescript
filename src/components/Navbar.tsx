import { CircleUserRound, Search, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className=" py-5 md:p-6 ">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className=" text-3xl font-bold text-[#121212]">3legant</h1>
				<div className="lg:flex hidden">
					<NavLink to="/" className={({ isActive }) => isActive ? 'text-[#3d3d3d] text-lg  font-light mr-8' : 'text-[#898989] text-lg  font-light mr-8'}  >Home</NavLink>
					<NavLink to="/shop" className={({ isActive  }) => isActive ? 'text-[#3d3d3d] text-lg  font-light mr-8' : 'text-[#898989] text-lg  font-light mr-8'} >Shop</NavLink>
					<NavLink to="/about-us" className={({ isActive }) => isActive ? 'text-[#3d3d3d] text-lg  font-light mr-8' : 'text-[#898989] text-lg  font-light mr-8'} >About Us</NavLink>
					<NavLink to="/blog" className={({ isActive }) => isActive ? 'text-[#3d3d3d] text-lg  font-light mr-8' : 'text-[#898989] text-lg  font-light mr-8'} >Blog</NavLink>
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
					<Search size={28} strokeWidth={1.5} className='mr-4 text-[#3d3d3d]' />
					<NavLink to="/cart" >
						<ShoppingCart size={28} strokeWidth={1.5} className='mr-4 text-[#3d3d3d]' />
					</NavLink>
					<NavLink to="/login" >
						<CircleUserRound size={28} strokeWidth={1.5} className='text-[#3d3d3d]' />
					</NavLink>
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