import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LandingScreen from './screens/LandingScreen';
import './App.css';
import AboutScreen from './screens/AboutScreen';
import EventScreen from './screens/EventScreen';
import EventSpecificScreen from './screens/EventSpecificScreen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<LandingScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/events' element={<EventScreen />} />
          <Route path='/event/:id' element={<EventSpecificScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
