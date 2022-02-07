import AboutUs from "./component/AboutUs";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from 'react'
import Alert from "./component/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#001020"
      showAlert("dark mode is enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("light mode is enable", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar tital="Mohd Faruk" aboutest="About Us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <AboutUs mode={mode}/>
          </Route>
          <Route path="/">
            <TextForm mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
