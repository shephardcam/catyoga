import "./App.scss";
import React from "react";
import TopNav from './components/TopNav';

import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/faq" Component={FAQ}/>
      <Route exact path="/booking" Component={booking}/>

      
      <TopNav/>
     
    </div>
  );
}

export default App;
