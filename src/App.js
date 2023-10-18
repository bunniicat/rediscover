import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import LandingScreen from './screens/LandingScreen';
import './style.css';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<LandingScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
