import { useContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import Login from "./Components/Login";
import Parent from "./Components/Parent";
import { DataContext } from "./DataProvider";

function App() {
  const { newUserName } = useContext(DataContext);

  return (
    <div className="app">
      <Header />

      {newUserName ? (
        <>
          {/* <Parent  /> */}

          <Movies />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
