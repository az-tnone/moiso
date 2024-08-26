import "../../style/Login.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // useEffect를 컴포넌트 최상위에서 사용
  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      localStorage.setItem("isLogin", true);
    }
  }, []);

  const onClick = (destinationist) => {
    navigate("/" + destinationist);
  };

  const handleLoginClick = () => {
    // 로그인 버튼 클릭 시 추가 동작을 수행할 수 있습니다
    onClick(""); // 빈 문자열로 메인 페이지로 이동
  };

  return (
    <div className="container">
      <h1 className="appTitle">
        즐거운
        <br />
        의성으로
      </h1>
      <h2 className="appName">모이소</h2>

      <input
        type="email"
        placeholder="이메일을 입력하세요."
        className="inputField"
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요."
        className="inputField"
      />

      <button className="submitButton" onClick={handleLoginClick}>
        로그인
      </button>

      <div className="divider" />

      <p className="registerText" onClick={() => onClick("Sign1")}>
        회원가입
      </p>
    </div>
  );
};

export default Login;
