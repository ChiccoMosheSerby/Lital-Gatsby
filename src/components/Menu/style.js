import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Nav = styled.nav`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${theme.color2opacity};
  height: 60px;
  position: sticky;
  top: 0;
  z-index:10;

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    max-width: ${theme.maxWidthDesktop};
    list-style: none;
    margin: 0;
    height: 100%;
    padding: 0;
    width: 100%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff;
        height: 100%;
        border-bottom: 2px solid;
        border-color: transparent;
        width: 100%;
        transition: all .2s ease-in-out;

        padding-left: 7px;
        padding-right: 7px;

        @media (max-width: 500px) {
          padding-left: 2;
          padding-right: 2;
          flex: 1;
        }
        &.active {
          color: ${theme.color1};
          border-color: ${theme.color1};
        }
      }
    }
  }
`;
