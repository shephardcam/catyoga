<<<<<<< HEAD
import "./App.scss";
import React from "react";
import TopNav from './components/TopNav';

import { Route, Link } from "react-router-dom";
=======

import './App.scss';
import TopNav from './components/TopNav'
>>>>>>> master

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/faq" Component={FAQ}/>
      <Route exact path="/booking" Component={booking}/>

      
      <TopNav/>
     
=======
      <TopNav/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
>>>>>>> master
    </div>
  );
}

export default App;
