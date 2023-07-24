// import React from 'react';
import logo from '../assets/elipses/Group.svg'

export default function Navbar() {
  return (
    <div>
      <div className='bg-red-400'>
        <img src={logo} alt="" />
        <p>untilsunrise</p>
      </div>

      <div>
        <nav>
          <p><a href="">Home</a></p>
          <p><a href="">Community</a></p>
          <p><a href="">Leatherboard</a></p>
          <p><a href="">Contact</a></p>
        </nav>
      </div>

      <div>
        <button><a href="">signup</a></button>
        <button><a href="">login</a></button>
      </div>
    </div>
  );
}
