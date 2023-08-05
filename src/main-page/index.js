import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" title="new title" />
        <HouseFilter allHouses={allHouses} />
        <Routes> {/* Wrap routes in 'Routes' component */}
          <Route path="/searchresults/:country" element={<SearchResults allHouses={allHouses} />} />
          <Route path="/house/:id" element={<HouseFromQuery allHouses={allHouses} />} />
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />} /> {/* Use 'element' prop to define the component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
