import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export const ItemStyled = styled.li`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

export const CheckStyle = styled.input`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  accent-color: #fccb79;
`;

export const TextStyle = styled.div`
  width: 500px;
  font-size: 16px;
  text-align: left;
  border-bottom: 1px solid black;
  padding: 10px;
  margin: 0 20px;
`;

export const DelStyle = styled(FiTrash2)`
  width: 32px;
  height: 32px;
  border: none;
  padding: 0px;
  cursor: pointer;
  &:hover {
    color: #fccb79;
  }
`;
