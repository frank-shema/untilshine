// import React from 'react';
import ring from '../assets/about/Rectangle 18.svg'
import people from '../assets/about/Rectangle 19.svg'

export default function About() {
    return (
        <div>
            <div>
                <h1>About us</h1>
                <p>More about our company</p>
            </div>

            <div>
                <div>
                    <img src={ring} alt="" />
                    <img src={people} alt="" />
                </div>
                <div>
                    <div>
                        <h1>Us</h1>
                        <p>we are passionate about gaming and dedicated to creating extraordinary experiences for players all around the world. Founded in [Year of Establishment], our company has emerged as a leading force in the gaming industry, driven by innovation, creativity, and an unwavering commitment to delivering top-notch gaming content.</p>
                    </div>
                    <div>
                        <h1>Our mission</h1>
                        <p>Our mission is simple yet powerful - to craft captivating and immersive gaming experiences that resonate with players of all ages and backgrounds. We strive to create games that not only entertain but also challenge the boundaries of imagination, pushing the limits of interactive storytelling, gameplay mechanics, and visual aesthetics.</p>
                    </div>

                    <div>
                        <h1>Join Us on this Journey</h1>
                        <p>Join us on an exhilarating journey through the realms of imagination and gaming excellence. At our Company, we look forward to welcoming you into our ever-growing family of gamers, where you can forge friendships, conquer challenges, and create memories that last a lifetime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
