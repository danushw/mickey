import { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account.jsx';

const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession } = useContext(AccountContext);
    useEffect(() => {
        getSession()
            .then((session) => {
                console.log('Session: ', session);
                setStatus(true);
            })
            .catch((err) => {
                console.error('Not logged in', err);
            });
        console.log('status111 = ', status);
    });

    return <div>{status ? 'Logged in' : 'Please login'}</div>;
};

export default Status;
