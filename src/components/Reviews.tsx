// import React from 'react';
import lee from '../assets/review/Ellipse 6 (1).svg'
import moses from '../assets/review/Ellipse 6 (2).svg'
import mark from '../assets/review/Ellipse 6.svg'
import star from '../assets/review/Vector.svg'

export default function Reviews() {
    return (
        <div>
            <div>
                <h1>Reviews</h1>
                <p>Learn more about team</p>
            </div>

            <div>
                <div>
                    <div>
                        <img src={mark} alt="" />
                        <h1>mark john</h1>
                        <p>data analyst</p>
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
                        <h1>lee Ning</h1>
                        <p>data analyst</p>
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
                        <h1>Okole Moses</h1>
                        <p>data analyst</p>
                    </div>

                    <div>
                    I look forward to discussing these findings and recommendations with the team in our upcoming meeting. If you have any specific areas you'd like me to delve deeper into, please let me know, and I'll be glad to assist.
                    </div>

                    <div>
                        <Reviewww/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Reviewww() {
    return (
        <div>
            <p>data compression</p>
            <div>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
        </div>
    )
}