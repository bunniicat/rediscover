import { FaLeaf, FaPlaneDeparture } from 'react-icons/fa';
import { RiServiceFill } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import Button from '../components/Button';
import imageInfo from '../assets/image1.jpg';
import Heading from '../components/Heading';
import InfoCard from '../components/InfoCard';

const LandingScreen = () => {
  return (
    <>
      <header className='header'>
        <div className='header_logo'>
          <FaLeaf />
        </div>

        <div className='heading_box'>
          <h1>Rediscover the beauty in nature</h1>
          <Button text={'Discover with us'} customClasses={'mt__4'} />
        </div>
      </header>

      <main className='row pr__2 pl__2 pt__2'>
        <div className='infoSection'>
          <div className='infoHeader'>
            <Heading type={'h2'} text={'Adventures designed to make you fall in love with nature'} />
          </div>
          <div className='infoContent flex align__c mt__5'>
            <div className='infoText pr__10'>
              <Heading type={'h3'} text={'Cherry-picked experiences put together by experts'} customClasses={'mb__1'} />
              <p className='mb__2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <Heading type={'h3'} text={'Explore the world in a whole new way'} customClasses={'mb__1'} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Integer eget aliquet nibh praesent tristique. Consectetur adipiscing elit ut
                aliquam purus sit amet luctus venenatis. Sed risus ultricies tristique nulla aliquet enim tortor at
                auctor. At augue eget arcu dictum varius duis.
              </p>
            </div>
            <div className='infoImage flex align__c justify__c'>
              <img src={imageInfo} alt='boat tour' />
            </div>
          </div>
        </div>

        <div className='infoCardContainer mt__8'>
          <div className='row'>
            <div className='col-1-of-4'>
              <InfoCard title={'Travel with ease'} icon={<RiServiceFill />} />
            </div>

            <div className='col-1-of-4'>
              <InfoCard title={'Personalised for you'} icon={<FaPlaneDeparture />} />
            </div>

            <div className='col-1-of-4'>
              <InfoCard title={'Loyalty program'} icon={<AiFillStar />} />
            </div>

            <div className='col-1-of-4'>
              <InfoCard title={'24/7 support'} icon={<BiSupport />} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingScreen;
