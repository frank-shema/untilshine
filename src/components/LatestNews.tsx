// import React from 'react';
import fps from '../assets/latest/Rectangle 17 (1).svg'
import Leadbord from '../assets/latest/Rectangle 17 (2).svg'
import comp from '../assets/latest/Rectangle 17 (3).svg'
import dvlptPhase from '../assets/latest/Rectangle 17.svg'

export default function LatestNews() {
	return (
		<div className="text-white ">
			<div className="text-left">
				<h1 className='text-[44px] font-bold '>latest news</h1>
				<p className="text-[20px] font-medium  text-[#7F7F7F]">Some of our new blogs</p>
			</div>

			<div className="flex flex-row flex-wrap gap-5">
				<div className="bg-white p-3  flex flex-row gap-5 rounded-2xl text-black">
					<div>
						<img src={fps} alt="" />
					</div>
					<div>
						<h1 className="text-[28px] font-medium">Highly Repeatable Randomized FPS</h1>
						<p className="text-base font-normal text-[#595959]">Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
						<p className="text-base font-medium"><a href="">Read more</a></p>
					</div>
				</div>

				<div className="flex flex-row flex-wrap gap-5">
					<div>
						<img src={dvlptPhase} alt="" />
					</div>
					<div>
						<h1 className="text-[28px] font-medium">Start playing in Alpha Development Phase</h1>
						<p className="text-base font-normal text-[#595959]">Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
						<p className="text-base font-medium"><a href="">Read more</a></p>
					</div>
				</div>

				<div className="flex flex-row flex-wrap gap-5">
					<div>
						<img src={Leadbord} alt="" />
					</div>
					<div>
						<h1 className="text-[28px] font-medium">Show off in the Leaderboards</h1>
						<p className="text-base font-normal text-[#595959]">Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
						<p className="text-base font-medium"><a href="">Read more</a></p>
					</div>
				</div>

				<div className="flex flex-row flex-wrap gap-5">
					<div>
						<img src={comp} alt="" />
					</div>
					<div>
						<h1 className="text-[28px] font-medium">Show off in the Leaderboards</h1>
						<p className="text-base font-normal text-[#595959]">Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
						<p className="text-base font-medium"><a href="">Read more</a></p>
					</div>
				</div>
			</div>
		</div>
	);
}
