import React, { useState, useContext } from "react";

import { useAuth } from "../Hooks/useAuth";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState();
  const [currentUser, setCurrentUser] = useState({});

  const { login, logout } = useAuth();

  const loginUserVerifier = (uid, token, user) => {
    console.log("hua kuch bhai");
    login(uid, token);

    setCurrentUser(user);

    setUserToken(token);
  };

  const logoutUserVerifier = () => {
    // logout();

    setCurrentUser({});

    setUserToken(null);
    logout();
  };

  const loginAuthContext = (user, token) => {
    setCurrentUser(user);

    setUserToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        currentUser,
        loginUserVerifier,
        logoutUserVerifier,
        loginAuthContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//Custom hook
const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuthContext };
