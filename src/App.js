import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Error from './components/Error';

import './App.css';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route index path="/rockets" element={<Home />} />
        <Route index path="/profile" element={<Profile />} />
        <Route index path="/missions" element={<Missions />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
