import React, { useState } from 'react'
import data from '../Data'
import Header from '../components/Header'

const P8 = ({num}) => {
    var [count, setCount] = useState(0);

    const handleClick = ()=>{
        if(count=== Math.floor(num)){
            setCount(count=0);
        }
        setCount(count+=1)
    }

    const handleReset = ()=>{
        setCount(0)
    } 

  return (
    <div className='P8 tas'>
        <Header navr='p9' navl='p7' head='8' />
        <h3> {Math.floor(num)} times</h3>
        <h3>اَعُوْذُ بِاللّٰہِ مِنَ الشَّیْطٰنِ الرَّجِیْمِ</h3>
        <hr />
        <h3>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ</h3>
        <hr />
       
    <div className="text tasbeeh">
      <div className="arabic">
            {data[0].a8}
      </div>
      <hr />
      <div className="english">
            {data[0].e8}
      </div>
    </div>

    <div className="tasbeeh-btn" onClick={handleClick}>
        <div className='btn' >
            {count} /  {Math.floor(num)}
        </div>
    </div>

    <div className="reset">
        <button onClick={handleReset}>
            Reset
        </button>
    </div>

    </div>
  )
}

export default P8
