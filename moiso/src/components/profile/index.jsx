import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/Profile.css";

const Profile = () => {
  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    navigate("/"); // 로그아웃 후 홈으로 이동
  };

  const handleDeleteAccount = () => {
    localStorage.setItem("isLogin", false);
    // 추가적인 회원 탈퇴 로직 수행
    navigate("/"); // 탈퇴 후 홈으로 이동
  };

  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      localStorage.setItem("isLogin", true);
    }
  }, []);
  const userName = "김애용님";
  const ads = [
    {
      id: 1,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 2,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 3,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 3,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 3,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 3,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 3,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 3,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 3,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
    {
      id: 3,
      title: "의성군 의성시 농부 잘...",
      price: "10만원",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (destination) => {
    navigate("/" + destination); // Navigate to the specified route
  };

  return (
    <div className="profile-container">
      <header className="toolbar">
        <button className="backButton">
          <img
            src="./asset/ic_leftarrow.png"
            alt="뒤로가기"
            onClick={() => handleClick("")}
          />
        </button>
      </header>

      <div className="profile-info">
        <img
          src="path/to/profile_image.png"
          alt="User Profile"
          className="profile-image"
        />
        <p className="user-name">{userName} 반가워요!</p>
      </div>

      <div className="divider" />

      <div className="profile-actions">
        <p className="logout" onClick={handleLogout}>
          로그아웃
        </p>
        <p className="delete-account" onClick={handleDeleteAccount}>
          회원탈퇴
        </p>
      </div>

      <div className="divider" />

      <div className="my-ads">
        <h2>내가 올린공고</h2>
        <ul className="ads-list">
          {ads.map((ad) => (
            <li key={ad.id} className="ad-item">
              <div className="ad-info" onClick={() => handleClick("alticel")}>
                <p className="ad-title">{ad.title}</p>
                <p className="ad-price">{ad.price}</p>
              </div>
              <button className="delete-button">X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
