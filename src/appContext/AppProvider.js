import { createContext, useState } from "react";
import axios from "axios";
import useAuth from "../auth/useAuth";

export const AppProvider = createContext();

const AuthProvider = ({ children }) => {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);

  const getAllLinks = async () => {
    try {
      const response = await axios.get(
        `links`,{ headers: user }
      );
      setLinks(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const addNewLink = async (link) => {
    console.log(user);
    console.log(link);
    try {
      const response = await axios.post(
        `links/`, link,{ headers: user }
      );
      console.log(response);
      getAllLinks()
    } catch (error) {
      console.log(error);
    }
  };

  console.log(links)
  const contextValue = {
    addNewLink,
    links,
    getAllLinks
  };
  return (
    <AppProvider.Provider value={contextValue}>{children}</AppProvider.Provider>
  );
};
export default AuthProvider;
