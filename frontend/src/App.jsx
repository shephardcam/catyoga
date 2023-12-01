import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import Login from './components/Login';
import Registration from './components/Registration';
import LoginPage from './pages/LoginPage';

function App() {
  const [users, setUsers] = useState([]);
  const [yogaClasses, setYogaClasses] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);

  // Login
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user information from the cookie
    const userCookie = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const parsedUser = userCookie ? JSON.parse(decodeURIComponent(userCookie)) : null;

    setUser(parsedUser);
  }, []);

  const handleLogin = async (loggedInUser) => {
    // Set a cookie with the user information
    document.cookie = `user=${JSON.stringify(loggedInUser)}; path=/`;

    setUser(loggedInUser);
  };

  const handleLogout = () => {
    // Remove the user cookie
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    setUser(null);
  };

  const handleRegistration = async (userData) => {
    try {
      const response = await axios.post('/api/users', userData);
      const newUser = response.data;
      setUser(newUser);
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration failure, e.g., show an error message
    }
  };

  // Get other data
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
        <TopNav user={user} onLogout={handleLogout} />
        {user ? (
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
        ) : (
          <Routes>
            <Route path='/login' element={<LoginPage handleLogin={handleLogin} handleRegistration={handleRegistration}/>} />
          </Routes>
        )}

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
