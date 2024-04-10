import React from 'react'
import FormTrainer from '../components/HomePage/FormTrainer'
import '../style/HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <article className='home'>
        <header className='home__header'>
        <img className='home__img__logo' src="./Pokedexheader.png"  alt="" />
          <h1 className='home__title'>Hi Trainer!</h1>
          <p className='home__description'>to see the information, of the pokemon tell me your trainer name</p>
        </header>
        <FormTrainer />
      </article>
        
        <div className='rectangle-red'>
          <div className='rectangle-black'></div>
          <div className='circle'></div>
        </div>
    </div>
  
  )
}

export default HomePage