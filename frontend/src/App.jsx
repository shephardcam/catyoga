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
import LoginPage from './pages/LoginPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  // const [users, setUsers] = useState([]);
  const [yogaClasses, setYogaClasses] = useState([]);
  const [yogaClassInfo, setYogaClassInfo] = useState([]);
  // const [isLoadingUsers, setIsLoadingUsers] = useState(true);

  // Login /////////////////////////////////  
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user info from the cookie
    const userCookie = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const parsedUser = userCookie ? JSON.parse(decodeURIComponent(userCookie)) : null;

    setUser(parsedUser);
  }, []);

  const handleLogin = async (loggedInUser) => {
    // Set cookie with the user info
    document.cookie = `user=${JSON.stringify(loggedInUser)}; path=/`;

    setUser(loggedInUser);
  };

  const handleLogout = () => {
    // Remove user cookie
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
    }
  };
  // End of Login helpers /////////////////////////////////////////

  // Get yoga_classes
  useEffect(() => {
    // Fetch data from the Express API
    fetch("/api/yoga-classes")
      .then((response) => response.json())
      .then((data) => {
        setYogaClasses(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
  }, []);

  // Get yoga_class_info
  useEffect(() => {
    // Fetch data from the Express API
    fetch("/api/yoga-class-info")
      .then((response) => response.json())
      .then((data) => {
        setYogaClassInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
  }, []);

  // // Get other data
  // useEffect(() => {
  //   // Fetch user data from the Express API
  //   fetch("/api/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setIsLoadingUsers(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //       setIsLoadingUsers(false);
  //     })
  // }, []);

  return (
    <div className="App">
      <Router>
      <TopNav user={user} />
      {/* Handles which pages load dependant on if user logged in */}
      {user ? (
        // Pages accessible when logged in (all pages)
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/FAQ' element={<FAQPage />} />
          <Route path='/profile' element={<ProfilePage onLogout={handleLogout} yogaClasses={yogaClasses} yogaClassInfo={yogaClassInfo} user={user}/>} />
          <Route path='/yoga-class-info' element={<BookingPage actualYogaClasses={yogaClasses} user={user} />} />
          <Route path='/waiver' element={<WaiverPage />} />
          <Route path='/payment' element={<PaymentPage user={user} yogaClasses={yogaClasses} />}/>
          <Route path='/thankyou' element={<ThankYouPage/>}/>
        </Routes>
      ) : (
        // Pages accessible when not logged in (notice that waiver and payment will not load when not logged in)
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/FAQ' element={<FAQPage />} />
          <Route path='/yoga-class-info' element={<BookingPage yogaClasses={yogaClasses} />} />
          <Route path='/login' element={<LoginPage handleLogin={handleLogin} handleRegistration={handleRegistration}/>} />
        </Routes>
      )}

      </Router>

      {/* <p>
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
  
      )} */}

    </div>
  );
}

export default App;
