import { GiArchiveRegister } from 'react-icons/gi';
import { FaMapSigns } from 'react-icons/fa';
import { HiTicket } from 'react-icons/hi';
import Button from '../components/Button';
import InfoCard from '../components/InfoCard';
import { eventsData } from '../data/eventsData';
import FeaturedCard from '../components/FeaturedCard';
import Review from '../components/Review';

const LandingScreen = () => {
  return (
    <>
      <header className='header'>
        <div className='heading_box'>
          <h1>Co-mmunity Events</h1>
          <h2>Browse and register for events in your local community</h2>
          <Button text={'Get Started'} customClasses={'mt__4'} />
        </div>
      </header>

      <div className='mainContainer'>
        <div className='infoSection mt__5 pb__5 pt__2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Semper viverra nam libero justo laoreet. A diam sollicitudin tempor id. Iaculis eu non
            diam phasellus vestibulum. Pulvinar sapien et ligula ullamcorper.
          </p>
        </div>

        <div className='infoCards'>
          <InfoCard title={'Find Events'} icon={<FaMapSigns />} />
          <InfoCard title={'Register'} icon={<GiArchiveRegister />} />
          <InfoCard title={'Event Tickets'} icon={<HiTicket />} />
        </div>

        <div className='featuredEvents mt__5'>
          <div className='featuredEventsContent'>
            <h2 className='heading_4'>Featured Events</h2>
            <div className='featuredEventsCards mt__4'>
              {eventsData.map((event) => {
                if (event.featured) {
                  return <FeaturedCard event={event} key={event._id} />;
                } else {
                  return null;
                }
              })}
            </div>
            <div className='featured_btn'>
              <Button text={'View All Events'} customClasses={'mt__4'} />
            </div>
          </div>
        </div>

        <div className='reviewsSection mt__5'>
          <div className='reviewsSectionContent'>
            <h2 className='heading_2 mb__4'>What people in your community think about us</h2>
            <Review
              name={'John Mike'}
              title={'Great Experience'}
              date={'12/12/2021'}
              reviewText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
              rating={5}
            />
            <Review
              name={'Lily Rose'}
              title={'Met so many great new people!'}
              date={'01/02/2023'}
              reviewText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
              rating={4}
            />
            <Review
              name={'Danny Mill'}
              title={'Have enchanced my social life so much!'}
              date={'12/14/2022'}
              reviewText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
