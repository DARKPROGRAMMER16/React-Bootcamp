import React, { useState } from "react";
import "./login.css";

const Login = (props) => {
  const { handleLogin } = props;

  const [input, setInput] = useState("");

  return (
    <>
      <div className="login">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button+
          onClick={(e) => {
            handleLogin(input);
            setInput("");
          }}
        >
          Enter as {input}
        </button+>
      </div>
    </>
  );
};

export default Login;
