import React from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import Icon from "../../assets/Icon.png";

const Navbar = ({ handleSidebarOpen }) => {
  return (
    <nav className="navbar">
      <div className="nav-1">
        <MenuIcon onClick={handleSidebarOpen} style={{ cursor: "pointer" }} />
        <img src={Icon} alt="icon" className="nav-logo" />
        <h1>CipherSchools</h1>
        <div className="nav-browse">
          <QueryStatsIcon />
          <p>Browse</p>
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="nav-2">
        <div className="nav-search">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search and Learn"
            className="nav-search-input"
          />
          <TuneIcon />
        </div>
        <NotificationsIcon />
        <AccountCircleIcon />
        <div className="cipher-points">
          <img
            src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
            alt="Cipher-Points"
          />
          <p>100</p>
        </div>
        <DarkModeRoundedIcon />
      </div>
    </nav>
  );
};

export default Navbar;
