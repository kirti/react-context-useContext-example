import { LangContext  } from './lang-context';
import ThemedInput from './ThemedInput'
import React, { useContext } from 'react'

function User() {
    const lang = useContext(LangContext)
  return (
      <>
      <h3>{lang.descrUseContextLbl}</h3>
        <ThemedInput name="firstname" labelTxt={lang.firstNameLbl}/>
        <ThemedInput name="lastname" labelTxt={lang.lastNameLbl}/>
      </>
  );
}

export default User;
