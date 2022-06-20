import React from 'react';
import './App.css';

import {Welcome} from "./components/Welcome";
import {Insurance} from "./components/Insurance";
import {Calc} from "./components/Calc";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Insurance/>
      <Footer/>
    </div>
  );
}

export default App;
