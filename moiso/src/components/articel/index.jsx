import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/Article.css";

function Article() {
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    // 로컬 스토리지에서 선택된 공고 데이터 불러오기
    const storedData =
      JSON.parse(localStorage.getItem("selectedArticle")) || {};
    setArticleData(storedData);
  }, []);

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="toolbar">
        <button className="backButton">
          <img
            src="/path/to/your/ic_arrow_14.png"
            alt="Back"
            className="backIcon"
            onClick={handleButtonClick}
          />
        </button>
      </div>

      {/* 상세 정보 표시 */}
      <div className="section bordered">
        <p className="titleText">{articleData.title || "제목"}</p>
        <p className="nameText">{articleData.userEmail || "이메일"}</p>
      </div>

      <div className="section bordered">
        <p className="moneyText">내용</p>
        <p className="contentText">
          {articleData.content || "내용을 입력하세요."}
        </p>
      </div>

      <div className="section bordered">
        <p className="moneyText">보수</p>
        <p className="moneyContent">
          {articleData.reward || "보수를 입력하세요."}
        </p>
      </div>

      <div className="section bordered">
        <p className="cautionText">주의사항</p>
        <p className="cautionContent">
          {articleData.caution || "주의사항을 입력하세요."}
        </p>
      </div>

      <div className="section bordered">
        <p className="conditionText">지원조건</p>
        <p className="conditionContent">
          {articleData.condition || "지원조건을 입력하세요."}
        </p>
      </div>

      <div className="submitButtonContainer">
        <button className="submitButton" onClick={handleButtonClick}>
          신청하기
        </button>
      </div>
    </div>
  );
}

export default Article;
