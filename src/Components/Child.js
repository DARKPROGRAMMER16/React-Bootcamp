import React, { useContext } from "react";
import { DataContext } from "../DataProvider";

const Child = (props) => {
  const { username, children } = props;

  const { newUserName } = useContext(DataContext);

  return (
    <div>
      {children}
      <h1>Child - {newUserName}</h1>
    </div>
  );
};

export default Child;
