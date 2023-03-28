import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Header from "./components/header/Header.jsx";
import Body from "./components/body/Body.jsx";
import { useState } from "react";
import "./App.scss";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Navbar handleSidebarOpen={handleSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Header />
      <Body />
    </div>
  );
}

export default App;
