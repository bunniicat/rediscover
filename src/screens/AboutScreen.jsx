import TeamCard from '../components/TeamCard';
import teamMember1 from '../assets/team1.jpg';
import teamMember2 from '../assets/team2.jpg';
import teamMember3 from '../assets/team3.jpg';
import teamMember4 from '../assets/team4.jpg';

const AboutScreen = () => {
  return (
    <div className='mainContainer'>
      <div className='aboutContainer'>
        <div className='aboutText'>
          <h1 className='aboutHeading'>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <br />
          <p>
            Nisi lacus sed viverra tellus in hac habitasse platea. Vel eros donec ac odio tempor. Dictum sit amet justo
            donec enim diam. Lacus vestibulum sed arcu non odio euismod lacinia. Mattis vulputate enim nulla aliquet
            porttitor lacus luctus accumsan tortor. In massa tempor nec feugiat nisl. Metus aliquam eleifend mi in nulla
            posuere sollicitudin aliquam ultrices. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Fringilla
            ut morbi tincidunt augue.
          </p>
        </div>

        <div className='aboutTeam'>
          <h2 className='heading_2'>Meet our team</h2>
          <div className='teamCards'>
            <TeamCard image={teamMember1} name={'Mary Ann'} role={'CEO'} />
            <TeamCard image={teamMember2} name={'Jane Doe'} role={'CTO'} />
            <TeamCard image={teamMember3} name={'John Smith'} role={'Customer Relation Manager'} />
            <TeamCard image={teamMember4} name={'Jane Smith'} role={'Event Manager'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
