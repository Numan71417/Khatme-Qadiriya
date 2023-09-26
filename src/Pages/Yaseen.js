import React from 'react'
import data from '../Data'

const Yaseen = () => {
  return (
    <div className='yaseen-cont'>
        <div className="header">
            {'<-'}
        </div>

        <h1>سورة يٰسٓ </h1>
        <h3>اَعُوْذُ بِاللّٰہِ مِنَ الشَّیْطٰنِ الرَّجِیْمِ</h3>
        <h3>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ</h3>
    
        <p>
        {data[0].yaseen1}
        {data[0].yaseen2}
        {data[0].yaseen3}
        {data[0].yaseen4}
        {data[0].yaseen5}
        </p>  
    </div>
  )
}

export default Yaseen
