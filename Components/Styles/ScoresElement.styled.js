import styled from "styled-components";

const ScoresElement = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 10px;
  border: rgba(0, 110, 225, 0.2) solid;

  & .space {
    width: 40px;
  }

  & .score {
    background-color: #006effb3;
    color: white;
    border-radius: 2rem;
    padding: 0.1rem 0.8rem 0.2rem 0.8rem;
    margin: 1.6rem auto;
  }
`;

export default ScoresElement;
