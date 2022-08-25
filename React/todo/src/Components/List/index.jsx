import React from "react";
// import styled from "styled-components";
import Item from "../Item";
import ListStyled from "./ListPresent";

const List = (props) => {
  return (
    <ListStyled>
      <ul id="list">
        <Item />
        <Item />
      </ul>
    </ListStyled>
  );
};

export default List;
