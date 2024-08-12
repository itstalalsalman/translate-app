import React from 'react'
import './SpeakAndCopy.css'

import speak from '../../assets/sound_max_fill.svg';
import copy from '../../assets/Copy.svg';

import useStore from '../../store';

const SpeakAndCopy = ({isInput}) => {
    const {inputText, translatedText, inputLanguage, outputLanguage} = useStore();
    const text = isInput ? inputText : translatedText;
    const languageToSpeak = isInput ? inputLanguage : outputLanguage;

    const handleSpeech = (text, lang) => {
        const speach = new SpeechSynthesisUtterance(text);
        speach.lang = lang;
        window.speechSynthesis.speak(speach);
    }

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard.");
    }

  return (
    <div className='speakCopy-container'>
        <button className={`speak-btn`} onClick={() => handleSpeech(text, languageToSpeak)}><img src={speak} alt='vol-icon' className='speak-icon' /></button>
        <button className={`copy-btn`} onClick={() => handleCopy(text)}><img src={copy} alt='copy-icon' className='copy-icon' /></button>
    </div>
  )
}

export default SpeakAndCopy