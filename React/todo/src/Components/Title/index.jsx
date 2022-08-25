import React from "react";
import styled from "styled-components";

const TitleStyled = styled.div`
  width: 636px;
  height: 80px;
  margin: 50px auto;
  padding-top: 70px;
`;

const TodoStyle = styled.h1`
  color: #fccb79;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

const Title = () => {
  return (
    <TitleStyled>
      <TodoStyle>TODO LIST</TodoStyle>
    </TitleStyled>
  );
};
export default Title;
