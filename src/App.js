import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Country from './components/country/Country';
import Home from './components/home/Home';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />}>
          <Route path=':countryName' element={<Country />}/>
        </Route>
      </Routes>
    </Router>
  );
}

