import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [newUserName, setNewUserName] = useState("");
  const [newMovies, setNewMovies] = useState([]);

  return (
    <DataContext.Provider
      value={{ newUserName, setNewUserName, newMovies, setNewMovies }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
