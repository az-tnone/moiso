// src/components/SignIn2.js
import React from 'react';
import '../../style/SignIn2.css';

const SignIn2 = () => {
  return (
    <div className="container">
      <div className="toolbar">
        <button className="back-button">
          <img src="/path/to/ic_arrow_14.png" alt="Back" />
        </button>
        <h1 className="toolbar-title">title</h1>
      </div>

      <div className="section">
        <label className="label">이름</label>
        <input
          type="text"
          className="input"
          placeholder="이름을 입력해주세요"
        />
      </div>

      <div className="divider" />

      <div className="section">
        <label className="label">연락처</label>
        <input
          type="text"
          className="input"
          placeholder="연락처을 입력해주세요"
        />
        <small className="helper-text">예) 010-0000-0000</small>
      </div>

      <div className="divider" />

      <div className="section">
        <label className="label">직업</label>
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" name="job" value="peasant" />
            농부
          </label>
          <label className="radio-label">
            <input type="radio" name="job" value="etc" />
            기타
          </label>
          <input
            type="text"
            className="input"
            placeholder="직업을 입력 해 주세요."
          />
        </div>
      </div>

      <button className="submit-button">가입하기</button>
    </div>
  );
};

export default SignIn2;

