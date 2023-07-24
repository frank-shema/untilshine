// import React from 'react';
import logo from '../assets/elipses/Group.svg'

export default function Navbar() {
  return (
    <div className='flex flex-row gap-[15vw] ml-[8vw] mr-[8w] pt-[20px]'>
      <div className='flex flex-row gap-3'>
        <img src={logo} alt="" />
        <p className='uppercase text-[20px] font-[900] mt-5'>untilsunrise</p>
      </div>

      <div>
        <nav className='flex flex-row gap-8 font-[100] text-[20px] pt-[15px]'>
          <p><a href="">Home</a></p>
          <p><a href="">Community</a></p>
          <p><a href="">Leatherboard</a></p>
          <p><a href="">Contact</a></p>
        </nav>
      </div>

      <div className='flex flex-row gap-5'>
        <button className='w-[150px] h-[50px] border-white border-[1px]  rounded-[24px] capitalize'><a href="">signup</a></button>
        <button className='bg-btn rounded-[24px] text-black w-[150px] p-0 h-[50px] capitalize'><a href="">login</a></button>
      </div>
    </div>
  );
}
