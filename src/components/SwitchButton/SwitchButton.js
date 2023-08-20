import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const SwitchButton = (props) => {
    
    const { theme } = useContext(ThemeContext)

    return(
        <button { ...props } style={{color: theme.color, backgroundColor: theme.background}}/>
    )
}

export { SwitchButton }