// import React from 'react';

export default function Contact() {
	return (
		<div className="w-full px-20 my-10">
			<div>
				<h1 className='text-[44px] font-bold text-shadow '>Contact us</h1>
				<p className="text-[20px] font-medium  text-[#7F7F7F]">Send us message</p>
			</div>
			<div className="border-2 border-[#FFDB00] rounded-md flex flex-row gap-5 my-10 p-10 relative">
				<div className="bg-[#FFDB00] w-40 h-40 rounded-full absolute blur-3xl bottom-0 left-60"></div>
				<div className="bg-[#FFDB00] w-40 h-40 rounded-full absolute blur-3xl top-[30%] right-10 "></div>
				<div className="w-[45%] z-20">
					<p className="text-6xl font-bold">Let's Get in <span>Touch</span></p>
					<div className="w-[50%] h-2 bg-[#FFDB00] my-5" />
					<p className="text-[#BDBDBD] text-[16px] my-5 ">Until Sunrise is a repeatable game that lasts 24 minutes,spanning 24 in-game hours. From enjoying your </p>
					<p className="text-[#FFDB00] my-5"><a href="">untilsunrise<span>@gmail.com</span></a></p>
					<div className="w-[50%] h-1 bg-[#FFDB00] my-5" />
				</div>
				<form action="" className="w-[65%] z-30">
					<div>
						<div className="flex flex-row gap-5 my-2">
							<div className="w-[50%]">
								<label htmlFor="fullname" className="text-[#FFDB00] capitalize text-[16px] font-medium">Fullname:</label><br />
								<input type="text" name="fullname" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#00000075] outline-none focus:outline-none  w-full" placeholder="John Doe |" />
							</div>

							<div className="w-[50%]">
								<label className="text-[#FFDB00] capitalize text-[16px] font-medium" htmlFor="email">Email:</label><br />
								<input type="email" name="email" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#00000075] outline-none focus:outline-none  w-full" placeholder="example@gmail.com" />
							</div>
						</div>
						<div className="flex flex-row gap-5 my-2">
							<div className="w-[50%]">
								<label className="text-[#FFDB00] capitalize text-[16px] font-medium" htmlFor="contact">Contact Phone:</label><br />
								<input type="phone" name="phone" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#00000075] outline-none focus:outline-none  w-full" placeholder="eg: 1123-419-345" />
							</div>
							<div className="w-[50%]">
								<label className="text-[#FFDB00] capitalize text-[16px] font-medium" htmlFor="city">city/town</label><br />
								<input type="text" name="city" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#00000075] outline-none focus:outline-none  w-full" placeholder="eg: California" />
							</div>
						</div>

						<div className="w-full my-2">
							<label className="text-[#FFDB00] capitalize text-[16px] font-medium" htmlFor="feedback">feedback</label><br />
							<textarea name="feedback" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#00000075] outline-none focus:outline-none  w-full h-40" placeholder="Describe your feedback." ></textarea>
						</div>
						<button type="submit" className="px-4 py-3 bg-[#FFDB00] text-black  w-fit">Submit messages</button>
					</div>
				</form>
			</div>
		</div>
	);
}
