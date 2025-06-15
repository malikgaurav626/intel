import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggle = ({children}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="nav_icon" onClick={toggleTheme}>
      {children}
    </div>
  );
};

export default ThemeToggle;
