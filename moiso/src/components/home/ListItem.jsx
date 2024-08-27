import React from "react";
import "../../style/ListItem.css"; // ListItem 스타일

const ListItem = ({ imageSrc, title, money }) => {
  return (
    <div className="list-item">
      <img src={imageSrc} alt={title} className="list-item-image" />
      <div className="list-item-content">
        <div className="list-item-title">{title}</div>
        <div className="list-item-money">{money}</div>
      </div>
    </div>
  );
};

export default ListItem;
