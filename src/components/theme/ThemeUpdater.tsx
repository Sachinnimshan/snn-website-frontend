import React, { useEffect } from "react";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

interface ThemeUpdaterProps {
  children: ReactNode;
}

const ThemeUpdater: React.FC<ThemeUpdaterProps> = ({ children }) => {
  const secondaryColor = useSelector(
    (state: RootState) => state.theme.secondaryColor
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--secondary-color", secondaryColor);
  }, [secondaryColor]);

  return <>{children}</>;
};

export default ThemeUpdater;
