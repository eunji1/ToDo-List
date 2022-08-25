import React from "react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";

const ButtonStyle = styled.button`
  width: 60px;
  height: 36px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: #fccb79;
`;

const Button = (props) => {
  return (
    <ButtonStyle type="button" id="button">
      <FiSend className="sendIcon" size="20" color="white" />
    </ButtonStyle>
  );
};

export default Button;
