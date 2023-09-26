import React, { useState } from 'react'
import data from '../Data'
import Header from '../components/Header'

const P15 = ({num}) => {
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
    <div className='P15 tas'>
        <Header navr='p16' navl='p14' head='15' />
        <h3> {Math.floor(num)} times</h3>
        <h3>اَعُوْذُ بِاللّٰہِ مِنَ الشَّیْطٰنِ الرَّجِیْمِ</h3>
        <hr />
        <h3>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ</h3>
        <hr />
       
    <div className="text tasbeeh">
      <div className="arabic">
            {data[0].a15}
      </div>
      <hr />
      <div className="english">
            {data[0].e15}
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

export default P15
