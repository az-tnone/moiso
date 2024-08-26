import React from "react";
import "../../style/ListItem.css"; // CSS 파일 경로 수정

const ListItem = ({ imageSrc, title, money }) => {
  return (
    <div className="list-item">
      <div className="separator" />
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="money">{money}</div>
      </div>
    </div>
  );
};

export default ListItem;
