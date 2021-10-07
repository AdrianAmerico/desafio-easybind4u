import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-left: 10%;
    color: #828ba1;
    padding: 10px 0;
  }

  div {
    width: 100%;
    background-color: white;
    border: 1px solid #e1e8f3;
    border-radius: 8px;
    padding: 10px 0;
    section {
      display: flex;
      width: 80%;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 10px 0;

      span {
        font-size: 14px;
        &:first-child {
          color: #262a34;
        }
        &:last-child {
          color: #00c1a5;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
