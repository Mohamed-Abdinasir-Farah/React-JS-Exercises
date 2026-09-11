import React, { useState } from 'react';
import LanguageTranslate from './LanguageTranslate';
import Translate from './Translate';

function App() {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'english' ? 'espanyol' : 'english'));
  };

  return (
    <LanguageTranslate.Provider value={language}>
      <button onClick={toggleLanguage}>
        Switch to {language === 'english' ? 'Spanish' : 'English'}
      </button>
      <Translate />
    </LanguageTranslate.Provider>
  );
}

export default App;
