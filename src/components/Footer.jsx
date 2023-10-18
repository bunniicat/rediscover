import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer mt__5'>
      <p className='footer_c'>
        &copy; 2023 <span className='footer_c__span'>Nina Nguyen || For Personal Use</span>
      </p>
      <div className='footer_socials'>
        <div className='social_icons'>
          <AiFillGithub />
          <AiFillLinkedin />
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
};

export default Footer;
