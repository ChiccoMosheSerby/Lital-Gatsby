import { css } from "styled-components"

export const ScrollBar = css`
  /* width */
  &::-webkit-scrollbar {
    margin-right: 2px;
    width: 4px;
  }

  /* Track */
  scrollbar-track-color: #fff; /*IE11*/
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(215, 215, 215, 0.9);
    border-radius: 10px;
    max-height: 94px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(215, 215, 215, 1);
  }

  scrollbar-arrow-color: #fff; /*IE11*/
  scrollbar-face-color: rgba(215, 215, 215, 0.9); /*IE11*/
  scrollbar-color: rgba(215, 215, 215, 1) #fff;
  overflow-y: auto;
`

export default ScrollBar
