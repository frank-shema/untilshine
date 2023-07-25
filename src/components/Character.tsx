// import React from 'react';
import Robert from '../assets/characters/Robert-2-removebg-preview 3.png'
import Cindy from '../assets/characters/Cindy-1-removebg-preview 1.png'
import laura from '../assets/characters/Laura-2-removebg-preview 1.png'

export default function Character() {
    return (
        <div className='w-full px-10 md:px-16 lg:px-32 my-10'>
            <div>
                <h1 className='text-[20px] md:text-[30px] lg:text-[44px] font-bold '>Our characters</h1>
                <p className="text-[14px] font-medium  text-[#7F7F7F] w-full lg:w-[50%]">Each time you win the game (at least one person survives) you unlock a profile icon, so you can customize your leaderboard appearance, or show off how far you’ve gone. 100 pages of lore are also available to pickup in-game, explaining the story of this fantasy dystopic world.</p>
            </div>

            <div className='w-full grid grid-cols-3  items-center gap-5 my-3'>
                <div className='border-[3px] border-[#FFDB00] rounded-lg p-3 h-full'>
                    <img src={Robert} alt="" className="w-[50%] md:w-[55%] lg:h-[60%] mx-auto"/>
                    <div>
                        <h1 className="text-xs text-[18px] lg:text-[30px] font-bold">Robert</h1>
                        <p className="text-[9px] md:text-sm text-[#3F3F3F]  font-medium">Playas Robert, a simple yet stubborn woodsman, skilled in survival, mechanics and firearms. Ex-military? Nope. Everyone is a badass in order to survive in the woods of Lupinshire.</p>
                    </div>
                </div>

                <div className='border-[3px] border-[#FFDB00] rounded-lg p-3 h-full'>
                    <img src={Cindy} alt="" className="w-[50%] md:w-[55%] lg:h-[60%] mx-auto" />
                    <div>
                        <h1 className="text-xs text-[18px] lg:text-[30px] font-bold">Cindy</h1>
                        <p className="text-[9px] md:text-sm text-[#3F3F3F]  font-medium">A typical 14yo teenage girl, bored of the woods and awaiting her next visit to the village, or better, the big city. </p>
                    </div>
                </div>


                <div className='border-[3px] border-[#FFDB00] rounded-lg p-3 h-full'>
                    <img src={laura} alt="" className="w-[50%] md:w-[55%] lg:h-[60%] mx-auto"/>
                    <div>
                        <h1 className="text-xs text-[18px] lg:text-[30px] font-bold">Laura</h1>
                        <p className="text-[9px] md:text-sm text-[#3F3F3F]  font-medium">Your fancy city wife loved you enough to stay with you, away from the comfort and services of Ultrapolis. Armed with her shotgun, she will do her best to keep your children safe, lest you allow a fowl creature to get inside, </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
