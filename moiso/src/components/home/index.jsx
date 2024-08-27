import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "./ListItem";
import "../../style/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // 로그인 상태 확인 및 설정
    const loginStatus = localStorage.getItem("isLogin");
    if (!loginStatus) {
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
    } else {
      setIsLogin(true);
    }

    // 로컬 스토리지에서 데이터 불러오기
    loadLocalData();
  }, []);

  const loadLocalData = () => {
    const storedAds = JSON.parse(localStorage.getItem("ads")) || [];
    setData(storedAds);
  };

  const handleItemClick = (item) => {
    // 선택한 공고를 로컬 스토리지에 저장하고, 상세 페이지로 이동
    localStorage.setItem("selectedArticle", JSON.stringify(item));
    navigate("/Articel");
  };

  const onClick = (destination) => () => {
    navigate("/" + destination);
  };

  return (
    <div className="home-container">
      <div className="toolbar">
        <span className="title">모이소</span>
        {!isLogin && (
          <span className="login-text" onClick={onClick("login")}>
            로그인
          </span>
        )}
        {isLogin && (
          <button className="image-button" onClick={onClick("profile")}>
            <img src="/asset/ic_person.png" alt="프로필" />
          </button>
        )}
      </div>

      <div className="banner">
        <div className="banner-image">
          {/* 여기에 배너 이미지가 들어갑니다 */}
        </div>
        <div className="indicator">{/* 여기에 Indicator가 들어갑니다 */}</div>
      </div>

      <div className="divider" />

      <button className="login-button" onClick={onClick("UploadArticel")}>
        인력구하기
      </button>

      <div className="divider" />

      <h2 className="content-title">인기있는 공고</h2>

      {/* 리스트 뷰 섹션 */}
      <div className="list">
        <ul>
          {data.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              <ListItem title={item.title} money={item.reward} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
