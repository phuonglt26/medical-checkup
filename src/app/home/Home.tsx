import React from "react";
import "./style.scss";
import logo from "./logo.svg";
import background from "./background.svg";
const Home: React.FC = () => {
  return (
    <div className="medical-checkup">
      <div className="home" id="step1">
        <div className="navbar">
          <div className="container">
            <div className="logo column">LOGO</div>
            <div className="column text">Khoa</div>
            <div className="column text">Tin tức y tế</div>
            <div className="column text text-end">About</div>
            <div className="column search">
              <input
                className="search-input"
                type="text"
                aria-label="Enter search terms"
                placeholder="SEARCH"
              ></input>
            </div>
          </div>
        </div>
        <div className="app-name">MEDICAL CHECKUP</div>
        <a href="#step2">
          <button className="start-button">Get started</button>
        </a>
      </div>
      <div className="license" id="step2">
        <div className="body-step2">
          <div className="title-step2">Thông tin cá nhân</div>
          <div className="name-input">
            <div className="name">Họ và Tên: </div>
            <input className="name" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
