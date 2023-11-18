import "./App.scss";
import React from "react";
import TopNav from './components/TopNav';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {/* <h1 className='App-link'> Cat Yoga</h1> */}
      <TopNav/>
      <Login />
    </div>
  );
}

export default App;
