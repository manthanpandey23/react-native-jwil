import React, {useState, createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = props => {
    const [authState, setAuthState] = useState({
        accessToken: null, 
        user: '',
        mail: ''
    });

    return (
        <AuthContext.Provider value={[authState, setAuthState]}>
            {props.children}
        </AuthContext.Provider>    
    );
}