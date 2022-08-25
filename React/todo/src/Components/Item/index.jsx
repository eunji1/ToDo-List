import React from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import ItemStyled from "./ItemPresent";

const CheckStyle = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;

const TextStyle = styled.div`
  width: 530px;
  font-size: 20px;
  border-bottom: 1px solid black;
`;
const DelStyle = styled.button`
  width: 32px;
  height: 32px;
`;
const Item = (props) => {
  return (
    <ItemStyled>
      <ul id="list">
        <li>
          <CheckStyle>
            <FiCheck />
          </CheckStyle>
          <TextStyle>
            투두 리스트 만들기
            <DelStyle>
              <FiTrash2 />
            </DelStyle>
          </TextStyle>
        </li>
      </ul>
    </ItemStyled>
  );
};

export default Item;
