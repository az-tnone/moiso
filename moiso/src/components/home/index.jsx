import ListItem from "./ListItem"; // ListItem 컴포넌트 import
import "../../style/Home.css"; // CSS 파일 경로 수정
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  // useEffect를 컴포넌트 최상위에서 사용
  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      const isLogin = localStorage.setItem("isLogin", true);
    }
  }, []);

  const onClick = (destinationist) => {
    navigate("/" + destinationist);
  };

  const [data, setData] = useState([]);

  // 서버에서 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.0.114:8080/announce/list"); // 서버의 실제 URL로 교체
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-container">
      {/* Toolbar */}
      <div className="toolbar">
        <span className="title">모이소</span>
        <span className="login-text" onClick={onClick("login")}>
          로그인
        </span>
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
              <h2>{item.title}</h2>
              <p>{item.reword}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
