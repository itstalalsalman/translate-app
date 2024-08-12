import React from 'react'
import './TranslationOuput.css';

import swap from '../../assets/Horizontal_top_left_main.svg';

import LanguageSelect from '../LanguageSelect/LanguageSelect';
import SpeakAndCopy from '../SpeakAndCopy/SpeakAndCopy';
import useStore from '../../store';

const TranslationOuput = () => {

  const { translatedText } = useStore();

  return (
    <div className='output-container'>
        <div className='selection-container'>
          <LanguageSelect isInput={false} />
          <button className='btn-swap'><img src={swap} alt='swap' className='swapIcon' /></button>
        </div>
        <div className='outputResults-display'>
          <p className='translatedResult'>
            {translatedText}
          </p>
        </div>
        <div className='speakAndCopy-container'>
          <SpeakAndCopy isInput={false} />
        </div>
    </div>
  )
}

export default TranslationOuput