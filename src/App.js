import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Error from './components/Error';

import './App.css';
import Profile from './components/profile/Profile';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/rockets" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
