import { eventsData } from '../data/eventsData';
import EventCard from '../components/FeaturedCard';

const EventScreen = () => {
  return (
    <>
      <div className='eventPageDecorTop'></div>
      <div className='eventsContainer'>
        <div className='eventsContent'>
          <h2 className='heading_2'>All current events</h2>
          <div className='allEventsContainer'>
            {eventsData.map((event) => {
              return <EventCard event={event} />;
            })}
          </div>
        </div>
      </div>
      <div className='eventPageDecorBottom'></div>
    </>
  );
};

export default EventScreen;
