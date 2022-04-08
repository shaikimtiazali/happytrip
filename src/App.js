import './App.css'; import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './modules/Home';
import Thankpage from './modules/Footer/header/Thankpage';
import BookFlight from './modules/BookFlight';
import SearchFlight from './modules/SearchFlight';
import Payment from './Features/Payment/Payment';
import { PayProvider } from '../src/context/PayContext';

function App() {
  return (
    

    <PayProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanku" element={<Thankpage />} />
        <Route path="/BookFlight" element={<BookFlight />} />
        <Route path="/SearchFlight" element={<SearchFlight />} />
        <Route path="/Payment" element={<Payment />} />
        
      </Routes>
      </Router>
      </PayProvider>
    // </BrowserRouter>
  )
}

export default App


