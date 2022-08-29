import React, { useState } from "react";

import { ItemStyled, CheckStyle, TextStyle, DelStyle } from "./ItemStyle";

const Item = ({ todo, onDelete }) => {
  const { id, text } = todo; // eslint-disable-line no-unused-vars
  const [onChecked, setOnChecked] = useState(false);

  const handleChecked = (e) => {
    if (e.target.checked) {
      setOnChecked(true);
    }
  };

  return (
    <ItemStyled id={id}>
      <CheckStyle
        type="checkbox"
        onChange={handleChecked}
        checked={onChecked}
      ></CheckStyle>
      <TextStyle
        style={{
          textDecoration: onChecked ? "line-through" : null,
          color: onChecked ? "#ccc" : "#000",
        }}
      >
        {text}
      </TextStyle>
      <DelStyle size="35" onClick={() => onDelete(id)}></DelStyle>
    </ItemStyled>
  );
};

export default Item;
