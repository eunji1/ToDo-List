import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 428px;
  border: 0;

  border-bottom: 3px solid #fccb79;
  background-color: #f5f5f5f5;
`;

const Input = () => {
  return (
    <InputStyle type="text" id="input" placeholder="할 일을 추가해주세요." />
  );
};

export default Input;
