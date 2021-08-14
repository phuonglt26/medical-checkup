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
      <div className="information" id="step2">
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
            <div className="text-sex">
              <div className="text">Nữ</div>
              <div className="text">Nam</div>
            </div>
          </div>
          <div className="switch-button">
            <a href="#step1">
              <button className="button">Trang trước</button>
            </a>
            <a href="#step3">
              <button className="button end">Tiếp tục</button>
            </a>
          </div>
        </div>
      </div>
      <div className="choose-level" id="step3">
        <div className="body-step3">
          <div className="title-step3">Chọn nhóm bệnh liên quan</div>
          <div className="choice-step">
            <div className="choice">Covid-19</div>
            <div className="choice">Bệnh thông thường</div>
            <div className="choice">Bệnh nghiêm trọng</div>
          </div>
          <div className="switch-button">
            <a href="#step2">
              <button className="button">Trang trước</button>
            </a>
            <a href="#step4">
              <button className="button end">Tiếp tục</button>
            </a>
          </div>
        </div>
      </div>
      <div className="choose-level" id="step4">
        <div className="body-step4">
          <div className="title-step4">Chọn vùng bị đau trên cơ thể</div>
          <div className="choice-step">
            <img src="./body.jpg" alt="" />
          </div>
          <div className="switch-button">
            <a href="#step3">
              <button className="button">Trang trước</button>
            </a>
            <a href="#step5">
              <button className="button end">Tiếp tục</button>
            </a>
          </div>
        </div>
      </div>
      <div className="choose-level" id="step5">
        <div className="body-step4">
          <div className="title-step4">Kiểm tra bệnh lý nền</div>
          <div className="choice-step">
            <img src="./body.jpg" alt="" />
          </div>
          <div className="switch-button">
            <a href="#step3">
              <button className="button">Trang trước</button>
            </a>
            <a href="#step5">
              <button className="button end">Tiếp tục</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
