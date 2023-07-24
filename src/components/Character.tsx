// import React from 'react';
import Robert from '../assets/characters/Robert-2-removebg-preview 3.png'
import Cindy from '../assets/characters/Cindy-1-removebg-preview 1.png'
import laura from '../assets/characters/Laura-2-removebg-preview 1.png'

export default function Character() {
    return (
        <div>
            <div>
                <h1>Our characters</h1>
                <p>Each time you win the game (at least one person survives) you unlock a profile icon, so you can customize your leaderboard appearance, or show off how far you’ve gone. 100 pages of lore are also available to pickup in-game, explaining the story of this fantasy dystopic world.</p>
            </div>

            <div>
                <div>
                    <img src={Robert} alt="" />
                    <div>
                        <h1>Robert</h1>
                        <p>Playas Robert, a simple yet stubborn woodsman, skilled in survival, mechanics and firearms. Ex-military? Nope. Everyone is a badass in order to survive in the woods of Lupinshire.</p>
                    </div>
                </div>

                <div>
                    <img src={Cindy} alt="" />
                    <div>
                        <h1>Cindy</h1>
                        <p>A typical 14yo teenage girl, bored of the woods and awaiting her next visit to the village, or better, the big city. </p>
                    </div>
                </div>


                <div>
                    <img src={laura} alt="" />
                    <div>
                        <h1>Laura</h1>
                        <p>Your fancy city wife loved you enough to stay with you, away from the comfort and services of Ultrapolis. Armed with her shotgun, she will do her best to keep your children safe, lest you allow a fowl creature to get inside, </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
