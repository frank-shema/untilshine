import fps from '../assets/latest/Rectangle 17 (1).svg'
import Leadbord from '../assets/latest/Rectangle 17 (2).svg'
import comp from '../assets/latest/Rectangle 17 (3).svg'
import dvlptPhase from '../assets/latest/Rectangle 17.svg'

export default function LatestNews() {
    return (
        <div className="px-5 md:px-14 lg:px-28 my-10 w-full ">
            <div className="text-left">
                <h1 className='text-[20px] md:text-[30px] lg:text-[44px] font-bold capitalize text-shadow '>latest news</h1>
                <p className="text-[20px] font-medium  text-[#7F7F7F]">Some of our new blogs</p>
            </div>
            <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-5 my-5">
                <div className="bg-white lg:h-52 px-3 flex flex-row gap-5 rounded-2xl text-black">
                    <img src={fps}
                        alt=""
                        className='w-[30%]'/>
                    <div className='py-6'>
                        <h1 className="text-sm md:text-base lg:text-[14px] font-semibold">Highly Repeatable Randomized FPS</h1>
                        <p className="text-[8px] md:text-[12px] py-5 lg:text-[14px] font-normal text-[#595959]">Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
                        <p className="text-[8px] md:text-[10px] lg:text-[12px] font-medium">
                            <a href="#" className='hover:text-blue-500'>Read more</a>
                        </p>
                    </div>
                </div>
                <div className="bg-white lg:h-52 px-3 flex flex-row gap-5 rounded-2xl text-black">
                    <img src={dvlptPhase}
                        alt=""
                        className='w-[30%]'/>
                    <div className='py-6'>
                        <h1 className="text-sm md:text-base lg:text-[14px] font-semibold">Start playing in Alpha Development Phase</h1>
                        <p className="text-[8px] md:text-[12px] py-5 lg:text-[14px] font-normal text-[#595959]">Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
                        <p className="text-[8px] md:text-[10px] lg:text-[12px] font-medium">
                            <a href="#" className='hover:text-blue-500'>Read more</a>
                        </p>
                    </div>
                </div>
                <div className="bg-white lg:h-52 px-3 flex flex-row gap-5 rounded-2xl text-black">
                    <img src={Leadbord}
                        alt=""
                        className='w-[30%]'/>
                    <div className='py-6'>
                        <h1 className="text-sm md:text-base lg:text-[14px] font-semibold">Show off in the Leaderboards</h1>
                        <p className="text-[8px] md:text-[12px] py-5 lg:text-[14px] font-normal text-[#595959]">Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
                        <p className="text-[8px] md:text-[10px] lg:text-[12px] font-medium">
                            <a href="#" className='hover:text-blue-500'>Read more</a>
                        </p>
                    </div>
                </div>
                <div className="bg-white lg:h-52 px-3 flex flex-row gap-5 rounded-2xl text-black">
                    <img src={comp}
                        alt=""
                        className='w-[30%]'/>
                    <div className='py-6'>
                        <h1 className="text-sm md:text-base lg:text-[14px] font-semibold">Show off in the Leaderboards</h1>
                        <p className="text-[8px] md:text-[12px] py-5 lg:text-[14px] font-normal text-[#595959]">Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
                        <p className="text-[8px] md:text-[10px] lg:text-[12px] font-medium">
                            <a href="#" className='hover:text-blue-500'>Read more</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
