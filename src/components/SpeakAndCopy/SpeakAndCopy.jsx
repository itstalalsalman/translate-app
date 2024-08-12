import React from 'react'
import './SpeakAndCopy.css'

import speak from '../../assets/sound_max_fill.svg';
import copy from '../../assets/Copy.svg';

const SpeakAndCopy = ({isInput}) => {
  return (
    <div className='speakCopy-container'>
        <button className='speak-btn'><img src={speak} alt='vol-icon' className='speak-icon' /></button>
        <button className='copy-btn'><img src={copy} alt='copy-icon' className='copy-icon' /></button>
    </div>
  )
}

export default SpeakAndCopy