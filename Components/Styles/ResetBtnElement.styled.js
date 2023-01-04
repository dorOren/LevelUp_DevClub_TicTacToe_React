import styled from "styled-components";

const ResetBtnElement = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: #006effb3;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  margin: 2rem auto;
  grid-column-start: 2;
  cursor: pointer;

  &: hover {
    background-color: #2080fdb3;
  }
`;

export default ResetBtnElement;
