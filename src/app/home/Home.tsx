import React from "react";
import "./style.scss";
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
          <div className="name-input column">
            <div className="name">Họ và Tên: </div>
            <input className="name input" type="text" />
          </div>
          <div className="age-input column">
            <div className="age">Tuổi: </div>
            <input className="age input" type="text" />
          </div>
          <div className="phone-input column">
            <div className="phone">Phone: </div>
            <input className="phone input" type="text" />
          </div>
          <div className="sex-input column">
            <div className="sex">Giới tính: </div>
            <div className="sex button-sex">
              <div className="button"></div>
              <div className="button end"></div>
            </div>
            <div className="img-sex">
              <div className="girl"></div>
              <div className="man"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
