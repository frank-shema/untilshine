// import React from 'react';
import logo from '../assets/elipses/Group.svg'
import ringed from '../assets/elipses/Group 18.svg'
import { SocialMediaIcons2 } from "./icons"

export default function Footer() {
	return (
		<div className=" relative w-full px-20 my-20 py-10 ">
			<div className="flex flex-row gap-10">
				<div className="w-[30%]">
					<img src={logo} alt="" className="w-[30%] my-3" />
					<p className="text-sm my-3">We strive to create games that not only entertain but also challenge the boundaries of imagination, pushing the limits of interactive storytelling, gameplay mechanics, and visual aesthetics.</p>
					<SocialMediaIcons2 />
				</div>

				<div>
					<h1 className="text-[20px] font-bold text-white">Quick links</h1>
					<div className="text-[#4D4D4D] text-sm">
						<p><a href="">Home</a></p>
						<p><a href="">Leaderboard</a></p>
						<p><a href="">Community</a></p>
						<p><a href="">Contact</a></p>
					</div>
				</div>

				<div>
					<h1 className="text-[20px] font-bold text-white">Newsletters</h1>
					<div>
						<label htmlFor="email" className="text-[#4D4D4D] text-sm">Enter your Email</label><br />
						<input type="email" name='email' placeholder='example@gmail.com' className="px-4 py-1.5 bg-[#1F1F1F] text-white outline-none focus::outline-none text-sm"  />
					</div>

					<div>
						<button type='submit' className="bg-[#FFDB00] rounded-xl text-black px-4 py-2 my-3" ><a href="">Subscribe</a></button>
					</div>
				</div>
			</div>
			<p className="text-center absolute bottom-0  left-[40%]">&copy; 2023 UNTILSUNRISE. All rights reserved.</p>
			<img src={ringed} alt="" className="absolute bottom-0 right-10" />
		</div>
	);
}
