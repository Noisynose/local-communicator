import React, { useState } from 'react';
import { anonymousLogin } from './AuthenticationConfig';
import { unauthenticatedUser, User } from './User';

type Username = string;

type AuthContext = {
    user: User,
    username: Username,
    login: () => Promise<void>,
    rename: (name: string) => void,
}

const defaultUsername = 'Anonymous';

export const AuthenticationContext = React.createContext<AuthContext | undefined>(undefined);

export const AuthenticationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [user, setUser] = useState<User>(unauthenticatedUser());
    const [username, setUsername] = useState<Username>(defaultUsername);

    const login = async () => {
        const user = await anonymousLogin();
        setUser(user);
    }

    const rename = (name: string) => {
        setUsername(name.length > 0 ? name : defaultUsername);
    }

    return <AuthenticationContext.Provider value={{ user, username, login, rename }}>{children}</AuthenticationContext.Provider>;
};

export const useAuthentication = (): AuthContext => {
    const value = React.useContext(AuthenticationContext);

    if (!value) {
        throw new Error("Missing Authentication Context value");
    }

    return value;
}
