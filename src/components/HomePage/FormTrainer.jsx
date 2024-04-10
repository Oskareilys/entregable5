import React, { useRef } from 'react'
import { setTrainer } from '../../store/states/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../style/FormTrainer.css'

const FormTrainer = () => {

    const trainerImput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(trainerImput.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <form className='form__content' onSubmit={handleSubmit}>
        <input className='form__input' ref={trainerImput} type="text" placeholder='Enter your trainer name.' />
        <button className='form__btn'>Lets Start</button>
    </form>
  )
}

export default FormTrainer