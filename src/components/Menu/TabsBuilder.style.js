import React from "react"
import { theme as litalTheme } from "../../styles/theme"
import styled from "styled-components"
import {
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import { Tab, Tabs } from "@material-ui/core"

const TabsWithStyling = withStyles(theme => ({
  root: {
    fontSize: "18px",
    width: "100%",
    paddingTop: "1rem",
  },
  flexContainer: {
    width: "100%",
    justifyContent: "space-around",
    borderBottom: "solid 1px #e2e2e2",
  },
  indicator: {
    backgroundColor: theme.color1,
  },
}))(props => <Tabs {...props} />)

export const StyledTabs = ({ children, ...rest }) => {
  const muiTheme = createMuiTheme({ color1: litalTheme.color1 })
  return (
    <ThemeProvider theme={muiTheme}>
      <TabsWithStyling {...rest}>{children}</TabsWithStyling>
    </ThemeProvider>
  )
}

export const StyledTab = withStyles(theme => ({
  root: {
    fontSize: "18px",
    textTransform: "capitalize",
    fontFamily: "Nunito Sans",
    opacity: "1",
    minWidth: "40px",
    minHeight: "40px",
    padding: "0",
    borderRadius: "50%",
    whiteSpace: "inherit",
    overflow: "inherit",
    "& label": {
      backgroundColor: `#fff`,
      border: `1px solid #f0efef`,
      wordBreak: "break-word",
      textAlign: "center",
    },
  },
  selected: {
    color: theme.color1,

    "& label": {
      backgroundColor: "#f0efef",
      border: `1px solid transparent`,
    },
  },
}))(props => <Tab {...props} />)

export const TopMenuStyle = styled.div`
  max-width: 550px;
  margin: auto;
`

export const StyledTabIcon = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 5000px;
  padding: 10px;
  border: solid 1px #f0efef;
  cursor: pointer;
  :hover {
    background-color: #f0efef;
  }
`
