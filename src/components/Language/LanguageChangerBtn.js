import React from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";
import { useHover } from "../../hooks/useHover";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { theme } from "../../styles/theme";
import { makeStyles } from "@material-ui/styles";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";

import { Lang } from "./style";

const useStyles = makeStyles({
  iconStyle: {
    background: "#fff",
    borderRadius: 5000,
    color: theme.color1,
    cursor: "pointer",
    boxShadow: "0px 0px 7px 2px rgba(0,0,0,0.22)",
    "&:hover": {
      boxShadow: "0px 0px 7px 5px rgba(0,0,0,0.22)",
    },
  },
});

const LanguageChangerBtn = ({setL,language}) => {
  const [toggle, setToggle] = React.useState(false);
  const [hoverRef1, isHovered1] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const langRef = React.useRef();
  const { isMobile } = useDeviceDetect();
  useClickOutside(langRef, toggle);
  const styles = useStyles();
  const [lang, setLang] = useLocalStorage("lang", undefined);
  typeof lang === "undefined" && setLang("en");
  React.useEffect(() => {
    isHovered1 || isHovered2
      ? !isMobile && setToggle(true)
      : !isMobile && setToggle(false);
  }, [isHovered1, isHovered2]);
  setL(lang);
  console.log('lang',language);
  return (
    <Lang ref={langRef} isOpen={toggle}>
      <LanguageRoundedIcon
        ref={hoverRef1}
        className={styles.iconStyle}
        onClick={() => isMobile && setToggle((prev) => !prev)}
      />
      <ul ref={hoverRef2}>
        <li
          style={{
            background: language == "en" ? theme.color2opacity : "",
          }}
          onClick={() => setLang("en")}
        >
          English - אנגלית
        </li>
        <li
          style={{
            background: language == "he" ? theme.color2opacity : "",
          }}
          onClick={() => setLang("he")}
        >
          Hebrew - עברית
        </li>
      </ul>
    </Lang>
  );
};

export default LanguageChangerBtn;
