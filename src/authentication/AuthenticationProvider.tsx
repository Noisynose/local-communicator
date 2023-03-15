import React, { useState } from 'react';
import { anonymousLogin } from './FirebaseConfig';
import { unauthenticatedUser, User } from './User';

type AuthContext = {
    user: User,
    login: () => Promise<void>,
    rename: (name: string) => void,
}

type Username = string;

const defaultUsername = 'Anonymous';

export const AuthenticationContext = React.createContext<AuthContext | undefined>(undefined);

export const AuthenticationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [user, setUser] = useState<User>(unauthenticatedUser());
    const [name, setName] = useState<Username>(defaultUsername);

    const login = async () => {
        const user = await anonymousLogin();
        setUser(user);
    }

    const rename = (name: string) => {
        setName(name.length > 0 ? name : defaultUsername);
    }

    return <AuthenticationContext.Provider value={{ user, login, rename }}>{children}</AuthenticationContext.Provider>;
};

export const useAuthentication = (): AuthContext => {
    const value = React.useContext(AuthenticationContext);

    if (!value) {
        throw new Error("Missing Authentication Context value");
    }

    return value;
}
