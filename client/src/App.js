import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { useState } from "react";

function App() {
  // const [FirstName, setFirstName] = useState("");
  // const [LastName, setLastName] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");

  return (
    <div className="App">
      <Navbar />
      {/* <h1>Register</h1>
      <form>
        <input
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="FirstName"
        />
        <input
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="LastName"
        />
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form> */}
    </div>
  );
}

export default App;
