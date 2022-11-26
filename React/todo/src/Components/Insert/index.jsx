import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FiSend } from "react-icons/fi";
import { InputStyled, ButtonStyled, InsertStyled } from "./InsertPresent";

const Insert = (props) => {
  const [content, setContent] = useState("");
  const ref = useRef(); // 포커스

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    // 공백만 있는 내용은 거르지 못하네요
    props.onSubmit(content);
    setContent("");
  };

  // useEffect
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <InsertStyled onSubmit={props.handleSubmit}>
        <InputStyled
          onChange={handleChange}
          value={content}
          ref={ref}
          placeholder="할 일을 추가해주세요."
        />
        <ButtonStyled onClick={handleSubmit} onKeyPress={handlekeyPress}>
          <FiSend className="sendIcon" size="23" color="white" />
        </ButtonStyled>
      </InsertStyled>
    </>
  );
};

export default Insert;

Insert.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
