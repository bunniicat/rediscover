import React from 'react';
import { useParams } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import { IoLocationSharp, IoToday } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

const EventSpecificScreen = () => {
  const { id } = useParams();
  const currentEvent = eventsData[id - 1];

  return (
    <div className='eventContainer'>
      <img src={currentEvent.image} alt='event preview' className='eventImage' />
      <div className='eventInfo'>
        <h2 className='heading_2'>{currentEvent.title}</h2>
        <p className='eventBy'>by {currentEvent.organizer}</p>
        <div className='event_dateLocation'>
          <div className='flex'>
            <span className='icon_span'>
              <IoToday />
            </span>
            <p>{currentEvent.date}</p>
          </div>
          <div className='flex'>
            <span className='icon_span'>
              <IoLocationSharp />
            </span>
            <p>{currentEvent.location}</p>
          </div>
        </div>

        <div className='eventDescription'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Cursus sit amet dictum sit amet justo. Ac odio tempor orci dapibus ultrices in iaculis nunc sed.
          Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Consectetur lorem donec massa sapien.
          Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Quam pellentesque nec nam aliquam sem et.
          Velit egestas dui id ornare arcu odio ut sem. Integer enim neque volutpat ac tincidunt vitae semper. Malesuada
          fames ac turpis egestas integer eget aliquet. Cras semper auctor neque vitae tempus quam pellentesque nec nam.
          Leo a diam sollicitudin tempor id eu nisl nunc. Mattis enim ut tellus elementum sagittis vitae et.
        </div>

        <div className='aboutOrganizer'>
          <h3 className='heading_3 mt__4'>About the organizer</h3>
          <p>
            Tellus integer feugiat scelerisque varius morbi. Integer malesuada nunc vel risus commodo viverra maecenas
            accumsan lacus. Aenean sed adipiscing diam donec adipiscing tristique.{' '}
          </p>

          <div className='organizerRating'>
            <h3 className='heading_3 mt__2'>Organizer Rating</h3>
            <div className='flex align__c'>
              <AiFillStar color='#efc88b' />
              <AiFillStar color={currentEvent.organizerRating >= 2 ? '#efc88b' : 'rgb(82, 82, 82)'} />
              <AiFillStar color={currentEvent.organizerRating >= 3 ? '#efc88b' : 'rgb(82, 82, 82)'} />
              <AiFillStar color={currentEvent.organizerRating >= 4 ? '#efc88b' : 'rgb(82, 82, 82)'} />
              <AiFillStar color={currentEvent.organizerRating >= 5 ? '#efc88b' : 'rgb(82, 82, 82)'} />
            </div>
          </div>

          <div className='event_btns'>
            <button className='link border_gradiant mt__4'>Participate</button>
            <button className='link border_gradiant mt__4'>Contact the host</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSpecificScreen;
