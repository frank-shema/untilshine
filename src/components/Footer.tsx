import logo from '../assets/elipses/Group.svg'
import ringed from '../assets/elipses/Group 18.svg'
import {SocialMediaIcons2} from "./icons"

export default function Footer() {
    return (
        <div className=" relative w-full px-10 md:px-16 lg:px-32 my-10 md:my-20 py-10 ">
            <div className="flex flex-col sm:flex-row gap-10">
                <div className=" w-full sm:w-[30%]">
                    <img src={logo}
                        alt=""
                        className="w-[30%] my-3"/>
                    <p className="text-[9px] md:text-sm my-3">We strive to create games that not only entertain but also challenge the boundaries of imagination, pushing the limits of interactive storytelling, gameplay mechanics, and visual aesthetics.</p>
                    <SocialMediaIcons2/>
                </div>
                <div>
                    <h1 className="text-[20px] font-bold text-white">Quick links</h1>
                    <div className="text-[#4D4D4D] flex flex-col gap-4 py-4 text-[9px] md:text-sm">
                        <p>
                            <a href="/" className='hover:text-[#FFDB00]'>Home</a>
                        </p>
                        <p>
                            <a href="/" className='hover:text-[#FFDB00]'>Leaderboard</a>
                        </p>
                        <p>
                            <a href="/" className='hover:text-[#FFDB00]'>Community</a>
                        </p>
                        <p>
                            <a href="/" className='hover:text-[#FFDB00]'>Contact</a>
                        </p>
                    </div>
                </div>
                <div className='w-full sm:w-fit'>
                    <h1 className="text-[20px] font-bold text-white">Newsletters</h1>
                    <div className='w-full py-4'>
                        <label htmlFor="email" className="text-[#4D4D4D] text-[9px] md:text-sm">Enter your Email</label><br/>
                        <input type="email" name='email' placeholder='example@gmail.com' className="px-4 py-2.5 bg-[#1F1F1F] text-white outline-none focus::outline-none text-[9px] md:text-sm w-full"/>
                    </div>
                    <div>
                        <button type='submit' className="bg-[#FFDB00] rounded-md text-black w-full py-2 my-3 text-[9px] md:text-sm">
                            <a href="">Subscribe</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center w-full">
                <p className='text-xs md:text-sm lg:tex-base'>&copy; 2023 UNTILSUNRISE. All rights reserved.</p>
            </div>
            <img src={ringed}
                alt=""
                className="absolute bottom-0 right-10 hidden md:block"/>
        </div>
    );
}
