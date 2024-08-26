import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import '../../style/UploadArticle.css'; // CSS 파일 경로 수정
import Config from "../../config/Config.json";

function UploadArticle() {

  const navigate = useNavigate(); // useNavigate 훅 사용

  // 상태 변수 설정
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [money, setMoney] = useState('');
  const [caution, setCaution] = useState('');
  const [condition, setCondition] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  
  const fileInputRef = useRef(null); // 파일 입력 참조

  // 파일 선택 대화상자 열기
  const handleCardClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('선택된 파일:', file);
    }
  };

  // 제목 입력 핸들러
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // 내용 입력 핸들러
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // 보수 입력 핸들러
  const handleMoneyChange = (event) => {
    setMoney(event.target.value);
  };

  // 주의사항 입력 핸들러
  const handleCautionChange = (event) => {
    setCaution(event.target.value);
  };

  // 지원조건 입력 핸들러
  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  // 폼 제출 핸들러
  const handleSubmit = () => {
    if (title && content && money && caution && condition) {
      const postData = {
        title: title,
        userEmail: "admin@gmail.com", // 사용자의 이메일을 적절히 설정하세요
        content: content,
        reward: money,
        caution: caution,
        condition: condition
      };

      // 서버로 POST 요청 보내기
      fetch(`${Config.serverUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (response.ok) {
            console.log('공고가 성공적으로 등록되었습니다.');
            navigate('/'); // 성공적으로 등록된 후 홈으로 이동
          } else {
            console.error('공고 등록에 실패했습니다.');
          }
        })
        .catch((error) => {
          console.error('에러가 발생했습니다:', error);
        });
    } else {
      console.log('모든 입력 필드를 채워주세요.');
    }
  };

  // 제출 버튼 비활성화 조건
  const isSubmitDisabled = !title || !content || !money || !caution || !condition;

  return (
    <div className="container">
      {/* Toolbar */}
      <div className="toolbar">
        <img
          src="/path/to/your/ic_arrow_14.png"
          alt="Back"
          style={{ transform: 'rotate(180deg)' }}
          onClick={() => navigate('/')}
        />
      </div>

      {/* Image Card */}
      <div className="card" onClick={handleCardClick}>
        <img
          src={selectedFile ? URL.createObjectURL(selectedFile) : "/path/to/your/image.png"}
          alt="Selected"
          className="cardImage"
        />
        <img
          src="/path/to/your/ic_add_photo.png"
          alt="Add"
          className="cardIcon"
        />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }} // 파일 입력 필드 숨김
        onChange={handleFileChange}
      />

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
        <label className="label" style={{ color: '#FF4848' }}>주의사항</label>
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
          disabled={isSubmitDisabled} // 버튼 비활성화 조건
        >
          공고 올리기
        </button>
      </div>
    </div>
  );
}

export default UploadArticle;
