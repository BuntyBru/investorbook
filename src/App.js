import React from 'react';
import './App.css';
//import Investors from './components/Investors';
import Header from './components/Header';
import { Router } from "@reach/router";
import FirstPage from "./components/FirstPage";


function App() {
  return (
    <div className="App">
    <Header/>
    <div className='rest-body'>

    <Router>
    <FirstPage path='/' />
    </Router>
 
      </div>
  
    </div>
  );
}

export default App;
