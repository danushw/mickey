// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Box, Stack } from '@mui/material';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <Router>
            <Sidebar />
            <>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
