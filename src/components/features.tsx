import killer from '../assets/features/Group 6.png'
import land from '../assets/features/Group 7.png'

export default function Features() {
    return (
        <div className='w-full px-10 md:px-16 lg:px-32'>
            <div className='text-center'>
                <button className='bg-[#FFDB00] border-2 border-transparent hover:border-[#FFDB00] transition-all hover:bg-black hover:border-2 hover:text-[#FFDB00] text-black px-4 py-2 rounded-full text-xs lg:text-base'>
                    Start Game
                </button>
            </div>
            <div>
                <h1 className='text-[20px] md:text-[30px] lg:text-[44px] font-bold '>Our features</h1>
                <p className="text-[10px] md:text-[15px] lg:text-[20px] font-medium  text-[#7F7F7F]">Explore or awesome features</p>
            </div>
            <div className='grid grid-rows-3 md:grid-cols-3 md:grid-rows-1  w-full gap-10'>
                <div className='h-full'>
                    <a href=''><img src={killer}
                            alt=""
                            className='w-full'/></a>
                    <div className='bg-black rounded-md w-full p-5'>
                        <h1 className='text-sm md:text-base lg:text-xl text-[#FFDB00] font-bold my-2'>Every game is different</h1>
                        <p className='text-[9px] lg:text-sm font-medium py-5'>Each game has a few planned story events, and lots of randomized events, weather, spawn waves</p>
                        <button className='w-full border-[1px] rounded-full py-3 hover:bg-white hover:text-black transition-all text-center mx-2'>Start now</button>
                    </div>
                </div>
                <div className='h-full'>
                    <div>
                        <a href=""><img src={land}
                                alt=""/></a>
                        <div className='bg-black rounded-md w-full p-5'>
                            <h1 className='text-sm md:text-base lg:text-xl text-[#FFDB00] font-bold my-2'>Stay close to home</h1>
                            <p className='text-[9px] lg:text-sm font-medium py-5'>Staying away from the front of your house will spell your doom, for you and your family</p>
                            <button className='w-full border-[1px] rounded-full py-3 hover:bg-white hover:text-black transition-all text-center mx-2'>Start now</button>
                        </div>
                    </div>
                </div>
                <div className='h-full'>
                    <div>
                        <a href=""><img src={land}
                                alt=""/></a>
                        <div className='bg-black rounded-md w-full p-5'>
                            <h1 className='text-sm md:text-base lg:text-xl text-[#FFDB00] font-bold my-2'>Awesome characters</h1>
                            <p className='text-[9px] lg:text-sm font-medium py-5'>Control any character you want in your story .Staying away from the front of your house will spell your doom, for you and your...</p>
                            <button className='w-full border-[1px] rounded-full py-3 hover:bg-white hover:text-black transition-all text-center mx-2'>Start now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-3'>
                <a href="" className='text-center w-full text-[#FFDB00] text-sm md:text-base lg:text-lg '>Learn more</a>
            </div>
        </div>
    );
}
