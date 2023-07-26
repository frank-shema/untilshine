// import React from 'react';
import FacebookIcon from '../assets/icons/Group1.svg'
import YouTubeIcon from '../assets/icons/Group2.svg'
import GoogleIcon from '../assets/icons/Group3.svg'
import LinkedInIcon from '../assets/icons/Group4.svg'
import TwitterIcon from '../assets/icons/Group5.svg'


export const SocialMediaIcons1 = () => {
  return (
    <div className='flex flex-col gap-4'>
      <a href=""> <img src={FacebookIcon} alt="" /></a>
      <a href=""> <img src={YouTubeIcon} alt="" /></a>
      <a href=""> <img src={GoogleIcon} alt="" /></a>
      <a href=""> <img src={LinkedInIcon} alt="" /></a>
      <a href="">  <img src={TwitterIcon} alt="" /></a>
    </div>
  );
};
export const SocialMediaIcons2 = () => {
  return (
    <div className='flex flex-row gap-4'>
      <a href=""> <img src={FacebookIcon} alt="" /></a>
      <a href=""> <img src={YouTubeIcon} alt="" /></a>
      <a href=""> <img src={GoogleIcon} alt="" /></a>
      <a href=""> <img src={LinkedInIcon} alt="" /></a>
      <a href="">  <img src={TwitterIcon} alt="" /></a>
    </div>
  );
};


