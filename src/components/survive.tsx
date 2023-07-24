// import React from 'react';
import wolves from '../assets/main/Rectangle 6.png'
import circle from '../assets/elipses/Ellipse 2.svg'
import SocialMediaIcons from './icons';
import killers from '../assets/main/Rectangle 7.png'

const Survive = () => {
    return (
        <div>
            {/* the first one  */}
            <div>
                <div>
                    <div>
                        1
                    </div>
                    <div>
                        <h1>Survive the night</h1>
                        <p>Until Sunrise is a repeatable game that lasts 24 minutes,spanning 24 in-game hours. From enjoying your morning coffee at 7am, you must fend off waves of wolves,
                            eventually monsters, until 7am the next morning
                        </p>
                    </div>
                    <div>
                        <img src={wolves} alt="" />
                        <img src={circle} alt="" />
                    </div>
                </div>

                <div>
                    <SocialMediaIcons />
                </div>
            </div>


            <div>
                <div>
                    <img src={killers} alt="" />
                    <img src={circle} alt="" />
                </div>

                <div>
                    <div>
                        2
                    </div>

                    <div>
                        <h1>Save your family</h1>
                        <p>Your wife Laura, your daughter Cindy, and your baby boy Tom, are inside the house. Prevent wolves (and others) from entering. Each time one enters, a family member dies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Survive;
