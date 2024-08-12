import React from 'react'
import './TranslationInput.css';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import useStore from '../../store';
import SpeakAndCopy from '../SpeakAndCopy/SpeakAndCopy';
import translateAlpha from '../../assets/Sort_alfa.svg';

const TranslationInput = () => {
  const { inputText , setInputText } = useStore();

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
          <button className='translate-btn'>
            <img src={translateAlpha} alt='translate-icon' className='translate-icon'/>
            Translate
          </button>
        </div>
    </div>
  )
}

export default TranslationInput