import { IoLocationSharp, IoToday } from 'react-icons/io5';

const FeaturedCard = ({ event }) => {
  return (
    <div className='featuredCard'>
      <img src={event.image} className='featuredCard_img' alt='event preview' />
      <div className='featuredCard_info'>
        <h3 className='featuredCard_title mt__1'>{event.title}</h3>
        <div className='featuredCard_dateLocation'>
          <div className='flex justify__sb'>
            <span className='icon_span'>
              <IoToday />
            </span>
            <p className='featuredCard_date'>{event.date}</p>
          </div>

          <div className='flex justify__sb'>
            <span className='icon_span'>
              <IoLocationSharp />
            </span>
            <p className='featuredCard_location'>{event.location}</p>
          </div>
        </div>
        <p className='featuredCard_description'>{event.description}</p>
        <p className='featuredCard_organizer'>by {event.organizer}</p>
        <button className='link border_gradiant mt__3'>Event Info</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
