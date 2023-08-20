import { createContext, useState } from "react";

const themes = {
    light: {
        color: '#000000',
        background: '#ffffffff',
    },
    dark: {
        color: '#ffffff',
        background: 'rgb(180, 180, 180)',
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
