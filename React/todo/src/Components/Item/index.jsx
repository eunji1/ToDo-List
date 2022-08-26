import React, { useState } from "react";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import ItemStyled from "./ItemPresent";

const CheckStyle = styled.input`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  accent-color: #fccb79;
`;

const TextStyle = styled.div`
  width: 500px;
  font-size: 16px;
  text-align: left;
  border-bottom: 1px solid black;
  padding: 10px;
  margin: 0 20px;
`;
const DelStyle = styled(FiTrash2)`
  width: 32px;
  height: 32px;
  border: none;
  padding: 0px;
  cursor: pointer;
  &:hover {
    color: #fccb79;
  }
`;

const Item = (props) => {
  const [onChecked, setOnChecked] = useState(false);

  setOnChecked();
  return (
    <ItemStyled>
      <CheckStyle type="checkbox"></CheckStyle>
      <TextStyle>투두 리스트 만들기</TextStyle>
      <DelStyle size="35"></DelStyle>
    </ItemStyled>
  );
};

export default Item;
