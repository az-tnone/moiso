import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "./ListItem";
import "../../style/Home.css";
import Config from "../../config/Config.json";

const Home = () => {
  const navigate = useNavigate();

  // 로그인 상태를 관리하는 state
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // localStorage에서 로그인 상태를 확인
    const loginStatus = localStorage.getItem("isLogin");
    if (!loginStatus) {
      // 만약 로그인 상태가 없다면, 로그인 상태를 true로 설정하고 localStorage에 저장
      localStorage.setItem("isLogin", true);
      setIsLogin(true);
    } else {
      // 만약 이미 로그인 상태라면, 그 상태를 state에 반영
      setIsLogin(true);
    }

    // 서버에서 데이터를 가져오는 함수 호출
    fetchData();
  }, []);

  const onClick = (destinationist) => () => {
    navigate("/" + destinationist);
  };

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(Config.serverUrl + "/announce/list");
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다:", error);
    }
  };

  return (
    <div className="home-container">
      {/* Toolbar */}
      <div className="toolbar">
        <span className="title">모이소</span>
        <span className="login-text" onClick={onClick("login")}>
          로그인
        </span>
        {/* isLogin이 true일 때만 이미지 버튼을 렌더링 */}
        {isLogin && (
          <button className="image-button" onClick={onClick("profile")}>
            <img src="../../ic_person.svg" alt="" />
          </button>
        )}
      </div>

      {/* Banner */}
      <div className="banner">
        <div className="banner-image">{/* 여기에 이미지가 들어갑니다 */}</div>
        <div className="indicator">{/* 여기에 Indicator가 들어갑니다 */}</div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Buttons */}
      <button className="login-button" onClick={onClick("upLoadArticel")}>
        인력구하기
      </button>

      {/* Divider */}
      <div className="divider" />

      {/* Content Title */}
      <h2 className="content-title">인기있는 공고</h2>

      {/* List (RecyclerView) */}
      <div className="list">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <ListItem title={item.title} reword={item.reword} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
