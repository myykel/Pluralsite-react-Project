import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import FeaturedHouse from './featured-house';

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch('./houses.json');
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" title="new title" />
        <Routes> {/* Wrap routes in 'Routes' component */}
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />} /> {/* Use 'element' prop to define the component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
