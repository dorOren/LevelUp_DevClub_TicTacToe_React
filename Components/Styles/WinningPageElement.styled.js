import styled from "styled-components";

const WinningPageElement = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  font-size: 5rem;
  flex-direction: column;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  & button {
    background-color: white;
    font-weight: bold;
    border-radius: 10px;
    border: none;
  }
`;

export default WinningPageElement;
