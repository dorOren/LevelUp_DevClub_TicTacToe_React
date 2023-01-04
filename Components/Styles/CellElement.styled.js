import styled from "styled-components";

const CellElement = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-weight: bold;
  font-size: 4em;
  margin: 3px;
  box-shadow: 0px 0px 10px #888888;
  color: ${(props) => (props.xTurn ? "#ee8f8f" : "#8585ee")};

  & :hover {
    box-shadow: 0px 0px 12px #616161;
  }
`;

export default CellElement;
