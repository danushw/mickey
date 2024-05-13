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
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    return (
        <Box
            bgcolor='skyblue'
            height='100vh'
            flex={1}
            p={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <List>
                <Link
                    style={{ textDecoration: 'inherit', color: 'inherit' }}
                    to='/'
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    <ListItem disablePadding>
                        <ListItemButton component='a'>
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
                        <ListItemButton component='a'>
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
                        <ListItemButton component='a'>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary='Contact' />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Box>
    );
};

export default Sidebar;
