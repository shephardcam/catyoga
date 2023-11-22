import React, { useEffect, useState } from 'react';

import './App.scss';
import TopNav from './components/TopNav'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);



  return (
    <div className="App">
      <TopNav/>
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
