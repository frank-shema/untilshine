// import React from 'react';
import logo from '../assets/elipses/Group.svg'
import ringed from '../assets/elipses/Group 18.svg'
import SocialMediaIcons from './icons';

export default function Footer() {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <p>We strive to create games that not only entertain but also challenge the boundaries of imagination, pushing the limits of interactive storytelling, gameplay mechanics, and visual aesthetics.</p>
                    </div>

                    <div>
                        <SocialMediaIcons />
                    </div>
                </div>

                <div>
                    <h1>quick links</h1>
                    <div>
                        <p><a href="">Home</a></p>
                        <p><a href="">Leaderboard</a></p>
                        <p><a href="">Community</a></p>
                        <p><a href="">Contact</a></p>
                    </div>
                </div>

                <div>
                    <h1>Newsletters</h1>
                    <div>
                        <label htmlFor="email">Enter your Email</label>
                        <input type="email" name='email' placeholder='example@gmail.com' />
                    </div>

                    <div>
                        <button type='submit'><a href="">Subscribe</a></button>
                    </div>
                </div>

                <div>
                    <img src={ringed} alt="" />
                </div>
            </div>

            <div>
                <p>&copyright; 2023 UNTILSUNRISE. All rights reserved.</p>
            </div>
        </div>
    );
}
