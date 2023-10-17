const InfoCard = ({ icon, title }) => {
  return (
    <div className='infoCard p__2 border_gradiant'>
      <div className='infoCard_icon'>{icon}</div>
      <div className='infoCard_text'>
        <h3 className='mb__1 heading_3'>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
