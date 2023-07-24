// import React from 'react';
import lee from '../assets/review/Ellipse 6 (1).svg'
import moses from '../assets/review/Ellipse 6 (2).svg'
import mark from '../assets/review/Ellipse 6.svg'
import star from '../assets/review/Vector.svg'

export default function Reviews() {
    return (
        <div className="text-white">
            <div>
                <h1 className='text-[44px] font-bold text-shadow '>Reviews</h1>
                <p className="text-[20px] font-medium  text-[#7F7F7F]">Learn more about team</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
                <div className="bg-[#FFDB000B] rounded-xl p-3">
                    <div>
                        <div className="flex flex-row gap-5">
                            <img src={mark} alt="" className="rounded-full" />
                            <div>
                                <h1 className="text-[28px] font-bold ">mark john</h1>
                                <p className="text-xs font-medium text-[#FFDB00]">data analyst</p>
                            </div>
                        </div>

                        <div>
                            I look forward to discussing these findings and recommendations with the team in our upcoming meeting. If you have any specific areas you'd like me to delve deeper into, please let me know, and I'll be glad to assist.
                        </div>

                        <div>
                            <Reviewww />
                        </div>
                    </div>
                </div>



                <div>
                    <div>
                        <div>
                            <img src={lee} alt="" />
                            <h1 className="text-[28px] font-bold ">lee Ning</h1>
                            <p className="text-xs font-medium text-[#FFDB00]">data analyst</p>
                        </div>

                        <div>
                            I look forward to discussing these findings and recommendations with the team in our upcoming meeting. If you have any specific areas you'd like me to delve deeper into, please let me know, and I'll be glad to assist.
                        </div>

                        <div>
                            <Reviewww />
                        </div>
                    </div>
                </div>


                <div>
                    <div>
                        <div>
                            <img src={moses} alt="" />
                            <h1 className="text-[28px] font-bold ">Okole Moses</h1>
                            <p className="text-xs font-medium text-[#FFDB00]">data analyst</p>
                        </div>

                        <div>
                            I look forward to discussing these findings and recommendations with the team in our upcoming meeting. If you have any specific areas you'd like me to delve deeper into, please let me know, and I'll be glad to assist.
                        </div>

                        <div>
                            <Reviewww />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Reviewww() {
    return (
        <div>
            <p className="text-xs font-medium text-[#FFDB00]">data compression</p>
            <div className="flex flex-row justify-center gap-1">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
        </div>
    )
}