import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import Login from "./Components/Login";

function App() {

  const [userName, setUserName] = useState("");

  return (
    <div className="app">
      <Header user={userName} username={userName} handleLogout={setUserName}/>


      


      {userName ? <Movies /> : <Login  handleLogin={setUserName}/>}
    </div>
  );
}

export default App;
