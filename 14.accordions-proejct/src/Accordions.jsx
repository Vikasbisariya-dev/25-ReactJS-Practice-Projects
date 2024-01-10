import PropTypes from "prop-types";
import { useState } from "react";
export const Accordions = ({ question, answer, index }) => {
  const [isActive, setisActive] = useState(false);

  const handleClick = () => {
    // if(isActive===false) setisActive(true);
    // setisActive(false);
    setisActive(!isActive);
  };

  return (
    <div key={index} className="container" onClick={handleClick}>
      <div className="question-section">
        <div>{question} </div>
        
        <p>{isActive ? "-" : "+"}</p>
      </div>
      <div className="answer-class">{isActive && <p>{answer}</p>}</div>
    </div>
  );
};

Accordions.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
