import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
// import { Link } from '@mui/material';
import BusyZoo from './BusyZoo';
import Admin from './Admin';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Busy Zoo</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<BusyZoo />} />
        </Routes>
        <Routes>
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;