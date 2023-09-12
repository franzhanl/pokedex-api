import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Switch } from 'antd'

const SwitchButton = (props) => {
    
    const { theme } = useContext(ThemeContext)

    return <Switch { ...props } style={{backgroundColor: theme.backgroundSwitchButton}} />
}

export { SwitchButton }