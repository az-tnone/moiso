import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/UploadArticle.css";

function UploadArticle() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [money, setMoney] = useState("");
  const [caution, setCaution] = useState("");
  const [condition, setCondition] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleMoneyChange = (event) => setMoney(event.target.value);
  const handleCautionChange = (event) => setCaution(event.target.value);
  const handleConditionChange = (event) => setCondition(event.target.value);

  const handleSubmit = () => {
    if (title && content && money && caution && condition) {
      const postData = {
        title,
        content,
        reward: money,
        caution,
        condition,
      };

      // 로컬 스토리지에 저장
      const savedAds = JSON.parse(localStorage.getItem("ads")) || [];
      savedAds.push(postData);
      localStorage.setItem("ads", JSON.stringify(savedAds));

      console.log("공고가 성공적으로 저장되었습니다.");
      navigate("/"); // 홈으로 이동
    } else {
      console.log("모든 입력 필드를 채워주세요.");
    }
  };

  const isSubmitDisabled =
    !title || !content || !money || !caution || !condition;

  return (
    <div className="container">
      <div className="toolbar">
        <img
          src="/path/to/your/ic_arrow_14.png"
          alt="Back"
          style={{ transform: "rotate(180deg)" }}
          onClick={() => navigate("/")}
        />
      </div>

      {/* Title Section */}
      <div className="section">
        <label className="label">제목</label>
        <input
          type="text"
          placeholder="제목을 입력 해 주세요."
          className="input"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      {/* Content Section */}
      <div className="section">
        <label className="label">내용</label>
        <input
          type="text"
          placeholder="내용을 입력 해 주세요."
          className="input"
          value={content}
          onChange={handleContentChange}
        />
      </div>

      {/* Money Section */}
      <div className="section">
        <label className="label">보수</label>
        <input
          type="text"
          placeholder="보수를 입력 해 주세요."
          className="input"
          value={money}
          onChange={handleMoneyChange}
        />
      </div>

      {/* Caution Section */}
      <div className="section">
        <label className="label" style={{ color: "#FF4848" }}>
          주의사항
        </label>
        <input
          type="text"
          placeholder="일에 있어 주의사항을 적어주세요."
          className="input"
          value={caution}
          onChange={handleCautionChange}
        />
      </div>

      {/* Condition Section */}
      <div className="section">
        <label className="label">지원조건</label>
        <input
          type="text"
          placeholder="원하시는 인재상을 적어주세요."
          className="input"
          value={condition}
          onChange={handleConditionChange}
        />
      </div>

      {/* Submit Button */}
      <div className="submitButtonContainer">
        <button
          className="submitButton"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          공고 올리기
        </button>
      </div>
    </div>
  );
}

export default UploadArticle;
