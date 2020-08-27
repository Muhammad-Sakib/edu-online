import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courselist from './components/Courselist/Courselist';
function App() {
    
  return (
    <div className="App">
      <Header></Header>
      <Courselist></Courselist>
    </div>
  );
}

export default App;
