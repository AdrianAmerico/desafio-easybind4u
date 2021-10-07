import styled from "styled-components";

export const ChevronContainer = styled.nav`
  width: 80%;
  margin: 0 auto;
  padding: 8px 0;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
