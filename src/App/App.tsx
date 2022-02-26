import React from 'react';
import './App.css';
import RoutesComponent from "./RoutesComponent";
import Header from "../components/common/Header/Header";




function App() {
  return (
    <div className="App">
      <Header/>
      <RoutesComponent/>
    </div>
  );
}

export default App;
