import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 8px 0;

  @media (max-width: 600px) {
    position: absolute;
    height: 100%;
  }
`;
