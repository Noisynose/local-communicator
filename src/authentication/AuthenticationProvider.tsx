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
const usernameKey = 'hackerman-chat-username';

export const AuthenticationContext = React.createContext<AuthContext | undefined>(undefined);

const getPersistedUsername = (): string => {
    return localStorage.getItem(usernameKey) ?? defaultUsername;
}

const savePersistedUsername = (newValue: string): void => {
    localStorage.setItem(usernameKey, newValue);
}

export const AuthenticationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [user, setUser] = useState<User>(unauthenticatedUser());
    const [username, setUsername] = useState<Username>(getPersistedUsername());

    const login = async () => {
        const user = await anonymousLogin();
        setUser(user);
    }

    const rename = (name: string) => {
        const newName = name.length > 0 ? name : defaultUsername;
        setUsername(newName);
        savePersistedUsername(newName);
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
