import React from 'react';
import PropTypes from 'prop-types'; // PropTypes를 사용하여 props 타입을 정의합니다
import '../../style/Section.css'; // CSS 파일 경로

function Section({ title, name, tel, content, caution }) {
  return (
    <div className={`section ${caution ? 'caution' : ''}`}>
      {title && <p className="sectionTitle">{title}</p>}
      {name && <p className="sectionName">{name}</p>}
      {tel && <p className="sectionTel">{tel}</p>}
      {content && <p className="sectionContent">{content}</p>}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  tel: PropTypes.string,
  content: PropTypes.string,
  caution: PropTypes.bool,
};

Section.defaultProps = {
  title: '',
  name: '',
  tel: '',
  content: '',
  caution: false,
};

export default Section;
