
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  //tells whether dark mode is enabled or not
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#07315c";
      //Alert message for dark mode / light mode toggle
      showAlert("Dark mode has been set", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been set", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <NavBar title="LexoCraft" aboutApp="About App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        <Routes>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/' element={<TextForm heading="Enter text to analyze" mode={mode} />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
