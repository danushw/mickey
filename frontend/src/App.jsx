// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Box } from '@mui/material';

function App() {
    return (
        <Router>
            {/* <Stack direction='row' spacing={2} justifyContent='space-between'> */}
            <Box display='flex'>
                <Box flex='1'>
                    <Sidebar />
                </Box>
                <Box flex='7'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

export default App;
