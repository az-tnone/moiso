import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import "../../style/SignIn1.css";

const SignIn1 = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 버튼 클릭 시 호출되는 함수
  const handleClick = (destination) => {
    navigate("/" + destination); // 원하는 경로로 이동
  };

  return (
    <div className="container">
      {/* Toolbar */}
      <div className="toolbar">
        <button className="backButton">
          <img
            src="/assets/ic_arrow_14.png"
            className="backIcon"
            alt=""
            onClick={() => handleClick("login")} // 이미지 클릭 시 handleClick 함수 호출
          />
        </button>
      </div>

      {/* Email Section */}
      <div className="section">
        <label className="sectionTitle">이메일</label>
        <input
          type="text"
          className="textInput"
          placeholder="이메일을 입력해주세요"
        />
      </div>

      <div className="separator" />

      {/* Password Section */}
      <div className="section">
        <label className="sectionTitle">비밀번호</label>
        <input
          type="password"
          className="textInput"
          placeholder="비밀번호을 입력해주세요"
        />
      </div>

      <div className="separator" />

      {/* Login Button */}
      <button
        className="loginButton"
        onClick={() => handleClick("signIn2")} // 버튼 클릭 시 handleClick 함수 호출
      >
        다음으로
      </button>
    </div>
  );
};

export default SignIn1;
