// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Missions from './components/Missions';
// import Error from './components/Error';

import './App.css';

const App = () => (
  <>
    <Header />
    <Missions />
    <Home />
  </>
);

export default App;
