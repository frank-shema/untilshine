// import React from 'react';

export default function Contact() {
	return (
		<div className="text-white">
			<div>
				<h1 className='text-[44px] font-bold text-shadow '>Contact us</h1>
				<p className="text-[20px] font-medium  text-[#7F7F7F]">Send us message</p>
			</div>

			<div className="border-2 border-[#FFDB00] rounded-md flex flex-row gap-5">
				<div className="w-[35%]">
					<p className="text-[67px] font-bold">Let's Get in <span>Touch</span></p>
					<div className="w-[50%] h-2 bg-[#FFDB00]" />
					<p className="text-[#BDBDBD] text-[20px] ">Until Sunrise is a repeatable game that lasts 24 minutes,spanning 24 in-game hours. From enjoying your </p>
					<p className="text-[#FFDB00]"><a href="">untilsunrise<span>@gmail.com</span></a></p>
					<div className="w-[50%] h-1 bg-[#FFDB00]" />
				</div>
				<form action="" className="w-[65%]">
					<div>
						<div className="flex flex-row gap-5">
							<div className="w-[50%]">
								<label htmlFor="fullname" className="text-[#FFDB00] text-[20px] font-medium">Fullname:</label>
								<input type="text" name="fullname" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#545454]" placeholder="John Doe |" />
							</div>

							<div className="w-[50%]">
								<label className="text-[#FFDB00] text-[20px] font-medium" htmlFor="email">Email:</label>
								<input type="email" name="email" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#545454]" placeholder="example@gmail.com" />
							</div>

							<div>
								<label className="text-[#FFDB00] text-[20px] font-medium" htmlFor="contact">Contact Phone:</label>
								<input type="phone" name="phone" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#545454]" placeholder="eg: 1123-419-345" />
							</div>

							<div>
								<label className="text-[#FFDB00] text-[20px] font-medium" htmlFor="city">city/town</label>
								<input type="text" name="city" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#545454]" placeholder="eg: California" />
							</div>
						</div>

						<div>
							<label className="text-[#FFDB00] text-[20px] font-medium" htmlFor="feedback">feedback</label>
							<input type="text" name="feedback" className="px-4 py-2 border-b-2 border-b-white text-white bg-[#545454]" placeholder="Describe your feedback." />
						</div>

						<div className="px-4 py-3 bg-[#FFDB00] text-black">
							<button type="submit">Submit messages</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
