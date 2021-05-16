import React, { useState } from "react"
import { withRouter, useHistory, Switch, Route } from "react-router-dom"
import PhoneIcon from "@material-ui/icons/Phone"
import InfoIcon from "@material-ui/icons/Info"
import HomeIcon from "@material-ui/icons/Home"
import ShareIcon from "@material-ui/icons/Share"
import {
  StyledTab,
  StyledTabs,
  TopMenuStyle,
  StyledTabIcon,
} from "./BuilderTabs.style"

const TopMenu = () => {
  const [value, setValue] = useState(0)
  let history = useHistory()
  const handleCallToRouter = (e, value) => {
    setValue(value)
    history.push(value)
  }
  return (
    <TopMenuStyle value={value}>
      <StyledTabs
        onChange={handleCallToRouter}
        value={history?.location?.pathname}
        variant="fullWidth"
        aria-label="navigation"
      >
        <StyledTab
          disableRipple
          label="Home Page"
          value="/"
          icon={
            <StyledTabIcon>
              <HomeIcon />
            </StyledTabIcon>
          }
        />
        <StyledTab
          disableRipple
          label="About Me"
          value="/about"
          icon={
            <StyledTabIcon>
              <InfoIcon />
            </StyledTabIcon>
          }
        />
        <StyledTab
          disableRipple
          label="Gallery"
          value="/gallery"
          icon={
            <StyledTabIcon>
              <PhoneIcon />
            </StyledTabIcon>
          }
        />
        <StyledTab
          disableRipple
          label="Blog"
          value="/blog"
          icon={
            <StyledTabIcon>
              <PhoneIcon />
            </StyledTabIcon>
          }
        />
        <StyledTab
          disableRipple
          label="Contact Us"
          value="/contact"
          icon={
            <StyledTabIcon>
              <PhoneIcon />
            </StyledTabIcon>
          }
        />
      </StyledTabs>
    </TopMenuStyle>
  )
}

export default withRouter(TopMenu)
