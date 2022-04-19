import './App.css';
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  const [infoBrews, setInfoBrews] = useState([])

    useEffect(() => {
        fetch("https://api.openbrewerydb.org/breweries")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setInfoBrews(data)
        })
    }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/integrify_breweries_app" element={<Home infoBrews={infoBrews}/>}/>
        <Route path="/:brewId" element={<Detail infoBrews={infoBrews}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
