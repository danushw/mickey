import React, { useContext, useState, useEffect } from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Home } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useLocation } from 'react-router-dom';
import { AccountContext } from './Account';

const Sidebar = () => {
    const location = useLocation();
    const { isAuthenticated, logout } = useContext(AccountContext);

    const [dummy, setDummy] = useState(false);
    const forceUpdate = () => setDummy(!dummy);

    // useEffect(() => {
    //
    //     forceUpdate();
    // }, [isAuthenticated]);
    // const handleLogIn = () => {};
    const handleLogout = () => {
        logout();
        forceUpdate();
    };
    return (
        <Box
            bgcolor='skyblue'
            height='100vh'
            flex={1}
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <List>
                <Link
                    style={{ textDecoration: 'inherit', color: 'inherit' }}
                    to='/'
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    <ListItem disablePadding>
                        <ListItemButton component='span'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary='Homepage' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link
                    style={{ textDecoration: 'inherit', color: 'inherit' }}
                    to='/about'
                    className={location.pathname === '/about' ? 'active' : ''}
                >
                    <ListItem disablePadding>
                        <ListItemButton component='span'>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary='About' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link
                    style={{ textDecoration: 'inherit', color: 'inherit' }}
                    to='/contact'
                    className={location.pathname === '/contact' ? 'active' : ''}
                >
                    <ListItem disablePadding>
                        <ListItemButton component='span'>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary='Contact' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                {isAuthenticated ? (
                    <ListItem disablePadding>
                        <ListItemButton component='span' onClick={handleLogout}>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary='Logout' />
                        </ListItemButton>
                    </ListItem>
                ) : (
                    <>
                        <Link
                            style={{
                                textDecoration: 'inherit',
                                color: 'inherit',
                            }}
                            to='/signin'
                            className={
                                location.pathname === '/signin' ? 'active' : ''
                            }
                        >
                            <ListItem disablePadding>
                                <ListItemButton component='span'>
                                    <ListItemIcon>
                                        <LoginIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Sign In' />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link
                            style={{
                                textDecoration: 'inherit',
                                color: 'inherit',
                            }}
                            to='/signup'
                            className={
                                location.pathname === '/signup' ? 'active' : ''
                            }
                        >
                            <ListItem disablePadding>
                                <ListItemButton component='span'>
                                    <ListItemIcon>
                                        <AppRegistrationIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Sign Up' />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </>
                )}
            </List>
        </Box>
    );
};

export default Sidebar;
