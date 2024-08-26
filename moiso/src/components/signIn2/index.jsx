import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../style/SignIn2.css';

const SignIn2 = () => {
  const [selectedJob, setSelectedJob] = useState('peasant'); // Initial state set to 'peasant'
  const [name, setName] = useState(''); // State for name input
  const [contact, setContact] = useState(''); // State for contact input
  const navigate = useNavigate(); // Initialize useNavigate

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value); // Update state based on selected radio button
  };

  const handleClick = (destination) => {
    navigate("/" + destination); // Navigate to the specified route
  };

  const isFormValid = name.trim() !== '' && contact.trim() !== ''; // Check if both fields are filled

  return (
    <div className="container">
      <div className="toolbar">
        <button className="back-button">
        <img 
            src="/assets/ic_arrow_14.png" 
            className="backIcon" 
            alt="Back"
            onClick={() => handleClick('signIn1')} // 이미지 클릭 시 handleClick 함수 호출
          />
        </button>
      </div>

      <div className="section">
        <label className="label">이름</label>
        <input
          type="text"
          className="input"
          placeholder="이름을 입력해주세요"
          value={name} // Bind input to state
          onChange={(e) => setName(e.target.value)} // Update state on change
        />
      </div>

      <div className="divider" />

      <div className="section">
        <label className="label">연락처</label>
        <input
          type="text"
          className="input"
          placeholder="연락처을 입력해주세요"
          value={contact} // Bind input to state
          onChange={(e) => setContact(e.target.value)} // Update state on change
        />
        <small className="helper-text">예) 010-0000-0000</small>
      </div>

      <div className="divider" />

      <div className="section">
        <label className="label">직업</label>
        <div className="radio-group">
          <label className="radio-label">
            <input 
              type="radio" 
              name="job" 
              value="peasant" 
              checked={selectedJob === 'peasant'} // Checked if 'peasant' is selected
              onChange={handleJobChange} // Handle change
            />
            농부
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="job" 
              value="etc" 
              checked={selectedJob === 'etc'} // Checked if 'etc' is selected
              onChange={handleJobChange} // Handle change
            />
            기타
          </label>
          {selectedJob === 'etc' && ( // Conditionally render input field if 'etc' is selected
            <input
              type="text"
              className="input"
              placeholder="직업을 입력 해 주세요."
            />
          )}
        </div>
      </div>

      <button 
        className="submit-button"
        onClick={() => handleClick('')} // Handle click to navigate
        disabled={!isFormValid} // Disable button if form is not valid
      >
        가입하기
      </button>
    </div>
  );
};

export default SignIn2;
