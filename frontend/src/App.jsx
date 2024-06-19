// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Box } from '@mui/material';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { Account } from './components/Account';
import Status from './components/Status';
import ProtectedRoutes from './components/ProtectedRoutes';
import Profile from './components/Profile';
function App() {
    return (
        <Router>
            <Account>
                {/* <Stack direction='row' spacing={2} justifyContent='space-between'> */}
                <Box display='flex'>
                    <Box flex='1'>
                        <Sidebar />
                    </Box>
                    <Box flex='7'>
                        <Routes>
                            <Route path='/signin' element={<SignInPage />} />
                            <Route path='/signup' element={<SignUpPage />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />
                            {/* <Route element={<ProtectedRoutes />}>
                                <Route element={<Profile />} path='/profile' /> */}
                            {/* </Route> */}
                        </Routes>
                        {/* <Status /> */}
                    </Box>
                </Box>
            </Account>
        </Router>
    );
}

export default App;
