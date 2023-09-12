import { createContext, useState } from "react";

const themes = {
    light: {
        color: '#ffffff',
        background: '#ffffff',
        backgroundSwitchButton: 'rgb(183, 183, 183)',
    },
    dark: {
        color: '#000000',
        background: 'rgb(180, 180, 180)',
        backgroundSwitchButton: 'rgb(66, 66, 66)',
    }
}

const ThemeContext = createContext({})

const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
} 

export { themes, ThemeContext, ThemeProvider}
