import React from 'react'
import bg from '../assets/bg-home.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
      <div className="home-contain">
        <img width='376px' src={bg} alt="" />
        <div className="btns">
            <button className="btn-home">Introduction</button>
            <Link to='/p1'>
            <button className="btn-home">Recite Khatm-e-Qadiriya</button>
            </Link>
            <button className="btn-home">About us</button>
            <Link to='/yaseen'>
            <button className="btn-home">Yaseen</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
