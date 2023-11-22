
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
    </div>
  );
}

export default App;
