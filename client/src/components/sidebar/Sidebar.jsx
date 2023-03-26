import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { BsDiscord } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import { SiCoursera } from "react-icons/si";
import { MdOutlineTour } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

import "./Sidebar.scss";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="icons-wrapper">
        <div className="home">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="courses">
          <LibraryBooksIcon />
          <p>Courses</p>
        </div>
        <div className="trending">
          <TrendingUpIcon />
          <p>Trending</p>
        </div>
        <div className="following">
          <PeopleIcon />
          <p>Following</p>
        </div>
        <div className="dashboard">
          <DashboardIcon />
          <p>Dashboard</p>
        </div>
        <div className="discord">
          <BsDiscord size={24} />
          <p>Discord</p>
        </div>
        <div className="creator">
          <SiCoursera size={24} />
          <p className="creator-1">Creator</p>
          <p className="access">Access</p>
        </div>
        <div className="feedback">
          <VscFeedback size={24} />
          <p>Feedback</p>
        </div>
        <div className="tour">
          <MdOutlineTour size={24} />
          <p>Tour</p>
        </div>
      </div>
      <div className="logout-wrapper">
        <hr />
        <div className="logout">
          <AiOutlineLogout size={24} />
          <p>LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
