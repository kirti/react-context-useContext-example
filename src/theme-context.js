import React from 'react';
export const themes = {

    light: {
      padding: '10px',
      background: '#ccc',
      input:{
          "color":'#fff'
      },
      label:{
        "color":'#ccc',
        "padding":'2rem'
      }
    },
    dark: {
      padding: '10px',
      background: '#cecece',
      input:{
        "color":'#ccc',
     
       },
      label:{
        "color":'blue',
        "padding":'2rem'
      }
    },
  };

  export const ThemeContext = React.createContext(
    themes.dark // default value
  );