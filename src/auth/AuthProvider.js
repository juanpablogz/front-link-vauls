import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      localStorage.removeItem("user");
      console.log(error);
    }
  }, [user]);

  const register = async (values) => {
    let user = {
      email: values.Email,
      password: values.password,
      username: values.Username,
    };
    console.log(user);
    try {
      const response = await axios.post("http://127.0.0.1:3000/api/v1/users/", {user});
      console.log(response);
      setUser(response.headers)
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  const contextValue = {
    user,
    register,
    logout() {
      setUser(null);
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
