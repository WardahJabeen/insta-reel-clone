import React from "react"
import './App.css';

function App() {
  return (
    <div className="app">
      {/* logo and heading "reel" */}
      <div className="top">
        <img className="logo"
          src="/images/Instagram_icon.png"
          alt="" />

        <h1>Reels</h1>
      </div>

      {/* scrollable reels */}
      <div className="videos"></div>
    </div>
  );
}

export default App;
