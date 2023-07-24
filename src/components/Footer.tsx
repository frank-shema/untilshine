// import React from 'react';
import logo from '../assets/elipses/Group.svg'
import ringed from '../assets/elipses/Group 18.svg'
import SocialMediaIcons from './icons';

export default function Footer() {
	return (
		<div>
			<div className="flex flex-row gap-10">
				<div>
					<div>
						<img src={logo} alt="" />
					</div>
					<div>
						<p className="text-xl">We strive to create games that not only entertain but also challenge the boundaries of imagination, pushing the limits of interactive storytelling, gameplay mechanics, and visual aesthetics.</p>
					</div>

					<div>
						<SocialMediaIcons />
					</div>
				</div>

				<div>
					<h1 className="text-[28px] font-bold text-white">Quick links</h1>
					<div className="text-[#4D4D4D] text-[20px]">
						<p><a href="">Home</a></p>
						<p><a href="">Leaderboard</a></p>
						<p><a href="">Community</a></p>
						<p><a href="">Contact</a></p>
					</div>
				</div>

				<div>
					<h1 className="text-[28px] font-bold text-white">Newsletters</h1>
					<div>
						<label htmlFor="email" className="text-[#4D4D4D] text-[20px]">Enter your Email</label>
						<input type="email" name='email' placeholder='example@gmail.com' className="px-4 py-1.5 bg-[#1F1F1F] text-white" />
					</div>

					<div>
						<button type='submit' className="bg-[#FFDB00] rounded-xl text-black" ><a href="">Subscribe</a></button>
					</div>
				</div>

				<div>
					<img src={ringed} alt="" />
				</div>
			</div>

			<div className="w-full text-center">
				<p>&copyright; 2023 UNTILSUNRISE. All rights reserved.</p>
			</div>
		</div>
	);
}
