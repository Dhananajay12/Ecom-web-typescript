import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'



const StepsForBuy = () => {

	const [path, setPath] = useState('');

	const location = useLocation();

	useEffect(() => {
		const pathSegments = location.pathname.split('/');
		setPath(pathSegments[1])
	}, [])


	return (
		<div className='grid lg:grid-cols-3 mt-10'>
			<div>
				<NavLink to="/cart" className={({ isActive }) => isActive ? 'text-[#3d3d3d] text-lg  font-light mr-8 border-b-2 border-[#121212] pb-5 pr-4 pl-[0px]' : 'text-[#898989] text-lg  font-light mr-8 pb-5 pr-4 pl-[0px]'}>
					<span className={path == 'cart' ? 'bg-[#121212]  text-white p-2 px-[18px] rounded-[70px] mx-4' : 'bg-[#cacaca] text-white p-2 px-[18px] rounded-[70px] mx-4'}>1</span>Shopping cart
				</NavLink>
			</div>
			<div>
				<NavLink to="/address" className={({ isActive }) => isActive ? 'text-[#3d3d3d] text-lg  font-light mr-8 border-b-2 border-[#121212] pb-5 pr-4 pl-[0px]' : 'text-[#898989] text-lg  font-light mr-8 pb-5 pr-4 pl-[0px]'}>
					<span className={path == 'address' ? 'bg-[#121212]  text-white p-2 px-[16px] rounded-[70px] mx-4' : 'bg-[#cacaca] text-white p-2 px-[16px] rounded-[70px] mx-4'}>2</span>Select address
				</NavLink>
			</div>
			<div>
				<NavLink to="/checkout" className={({ isActive }) => isActive ? 'text-[#3d3d3d] text-lg  font-light mr-8 border-b-2 border-[#121212] pb-5 pr-4 pl-[0px]' : 'text-[#898989] text-lg  font-light mr-8 pb-5 pr-4 pl-[0px]'}>
					<span className={path == 'checkout' ? 'bg-[#121212]  text-white p-2 px-[16px] rounded-[70px] mx-4' : 'bg-[#cacaca] text-white p-2 px-[16px] rounded-[70px] mx-4'}>3</span>checkout
				</NavLink>
			</div>
		</div>
	)
}

export default StepsForBuy