import React from "react"
import './App.css';
import Login from "./Login";
function App() {
  return (
    // BEM
    <div className="app">
      <h1>Hello I will be building a spotifyluenga-clone -AP</h1>

      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <Login />
    </div>    
  );
}

export default App;
