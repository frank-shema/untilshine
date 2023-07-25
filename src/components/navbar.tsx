// import React from 'react';
import logo from '../assets/elipses/Group.svg'

export default function Navbar() {
	return (
		<div className='fixed flex flex-row  justify-between px-5 md:px-10 lg:px-16 py-3 w-full items-center bg-black z-50'>
			<div className='flex flex-row gap-3'>
				< img src={logo} alt="" className='w-[30%]' />
				<p className='uppercase text-[10px] md:text-[16px] lg:text-[20px] font-extrabold mt-5'>untilsunrise</p>
			</div >
			<div className='block md:hidden'>
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='fill-white'>
					<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
				</svg>
			</div>
			<div className='hidden md:block'>
				<nav className='flex flex-row gap-5 items-center text-sm lg:text-base'>
					<p><a href="">Home</a></p>
					<p><a href="">Community</a></p>
					<p><a href="">Leatherboard</a></p>
					<p><a href="">Contact</a></p>
				</nav>
			</div>

			<div className='flex flex-row gap-5 hidden md:block'>
				<button className='px-10 py-2  border-white border-[1px]  rounded-[24px] capitalize  text-sm lg:text-base'><a href="">signup</a></button>
				<button className='bg-btn rounded-[24px] text-black px-10 py-2 capitalize  text-sm lg:text-base'><a href="">login</a></button>
			</div>
		</div >
	);
}
