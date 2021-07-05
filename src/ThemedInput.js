
import React, { useContext } from 'react'
import { ThemeContext } from './theme-context';

function ThemedInput({name, labelTxt}) {

    const theme = useContext(ThemeContext);
    const {label , input } = theme

    return (
            <div style={{padding:theme.padding}}>
                <label 
                    style={{ 
                        color:label.color,
                        padding:label.padding
                    }}
                > 
                   {labelTxt}
                </label>
                <input 
                    type="input" 
                    name={name} 
                    style={{ borderColor:input.color }}
                />
            </div>
        );
}

export default ThemedInput;
