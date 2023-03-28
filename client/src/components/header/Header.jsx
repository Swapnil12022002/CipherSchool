import React, { useState } from "react";
import Icon from "../../assets/Icon.png";
import { BsPencil } from "react-icons/bs";
import Modal from "react-modal";
import "./Header.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0",
    border: "none",
    background: "none",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="header">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-class">
          <div className="modal-wrapper">
            <div className="img-wrapper">
              <img src={Icon} alt="profile pic" />
            </div>
            <div className="modal-body">
              <div className="modal-body-wrapper">
                <p>First Name</p>
                <div className="modal-input">
                  <input type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="modal-body-wrapper">
                <p>Last Name</p>
                <div className="modal-input">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="modal-body-wrapper">
                <p>Email Address</p>
                <div className="modal-input">
                  <input type="text" placeholder="Email Address" />
                </div>
              </div>
              <div className="modal-body-wrapper">
                <p>Mobile Number</p>
                <div className="modal-input">
                  <input type="text" placeholder="Mobile Number" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="user-content">
        <div className="user-profile-box">
          <img src={Icon} alt="profile pic" />
          <BsPencil className="pencil-icon" onClick={openModal} />
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
