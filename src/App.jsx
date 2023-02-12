import React from "react";
import "./App.css";
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Building from './pages/Building/Building'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Auth/>} exact />
                <Route path='/home' element={<Home/>} exact />
                <Route path='/home/:id' element={<Building/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
