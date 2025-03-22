import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Event from './Event';
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/event' element={<Event/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
