import styled from "styled-components";
import {  css } from "styled-components";

const Button = styled.button`
  border: none;

  ${(props) =>
    props.color &&
    css`
      background-color: ${(props) =>
        props.length > 2
          ? props.theme[props.color] // access dynamically 
          : props.length < 2
          ? "red"
          : "pink"};
      color: ${(props) => (props.length > 2
          ? "black"
          : props.length < 2
          ? "black"
          : "white")};
    `}
  padding: 15px 32px;
  text-align: center;
  font-weight: ${(props) => (props.length < 2 ? "bold" : "normal ")};
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default Button