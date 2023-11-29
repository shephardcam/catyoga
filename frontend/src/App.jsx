import React, { useEffect, useState } from 'react';
import './App.scss';
import TopNav from './components/TopNav'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import WaiverPage from './pages/WaiverPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  const [users, setUsers] = useState([]);
  const [yogaClasses, setYogaClasses] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);

  useEffect(() => {
    // Fetch user data from the Express API
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoadingUsers(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoadingUsers(false);
      })
  }, []);

  return (
    <div className="App">
      <Router>
        <TopNav />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/yoga-class-info' element={<BookingPage yogaClasses={yogaClasses} />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/FAQ' element={<FAQPage />} />
          <Route path='/waiver' element={<WaiverPage />} />
          <Route path='/payment' element={<PaymentPage/>}/>
        </Routes>

      </Router>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <h1>User List</h1>
      {isLoadingUsers ? (
        <p>Loading users...</p>
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
