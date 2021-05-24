import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const Nav = styled.nav`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.isMobile ? theme.color1opacity : "#ffffffd0"};
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10;

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    max-width: ${theme.maxWidthDesktop};
    list-style: none;
    margin: auto;
    height: 100%;
    ${({isMobile})=>isMobile && css`
      padding:0;
    `}
    padding: 0;
    width: ${(p) => (p.isMobile ? "100%" : "50%")};
    ${({ lang }) =>
      lang == "he" &&
      css`
        direction: rtl;
      `}
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
        color: ${theme.color2};
        height: 100%;
        border-bottom: 3px solid;
        border-color: transparent;
        width: 100%;
        transition: all 0.2s ease-in-out;

        /* padding-left: 7px;
        padding-right: 7px; */

        @media (max-width: 500px) {
          padding-left: 2;
          padding-right: 2;
          flex: 1;
        }
        &.active {
          color: ${theme.color2};
          border-color: ${theme.color2};
        }
      }
    }
  }
`;
