import React from 'react';
import './App.css';
import  Home  from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="navbar"> 
        <h2 style={{color:"white"}}>Shoe Store</h2>
        <ul className="nav_links">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PRODUCTS</li>
        </ul>
      </div>
      <Home />
    </div>
  );
}

export default App;
