import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Navbar handleSidebarOpen={handleSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default App;
