import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link
                        to='/'
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='/about'
                        className={
                            location.pathname === '/about' ? 'active' : ''
                        }
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to='/contact'
                        className={
                            location.pathname === '/contact' ? 'active' : ''
                        }
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Sidebar;
