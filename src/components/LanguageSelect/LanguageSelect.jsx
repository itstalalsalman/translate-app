import React from 'react'
import './LanguageSelect.css';

import useStore from '../../store';

const LanguageSelect = ({isInput}) => {
    const { languages, inputLanguage, outputLanguage, setInputLanguage, setOutputLanguage } = useStore();

    const selectedLanguage = isInput ? inputLanguage : outputLanguage;
    const setSelectedLanguage = isInput ? setInputLanguage : setOutputLanguage;

    const handleClickAndChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

  return (
    <div className='main-container'>
        {
            languages.slice(0, 2).map((lang) => (
                <button 
                    key={lang.initials} 
                    value={lang.initials} 
                    onClick={handleClickAndChange}
                    className={selectedLanguage === lang.initials ? 'active' : 'notActive'}
                >
                {lang.language}
                </button>
            )
        )}   
        <select value={selectedLanguage} onChange={handleClickAndChange} className='selectOptions'>
            {
                languages.slice(2).map((lang) => (
                    <option key={lang.initials} value={lang.initials}>
                        {lang.language}
                    </option>
                )
            )}
        </select>
    </div>
  )
}

export default LanguageSelect