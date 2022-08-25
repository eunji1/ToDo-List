import React from "react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";

const Button = (props) => {
  return (
    <button type="button" id="button">
      <FiSend className="sendIcon" />
    </button>
  );
};

export default Button;
