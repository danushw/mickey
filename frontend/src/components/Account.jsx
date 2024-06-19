import { createContext, useState, useEffect } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../assets/UserPool';

const AccountContext = createContext();

const Account = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        getSession()
            .then(() => {
                setIsAuthenticated(true);
            })
            .catch(() => {
                setIsAuthenticated(false);
            });
    }, []);

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();

            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });
            } else {
                reject();
            }
        });
    };

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username,
                Pool,
            });

            const authDetails = new AuthenticationDetails({
                Username,
                Password,
            });

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log('onSuccess: ', data);
                    setIsAuthenticated(true);
                    resolve(data);
                },
                onFailure: (err) => {
                    console.error('onFailure:', err);
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log('newPasswordRequired: ', data);
                    resolve(data);
                },
            });
        });
    };

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
            setIsAuthenticated(false);
        }
    };

    return (
        <AccountContext.Provider
            value={{ authenticate, getSession, isAuthenticated, logout }}
        >
            {props.children}
        </AccountContext.Provider>
    );
};

export { Account, AccountContext };
