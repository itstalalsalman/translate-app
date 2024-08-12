import React, { useEffect } from 'react'
import './TranslationInput.css';

import LanguageSelect from '../LanguageSelect/LanguageSelect';
import SpeakAndCopy from '../SpeakAndCopy/SpeakAndCopy';

import useStore from '../../store';

import translateAlpha from '../../assets/Sort_alfa.svg';

const TranslationInput = () => {
  const { inputText , setInputText, inputLanguage, outputLanguage, translateText } = useStore();

  useEffect(() => {
    translateText(inputText, inputLanguage, outputLanguage);
  }, [inputText, inputLanguage, outputLanguage, translateText]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className='input-container'>
        <div className='selection-container'>
            <button className='btn-styling'>Detect Language</button>
            <LanguageSelect isInput={true} />
        </div>
        <div className='textInputContainer'>
          <textarea
            value={inputText}
            onChange={handleChange}
            placeholder="Enter to translate..."
            className='inp-textArea'
          />
          <p className='counter'>{inputText.length}/500</p>
        </div>
        <div className='translate-btn-container'>
          <SpeakAndCopy isInput={true} />
          <button className='translate-btn' onClick={() => translateText(inputText, inputLanguage, outputLanguage)}>
            <img src={translateAlpha} alt='translate-icon' className='translate-icon'/>
            Translate
          </button>
        </div>
    </div>
  )
}

export default TranslationInput