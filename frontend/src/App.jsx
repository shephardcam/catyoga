import React, { useEffect, useState } from 'react';

import './App.scss';
import TopNav from './components/TopNav'
import {  Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';


function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8001/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);



  return (
    <div className="App">
      <Router>
      <TopNav/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/booking' element={<BookingPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/FAQ' element={<FAQPage/>}/>
            
        </Routes> 
      
      </Router>
         
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      {/* testing backend data fetching */}
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  );
}

export default App;
