import React, { useContext } from "react";
import "./header.css";
import { DataContext } from "../DataProvider";

const Header = (parameters) => {
  const { handleLogout, username } = parameters;

  const { newUserName, setNewUserName } = useContext(DataContext);

  return (
    <div className="header">
      <div className="headingName">
        <h1>Movies JOY</h1>
      </div>
      <div className="user">
        <h3>{newUserName}</h3>
        {newUserName ? (
          <button onClick={() => setNewUserName("")}>logout</button>
        ) : (
          <></>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
