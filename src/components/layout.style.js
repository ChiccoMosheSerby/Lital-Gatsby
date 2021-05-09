import styled from "styled-components";
import ScrollBar from "../styles/scrollBar";
import { theme } from "../styles/theme";


export const LayoutContent = styled.div`
  margin: 0 auto;
  max-width: ${theme.maxWidthDesktop};


  @media (max-width: 1024px) {
    padding: 0 1.0875rem 1.45rem;
  }
`;
