
import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';


function App() {
  //tells whether dark mode is enabled or not
  const[mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#07315c";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }

  }

  return (
    <>
    <NavBar  title = "LexoCraft" aboutApp ="About App" mode = {mode} toggleMode = {toggleMode}/>
    <div className="container">
    {/* <About/> */}
    <TextForm  heading = "Enter text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
