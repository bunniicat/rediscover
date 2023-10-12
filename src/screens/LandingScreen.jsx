import { FaLeaf } from 'react-icons/fa';
import Button from '../components/Button';

const LandingScreen = () => {
  return (
    <header className='header'>
      <div className='header_logo'>
        <FaLeaf />
      </div>

      <div className='heading_box'>
        <h1>Rediscover the beauty in nature</h1>
        <Button text={'Discover with us'} customClasses={'mt__4'} />
      </div>
    </header>
  );
};

export default LandingScreen;
