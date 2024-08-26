import React from 'react';
import '../../style/SignIn1.css';

const SignIn1 = () => {
  return (
    <div className="container">
      {/* Toolbar */}
      <div className="toolbar">
        <button className="backButton">
          <img src="/assets/ic_arrow_14.png" className="backIcon" alt="Back" />
        </button>
        <span className="toolbarTitle">title</span>
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
        <span className="passwordHint">n자이상 대소문자를섞어서 써주세요.</span>
        <input 
          type="password" 
          className="textInput" 
          placeholder="비밀번호을 입력해주세요" 
        />
      </div>

      <div className="separator" />

      {/* Login Button */}
      <button className="loginButton">
        다음으로
      </button>

      {/* Sign Up Text */}
      <span className="signUpText">회원가입</span>
    </div>
  );
};

export default SignIn1;

