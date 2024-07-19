import React from "react";
import Child from "./Child";

const Parent = (props) => {
  const { username } = props;
  return (
    <div>
      Parent
      <Child username={username}>
        <h1>hello</h1>
      </Child>
    </div>
  );
};

export default Parent;
