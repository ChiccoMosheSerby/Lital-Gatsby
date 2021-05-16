import React from 'react'
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import ExtensionRoundedIcon from "@material-ui/icons/ExtensionRounded";
import MoreRoundedIcon from "@material-ui/icons/MoreRounded";

const renderHomeRoundedIcon = <HomeRoundedIcon />;
const renderInfoRoundedIcon = <InfoRoundedIcon />;
const renderContactMailRoundedIcon = <ContactMailRoundedIcon />;
const renderExtensionRoundedIcon = <ExtensionRoundedIcon />;
const renderMoreRoundedIcon = <MoreRoundedIcon />;

 const navIcons = [
  renderHomeRoundedIcon,
  renderInfoRoundedIcon,
  renderContactMailRoundedIcon,
  renderExtensionRoundedIcon,
  renderMoreRoundedIcon,
];

export const useNavIcons = ()=>{
    return navIcons
}