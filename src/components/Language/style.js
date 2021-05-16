import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const Lang = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 10px;
  padding-right:10px;
  user-select: none;
  padding-bottom: 10px;
  border-radius: 4px;
  transition: background-color .3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: #ffffff;

    `}
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding-left: 0;
    display: block;
    min-height: 0;
    margin: 0;
    ${({ isOpen }) =>
      isOpen &&
      css`
        min-height: 50px;
      `}
    li {
      padding: 3px;
      border-radius: 5000px;
      width: 100%;
      display: none;
      cursor: pointer;
      ${({ isOpen }) =>
        isOpen &&
        css`
          display: block;
        `}
        :hover{
          background-color: #dce9ed;
        }
    }
  }
  @media (max-width: 1024px) {
  }
`;
