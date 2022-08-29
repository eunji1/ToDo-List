import React, { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { InputStyled, ButtonStyled, InsertStyled } from "./InsertStyle";

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
    props.onSubmit(content);
    setContent("");
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <InsertStyled id="form" onSubmit={props.handleSubmit}>
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
