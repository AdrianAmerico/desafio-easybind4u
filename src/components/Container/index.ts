import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  display: flex;
  @media (max-width: 600px) {
    margin: 10% auto;
    width: 90%;
    maxwidth: none;
    height: 100%;
    display: flex;
    flexdirection: column;
    justifycontent: start;
    position: absolute;
    inset: 0;
  }
`;
