import React from 'react';

export const languages = {
    en: {
        titleLbl: 'Please enter below details ',
        firstNameLbl: 'First Name :',
        lastNameLbl:'Last Name : ',
        descrUseContextLbl:'below input and label is styled by theme useContext and lang useContext!'
    },
    fr: {
        titlelbl    : 'Please enter below details ',
        firstNameLbl: 'First Name :',
        lastNameLbl:'Last Name : ',
        descrUseContextLbl:'below input and label is styled by theme useContext and lang useContext!'
    },
  };

  export const LangContext = React.createContext(
    languages.en // default value
  );