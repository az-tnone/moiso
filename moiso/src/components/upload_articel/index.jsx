import React from 'react';
import '../../style/UploadArticle.css'; // CSS 파일 경로 수정

function UploadArticle() { // 컴포넌트 이름 변경
  return (
    <div className="container">
      {/* Toolbar */}
      <div className="toolbar">
        <img
          src="/path/to/your/ic_arrow_14.png"
          alt="Back"
          style={{ transform: 'rotate(180deg)' }}
        />
        <h1 className="toolbarTitle">test</h1>
      </div>

      {/* Image Card */}
      <div className="card">
        <img
          src="/path/to/your/image.png"
          alt="Selected"
          className="cardImage"
        />
        <img
          src="/path/to/your/ic_add_photo.png"
          alt="Add"
          className="cardIcon"
        />
      </div>

      {/* Title Section */}
      <div className="section">
        <label className="label">제목</label>
        <input
          type="text"
          placeholder="제목을 입력 해 주세요."
          className="input"
        />
      </div>

      {/* Content Section */}
      <div className="section">
        <label className="label">내용</label>
        <input
          type="text"
          placeholder="내용을 입력 해 주세요."
          className="input"
        />
      </div>

      {/* Money Section */}
      <div className="section">
        <label className="label">보수</label>
        <input
          type="text"
          placeholder="보수를 입력 해 주세요."
          className="input"
        />
      </div>

      {/* Caution Section */}
      <div className="section">
        <label className="label" style={{ color: '#FF4848' }}>주의사항</label>
        <input
          type="text"
          placeholder="일에 있어 주의사항을 적어주세요."
          className="input"
        />
      </div>

      {/* Condition Section */}
      <div className="section">
        <label className="label">지원조건</label>
        <input
          type="text"
          placeholder="원하시는 인재상을 적어주세요."
          className="input"
        />
      </div>

      {/* Submit Button */}
      <div className="submitButtonContainer">
        <button className="submitButton">공고 올리기</button>
      </div>
    </div>
  );
}

export default UploadArticle; // 컴포넌트 이름 수정
