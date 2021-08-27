import "./App.css";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')

  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enable","success");
      document.title="TextUtils - DarkMode"
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success");
      document.title="TextUtils - LightMode"
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutTitle="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
