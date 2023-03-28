import React from "react";
import "./Body.scss";
import CipherMap from "../../assets/ciphermap.png";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

const Body = () => {
  const webInfo = [
    {
      name: "LinkedIn",
      icon: <AiFillLinkedin size={20} />,
      placeholder: "LinkedIn URL",
    },
    {
      name: "Github",
      icon: <BsGithub size={20} />,
      placeholder: "Github URL",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={20} />,
      placeholder: "Facebook URL",
    },
    {
      name: "Twitter",
      icon: <AiFillTwitterCircle size={20} />,
      placeholder: "Twitter URL",
    },
    {
      name: "Instagram",
      icon: <BsInstagram size={20} />,
      placeholder: "Instagram URL",
    },
    {
      name: "Website",
      icon: <AiOutlineGlobal size={20} />,
      placeholder: "Website URL",
    },
  ];
  return (
    <div className="profile-body">
      <div className="body-wrapper">
        <div className="about">
          <div className="wrapper">
            <h3>ABOUT ME</h3>
            <button>Edit</button>
          </div>
          <div className="about-input">
            <input type="text" placeholder="Add something about you" />
          </div>
        </div>
        <hr />
        <div className="map">
          <h3>CIPHER MAP</h3>
          <img src={CipherMap} alt="cipher-map" />
        </div>
        <hr />
        <div className="web">
          <div className="wrapper">
            <h3>ON THE WEB</h3>
            <button>Edit</button>
          </div>
          <div className="web-wrapper">
            {webInfo.map((info) => (
              <div className="web-input">
                <h3>{info.name}</h3>
                <div className="input-wrapper">
                  <div className="icon">{info.icon}</div>
                  <input type="text" placeholder={info.placeholder} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="special-hr" />
        <div className="professional">
          <div className="wrapper">
            <h3>PROFESSIONAL INFORMATION</h3>
            <button>Edit</button>
          </div>
          <div className="prof-wrapper">
            <div className="prof-input">
              <h3>Highest Education</h3>
              <div className="prof-input-wrapper">
                <select id="dropdown-menu" name="dropdown-menu">
                  <option value="option-1">Primary</option>
                  <option value="option-2">Secondary</option>
                  <option value="option-3">Higher Secondary</option>
                  <option value="option-4">Graduation</option>
                  <option value="option-4">Post Graduation</option>
                </select>
              </div>
            </div>
            <div className="prof-input">
              <h3>What do you do currently?</h3>
              <div className="prof-input-wrapper">
                <select id="dropdown-menu" name="dropdown-menu">
                  <option value="option-1">Schooling</option>
                  <option value="option-2">College Student</option>
                  <option value="option-3">Teaching</option>
                  <option value="option-4">Job</option>
                  <option value="option-4">Freelancing</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <hr className="special-hr" />
        <div className="password">
          <div className="wrapper">
            <h3>PASSWORD AND SECURITY</h3>
            <button>Change</button>
          </div>
          <div className="password-input">
            <h3>Password</h3>
            <div className="password-input-wrapper">
              <input type="password" placeholder="************************" />
            </div>
          </div>
        </div>
        <hr className="special-hr" />
        <div className="wrapper">
          <h3>INTERESTS</h3>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
