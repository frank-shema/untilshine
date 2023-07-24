// import React from 'react';
import killer from '../assets/features/Group 6.png'
import land from '../assets/features/Group 7.png'
import head from '../assets/features/Group 10.png'

export default function Features() {
  return (
    <div>
      <div>
        <button><a href="">Start Game</a></button>
      </div>

      <div>
        <h1>Our features</h1>
        <p>Explore or awesome features</p>
      </div>

      <div>
        <div>
          <div>
            <a href=""><img src={killer} alt="" /></a>
            <div>
              <h1>Every game is different</h1>
              <p>Each game has a few planned story events, and lots of randomized events, weather, spawn waves</p>
              <button><a href="">Start now</a></button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <a href=""><img src={land} alt="" /></a>
            <div>
              <h1>Stay close to home</h1>
              <p>Staying away from the front of your house will spell your doom, for you and your family</p>
              <button><a href="">Start now</a></button>
            </div>
          </div>
        </div>


        <div>
          <div>
            <a href=""><img src={head} alt="" /></a>
            <div>
              <h1>Awesome characters</h1>
              <p>Control any character you want in your story .Staying away from the front of your house will spell your doom, for you and your...</p>
              <button><a href="">Start now</a></button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a href="">Learn more</a>
      </div>
    </div>
  );
}
