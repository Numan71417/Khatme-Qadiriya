import React, { useState } from 'react'
import bg from '../assets/bg-home.jpg'
import { Link } from 'react-router-dom'
import Header from '../components/Header';


const Home = () => {

  return (
    <div className='home'>
      <div className="home-contain">
        
        <img width='376px' src={bg} alt="" />
        <div className="btns">
          <Link to='/counter'>
            <button className="btn-home btn-u">Tasbeeh Counter</button>
          </Link>

            <Link to='/p1'>
            <button className="btn-home btn-d">Recite Khatm-e-Qadiriya</button>
            </Link>

            
            
            
        </div>
      </div>
    </div>
  )
}

export default Home
