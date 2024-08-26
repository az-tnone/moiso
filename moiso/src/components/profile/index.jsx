import "../../style/profile.css"; // 스타일을 여기에 정의
const Profile = () => {
  return (
    <div className="container">
      {/* Toolbar */}
      <div className="toolbar">
        <img src="/path/to/ic_arrow_14.svg" alt="Back" className="backButton" />
      </div>

      {/* Profile Layout */}
      <div className="profileLayout">
        <img
          src="/path/to/profile_image.png"
          alt="Profile"
          className="profileImage"
        />
        <h1 className="userName">김얘용님 반가워요!</h1>
      </div>

      {/* Profile Check Layout */}
      <div className="profileCheckLayout">
        <span className="checkProfileText">프로필 확인하기</span>
        <img
          src="/path/to/ic_arrow_14.svg"
          alt="Enter"
          className="enterButton"
        />
      </div>

      {/* Log Out Layout */}
      <div className="logOutLayout">
        <span className="logOutText">로그아웃</span>
      </div>

      {/* Withdrawal Layout */}
      <div className="withdrawalLayout">
        <span className="withdrawalText">회원탈퇴</span>
      </div>
    </div>
  );
};

export default Profile;
