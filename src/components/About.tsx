import ring from '../assets/about/Rectangle 18.svg'
import people from '../assets/about/inside.jpg'

export default function About() {
	return (
		<div className="w-full  px-7 md:px-14 lg:px-28 my-10 ">
			<div>
				<h1 className='text-[20px] md:text-[30px] lg:text-[44px] font-bold text-shadow about-us'>About us</h1>
				<p className="text-sm md:text-base lg:text-[20px] font-medium  text-[#7F7F7F]">More about our company</p>
			</div>
			<div className="flex flex-row gap-5 my-3 items-center">
				<div className="relative w-[50%] hidden md:block">
					<img src={ring} alt="" className='w-[85%]' />
					<img src={people} alt="" className='absolute top-[30%] h-[50%] -right-5 rounded-md  border' />
				</div>
				<div className="w-full md:w-[50%] text-white text-[20px] pl-5 flex flex-col gap-8 mt-[5vh] about-us-in">
					<div className='flex flex-col gap-1'>
						<h1 className="text-[#FFDB00] font-medium text-sm lg:text-base">Us</h1>
						<p className='text-[10px] lg:text-sm'>we are passionate about gaming and dedicated to creating extraordinary experiences for players all around the world. Founded in [Year of Establishment], our company has emerged as a leading force in the gaming industry, driven by innovation, creativity, and an unwavering commitment to delivering top-notch gaming content.</p>
					</div>
					<div className='flex flex-col gap-1'>
						<h1 className="text-[#FFDB00] font-medium text-sm lg:text-base">Our mission</h1>
						<p className='text-[10px] lg:text-sm'>Our mission is simple yet powerful - to craft captivating and immersive gaming experiences that resonate with players of all ages and backgrounds. We strive to create games that not only entertain but also challenge the boundaries of imagination, pushing the limits of interactive storytelling, gameplay mechanics, and visual aesthetics.</p>
					</div>

					<div className='flex flex-col gap-1'>
						<h1 className="text-[#FFDB00] font-medium text-sm lg:text-base">Join Us on this Journey</h1>
						<p className='text-[10px] lg:text-sm'>Join us on an exhilarating journey through the realms of imagination and gaming excellence. At our Company, we look forward to welcoming you into our ever-growing family of gamers, where you can forge friendships, conquer challenges, and create memories that last a lifetime.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
