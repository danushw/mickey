import { Outlet, Navigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account.jsx';

const ProtectedRoutes = () => {
    const [status, setStatus] = useState(false);
    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        console.log('In ProtectedRoutes use effect');
        getSession()
            .then((session) => {
                console.log('Session222: ', session);
                setStatus(true);
            })
            .catch((err) => {
                console.error('Not logged in', err);
            });

        console.log('status = ', status);
    });

    return status ? <Outlet /> : <Navigate to='/signin' />;
};
export default ProtectedRoutes;
