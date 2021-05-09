


import Hero from '../Hero-section/Hero';
import LatestMovie from '../LatestMovie-section/LatestMovie';
import Navheader from '../Nav-header/nav';
import RoutingUrl from '../RoutingUrl/RoutingUrl';
import TotalSection from '../TotalSection/TotalSection';

import {
  BrowserRouter, Router,
  Route

} from "react-router-dom";



import './App.css';
import DetailsMovie from '../DetailsMovie/DetailsMovie';

function App() {
  return (

    <div>
      <RoutingUrl />
    </div>

  );
}

export default App;
