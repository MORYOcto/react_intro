import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Beers} from "./Beers.js";

function App() {

  return (
  
    <div className="App">
      <Beers pageNumber = {1}></Beers>
    </div>
  );
}

export default App;
