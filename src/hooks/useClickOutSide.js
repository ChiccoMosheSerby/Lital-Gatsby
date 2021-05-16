import { useEffect } from "react";

export function useClickOutside(ref, setShowTooltip, clickOutSide) {
  function handleClickOutside(event) {
    if (clickOutSide && ref.current && !ref.current.contains(event.target)) {
      setShowTooltip(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
