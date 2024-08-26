import "../../style/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const saveData = () => () => {
    useEffect(() => {
      if (!localStorage.getItem("isLogin")) {
        localStorage.setItem("isLogin", true);
      }
      onClick("");
    }, []);
  };
  const onClick = (destinationist) => () => {
    navigate("/" + destinationist);
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

      <button className="submitButton" onClick={saveData()}>
        로그인
      </button>

      <div className="divider" />

      <p className="registerText" onClick={onClick("Sign1")}>
        회원가입
      </p>
    </div>
  );
};

export default Login;
