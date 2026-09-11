import React, { useContext } from 'react';
import LanguageTranslate from './LanguageTranslate';

function Translate() {
  const language = useContext(LanguageTranslate);

  const messages = {
    english: 'Hello!',
    espanyol: 'Hola!',
  };

  return <h1>{messages[language]}</h1>;
}

export default Translate;
