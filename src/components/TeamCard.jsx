import React from 'react';

const TeamCard = ({ image, name, role }) => {
  return (
    <div className='teamCard border_gradiant'>
      <div className='teamCardImage'>
        <img src={image} alt='team member' />
      </div>
      <div className='teamCardText'>
        <h3 className='heading_3'>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
