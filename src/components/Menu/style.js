import styled from 'styled-components';
import { theme } from "../../styles/theme";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(223, 223, 223, 0.2);
  height: 60px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${theme.maxWidthDesktop};
    list-style: none;
    margin: 0;
    height: 100%;
    padding: 0;

    @media (max-width: 500px) {
      width: calc(100%);
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #333;
        height: 100%;
        border-bottom: 2px solid;
        border-color: transparent;
        width: 100%;

        padding-left: 7px;
        padding-right: 7px;

        @media (max-width: 500px) {
          padding-left: 2;
          padding-right: 2;
          flex:1;
        }
        &.active {
          color: ${theme.color1};
          border-color: ${theme.color1};
        }
      }
    }
  }
`;
