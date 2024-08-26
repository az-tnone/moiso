import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/Article.css';

function Article() {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다
  const [imageUrl, setImageUrl] = useState('/path/to/placeholder.png'); // 기본 이미지 URL 설정
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 서버에서 이미지 URL 받아오기
    const fetchImage = async () => {
      try {
        // API 호출 (URL은 예시입니다)
        const response = await fetch('/api/get-image-url');
        const data = await response.json();
        setImageUrl(data.imageUrl); // 서버에서 받은 이미지 URL 설정
      } catch (error) {
        console.error('이미지 로드 실패:', error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchImage(); // 컴포넌트 마운트 시 이미지 URL 가져오기
  }, []); // 빈 배열로 의존성 배열을 설정하여 컴포넌트가 처음 렌더링될 때만 실행

  const handleButtonClick = () => {
    navigate('/'); // 홈 페이지로 이동
  };

  return (
    <div className="container">
      {/* Toolbar */}
      <div className="toolbar">
        <button className="backButton">
          <img
            src="/path/to/your/ic_arrow_14.png"
            alt="Back"
            className="backIcon"
            onClick={() => handleButtonClick('')}
          />
        </button>
      </div>

      {/* Image Card */}
      <div className="card">
        {loading ? (
          <p>Loading...</p> // 로딩 중일 때 표시
        ) : (
          <img
            src={imageUrl}
            alt="Selected"
            className="cardImage"
          />
        )}
        <img
          src="/path/to/your/ic_add_photo.png"
          alt="Add"
          className="cardIcon"
        />
      </div>

      {/* Sections with borders */}
      <div className="section bordered">
        <p className="titleText">제목제목제목제목</p>
        <p className="nameText">박형언</p>
        <p className="telText">010-xxxx-xxxx</p>
      </div>

      <div className="section bordered">
        <p className="moneyText">내용</p>
        <p className="contentText">jsldjflsjfksdjfjslkfjsjldjflsfkdkljflfjlsjfkdfklsdjflksdjflsdjfflksdfjklsdfdsfs</p>
      </div>

      <div className="section bordered">
        <p className="moneyText">보수</p>
        <p className="moneyContent">jsldjflsjfksdjfjslkfjsjldjflsfkdkljflfjlsjfkdfklsdjflksdjflsdjfflksdfjklsdfdsfs</p>
      </div>

      <div className="section bordered">
        <p className="cautionText">주의사항</p>
        <p className="cautionContent">jsldjflsjfksdjfjslkfjsjldjflsfkdkljflfjlsjfkdfklsdjflksdjflsdjfflksdfjklsdfdsfs</p>
      </div>

      <div className="section bordered">
        <p className="conditionText">지원조건</p>
        <p className="conditionContent">jsldjflsjfksdjfjslkfjsjldjflsfkdkljflfjlsjfkdfklsdjflksdjflsdjfflksdfjklsdfdsfs</p>
      </div>

      {/* Submit Button */}
      <div className="submitButtonContainer">
        <button className="submitButton" onClick={handleButtonClick}>
          신청하기
        </button>
      </div>
    </div>
  );
}

export default Article;
