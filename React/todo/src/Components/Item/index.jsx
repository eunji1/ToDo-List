import React, { useState } from "react";
import PropTypes from "prop-types";
import { ItemStyled, CheckStyle, TextStyle, DelStyle } from "./ItemPresent";

const Item = ({ todo, onDelete }) => {
  // props에 todo를 구조분해 할당 해줌
  const { id, text } = todo; // eslint-disable-line no-unused-vars
  const [onChecked, setOnChecked] = useState(false);

  const handleChecked = (e) => {
    if (e.target.checked) {
      setOnChecked(true);
    } else {
      setOnChecked(false);
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

Item.propTypes = {
  todo: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
