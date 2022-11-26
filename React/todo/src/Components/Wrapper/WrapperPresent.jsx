import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  background-color: #f5f5f5;
  width: 792px;
  height: 808px;
  margin: 100px auto;
  margin-top: 100px;
  text-align: center;
  border-radius: 16px;
  box-shadow: 5px 5px 3px gray;
  /* 핸드폰 사이즈  */
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
  /* 태블릿 사이즈  */
  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  @media only screen and (min-width: 768px) {
    width: 792px;
  }
`;

export default Wrapper;
