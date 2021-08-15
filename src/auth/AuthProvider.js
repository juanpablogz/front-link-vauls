import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("username")) || null
  );
  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("username", JSON.stringify(username));
    } catch (error) {
      localStorage.removeItem("user");
      localStorage.removeItem("username");
      console.log(error);
    }
  }, [user, username]);

  const register = async (values) => {
    let user = {
      email: values.Email,
      password: values.password,
      username: values.Username,
    };
    console.log(user);
    try {
      const response = await axios.post(`${ process.env.REACT_APP_URL_DEVELOPMENT }users/`, {user});
      console.log(response);
      setUser(response.headers)
      setUsername(response.data.user.username)
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const login = async (values) => {
    let user = {
      email: values.Email,
      password: values.password
    };
    console.log(user);
    try {
      const response = await axios.post(`${ process.env.REACT_APP_URL_DEVELOPMENT }users/sign_in`, {user} );
      console.log(response);
      setUser(response.headers)
      setUsername(response.data.user.username)
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const contextValue = {
    user,
    register,
    login,
    username,
    logout() {
      setUser(null);
      setUsername(null);
    },
    isLogged() {
      return !!user; // comprueba si el es nulo la doble negacion retorna falso, si existia retorna verdad
    },
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
