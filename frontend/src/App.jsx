import React, { useEffect, useState } from 'react';

import './App.scss';
import TopNav from './components/TopNav'
import {  Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import WaiverPage from './pages/WaiverPage';


function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the Express API
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

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
          <Route path='/waiver' element={<WaiverPage/>}/>
        </Routes> 
      
      </Router>
         
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


      <h1>User List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.fullname}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;
