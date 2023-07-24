// import React from 'react';
import fps from '../assets/latest/Rectangle 17 (1).svg'
import Leadbord from '../assets/latest/Rectangle 17 (2).svg'
import comp from '../assets/latest/Rectangle 17 (3).svg'
import dvlptPhase from '../assets/latest/Rectangle 17.svg'

export default function LatestNews() {
    return (
        <div>
            <div>
                <h1>latest news</h1>
                <p>Some of our new blogs</p>
            </div>

            <div>
                <div>
                    <div>
                        <img src={fps} alt="" />
                    </div>
                    <div>
                        <h1>Highly Repeatable Randomized FPS</h1>
                        <p>Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
                        <p><a href="">Read more</a></p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={dvlptPhase} alt="" />
                    </div>
                    <div>
                        <h1>Start playing in Alpha Development Phase</h1>
                        <p>Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
                        <p><a href="">Read more</a></p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={Leadbord} alt="" />
                    </div>
                    <div>
                        <h1>Show off in the Leaderboards</h1>
                        <p>Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
                        <p><a href="">Read more</a></p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={comp} alt="" />
                    </div>
                    <div>
                        <h1>Show off in the Leaderboards</h1>
                        <p>Functional magnetic resonance imaging (fMRI) is a major technique for human brain mapping. We present a Fast Periodic Stimulation (FPS) fMRI approach, demonstrating its high effectiveness in defining category-selective brain regions.</p>
                        <p><a href="">Read more</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
