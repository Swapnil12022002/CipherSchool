import React from "react";
import Icon from "../../assets/Icon.png";
import { BsPencil } from "react-icons/bs";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="user-content">
        <div className="user-profile-box">
          <img src={Icon} alt="profile pic" />
          <BsPencil className="pencil-icon" />
        </div>
        <div className="user-details">
          <h3>Hello,</h3>
          <h2>CipherSchools</h2>
          <p>*****@cipherschools.com</p>
        </div>
        <div className="separator"></div>
        <div className="followers">100K Followers</div>
      </div>
    </div>
  );
};

export default Header;
