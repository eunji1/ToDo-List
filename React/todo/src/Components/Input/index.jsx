import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 428px;
  border: 0;
  border-radius: 8px;
  border-bottom: 2px solid #fccb79;
`;

const Input = () => {
  return (
    <InputStyle type="text" id="input" placeholder="할 일을 추가해주세요." />
  );
};

export default Input;
