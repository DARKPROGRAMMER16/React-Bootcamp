import React from "react";
import "./header.css";

const Header = (parameters) => {
  const { handleLogout, username } = parameters;

  return (
    <div className="header">
      <div className="headingName">
        <h1>Movies JOY</h1>
      </div>
      <div className="user">
        <h3>{parameters.user}</h3>
        {username ? (
          <button onClick={() => handleLogout("")}>logout</button>
        ) : (
          <></>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
