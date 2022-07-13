import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Connect } from './pages/Connect';
import { Home } from './pages/Home';
import { Wallet } from './pages/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='wallet/' element={<Wallet />} />
        <Route path='wallet/connect/:id' element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
