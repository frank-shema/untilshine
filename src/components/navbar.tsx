// import React from 'react';
import logo from '../assets/elipses/Group.svg'

export default function Navbar() {
	return (
		<div className='fixed flex flex-row  justify-between px-20 py-3 w-full items-center bg-black z-20'>
			<div className='flex flex-row gap-3'>
				< img src={logo} alt="" />
				<p className='uppercase text-[20px] font-[900] mt-5'>untilsunrise</p>
			</div >

			<div>
				<nav className='flex flex-row gap-5 items-center'>
					<p><a href="">Home</a></p>
					<p><a href="">Community</a></p>
					<p><a href="">Leatherboard</a></p>
					<p><a href="">Contact</a></p>
				</nav>
			</div>

			<div className='flex flex-row gap-5'>
				<button className='px-10 py-2  border-white border-[1px]  rounded-[24px] capitalize'><a href="">signup</a></button>
				<button className='bg-btn rounded-[24px] text-black px-10 py-2 capitalize'><a href="">login</a></button>
			</div>
		</div >
	);
}
