import React from 'react'
import './Home.css';

import TranslationInput from '../../components/TranslationInput/TranslationInput';
import TranslationOuput from '../../components/TranslationOuput/TranslationOuput';


import hero from '../../assets/hero_img.jpg';
import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div className='main-background'>
        <div className='img-container'>
          <img src={hero} alt='hero-img' className='hero-img'/>
          <img src={logo} alt='logo' className='logo-img'/>
        </div>
        <div className='translation-containers'>
            <TranslationInput />
            <TranslationOuput />
        </div>
    </div>
  )
}

export default Home