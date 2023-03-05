import React, { useState } from "react";
 import { HashRouter, Routes, Route } from "react-router-dom";


import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";

//  import {  Routes , Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "Grammar Corrector - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "Grammar Corrector - Light Mode";
    }
  };
  return (
    <>
        {/* <Navbar />  */}
       {/* <Navbar  title="Grammer Corrector"  mode={mode} togglemode={togglemode}/>
       <Alert alert={alert} />
    
      <Textform
          showAlert={showAlert}
          heading="Enter your Text to analyze"
          mode={mode}
        />  */}
     
          <div className="container my-3">
          {/* <Textform 
          showAlert={showAlert}
          heading="Enter your Text to analyze"
          mode={mode}
        />   */}
           <HashRouter > 
          <Navbar  title="Grammer Corrector"  mode={mode} togglemode={togglemode}/>
        <Alert alert={alert} />
         <Routes>
        <Route path='/' element={<Textform showAlert={showAlert} heading="Enter your Text to analyze" mode={mode}/>}/>
          <Route path='about' element={<About/>} />
        </Routes>
        </HashRouter> 
      </div> 
   
    </>
  );
}

export default App;
