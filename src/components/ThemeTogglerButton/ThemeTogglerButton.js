import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { SwitchButton } from "../SwitchButton/SwitchButton";

const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    const [ currentTheme, setCurrentTheme ] = useState()
    
    useEffect( () => {
        setCurrentTheme(theme === themes.light ? "Ligth Theme" : "Dark Theme" )
    },[theme])

    return (
        <>
           <strong style={{color: theme.color}}>{ currentTheme }</strong>
           <SwitchButton onClick={ () => setTheme(theme === themes.light ? themes.dark : themes.light) }/>
        </>
    )
}

export { ThemeTogglerButton }