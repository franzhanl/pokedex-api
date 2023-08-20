import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { SwitchButton } from "../SwitchButton/SwitchButton";

const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return <SwitchButton onClick={ () => setTheme(theme === themes.light ? themes.dark : themes.light)}>Dark mode</SwitchButton>
}

export { ThemeTogglerButton }