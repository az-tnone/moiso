import React from 'react';
import ListItem from './ListItem'; // ListItem 컴포넌트 import
import '../../style/Home.css'; // CSS 파일 경로 수정

const Home = () => {
  return (
    <div className="home-container">
      {/* Toolbar */}
      <div className="toolbar">
        <span className="title">모이소</span>
        <span className="login-text">로그인</span>
      </div>

      {/* Banner */}
      <div className="banner">
        <div className="banner-image">
          {/* 여기에 이미지가 들어갑니다 */}
        </div>
        <div className="indicator">
          {/* 여기에 Indicator가 들어갑니다 */}
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Buttons */}
      <button className="login-button">인력구하기</button>

      {/* Divider */}
      <div className="divider" />

      {/* Content Title */}
      <h2 className="content-title">인기있는 공고</h2>

      {/* List (RecyclerView) */}
      <div className="list">
        {/* 예시 리스트 아이템들 */}
        <ListItem
          imageSrc="/path/to/image1.jpg"
          title="의성군 의성시 농부 잘"
          money="10만원"
        />
        <ListItem
          imageSrc="/path/to/image2.jpg"
          title="김해시 농업"
          money="12만원"
        />
        <ListItem
          imageSrc="/path/to/image3.jpg"
          title="고흥군 어업"
          money="15만원"
        />
        {/* 추가 아이템을 여기에 추가 */}
      </div>
    </div>
  );
};

export default Home;
