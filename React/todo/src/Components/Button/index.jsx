import React from "react";
import { FiSend } from "react-icons/fi";
import ButtonStyle from "./style";

const Button = (props) => {
  return (
    <ButtonStyle type="button" id="button">
      <FiSend className="sendIcon" size="23" color="white" />
    </ButtonStyle>
  );
};

export default Button;
