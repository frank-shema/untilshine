// import React from 'react';
import wolves from '../assets/main/Rectangle 6.png'
// import circle from '../assets/elipses/Ellipse 2.svg'
import { SocialMediaIcons1 } from './icons';
import killers from '../assets/main/Rectangle 7.png'

const Survive = () => {
	return (
		<div className='mt-40 w-full  px-10 md:px-16 lg:px-32'>
			<div className='flex flex-row justify-between gap-5 items-baseline my-10'>
				<div className='w-[85vw] flex flex-row items-center'>
					<div className='w-full md:w-[40%] flex flex-row gap-5'>
						<div className='p-1 bg-[#FFDB00] rounded-full text-black w-fit px-2 h-fit'>
							1
						</div>
						<div>
							<h1 className='font-bold text-[20px] md:text-[30px] lg:text-[50px]'>Survive the night</h1>
							<p className='text-[#515151] text-[16px]'>Until Sunrise is a repeatable game that lasts 24 minutes,spanning 24 in-game hours. From enjoying your morning coffee at 7am, you must fend off waves of wolves,
								eventually monsters, until 7am the next morning
							</p>
						</div>
					</div>
					<div className='hidden md:block'>
						<img src={wolves} alt="" />
						{/* <img src={circle} alt="" /> */}
					</div>
				</div>
				<SocialMediaIcons1 />
			</div>
			<div className='flex flex-row gap-8 my-10 '>
				<div className='flex flex-row'>
					<div className='hidden md:block'>
						<img src={killers} alt="" />
						{/* <img src={circle} alt="" /> */}
					</div>
					<div className='flex flex-row gap-3 w-full md:w-[50%]'>
						<div className='p-1 bg-[#FFDB00] rounded-full text-black w-fit px-2 h-fit'>
							2
						</div>
						<div>
							<h1 className='font-bold text-[20px] md:text-[30px] lg:text-[50px]'>Save your family</h1>
							<p className='text-[#515151] text-[16px]'>Your wife Laura, your daughter Cindy, and your baby boy Tom, are inside the house. Prevent wolves (and others) from entering. Each time one enters, a family member dies.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Survive;
