import React, { useState } from 'react'
import data from '../Data'
import Header from '../components/Header'

const P11 = () => {
    var [count, setCount] = useState(0);

    const handleClick = ()=>{
        if(count===111){
            setCount(count=0);
        }
        setCount(count+=1)
    }

    const handleReset = ()=>{
        setCount(0)
    } 

  return (
    <div className='P11 '>
        <Header navr='p12' navl='p10' head='11' />
        <h3>111 times</h3>
        <h3>اَعُوْذُ بِاللّٰہِ مِنَ الشَّیْطٰنِ الرَّجِیْمِ</h3>
        <hr />
        <h3>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ</h3>
        <hr />
       
    <div className="text tasbeeh">
      <div className="arabic">
            {data[0].a11}
      </div>
      <hr />
      <div className="english">
            {data[0].e11}
      </div>
    </div>

    <div className="tasbeeh-btn" onClick={handleClick}>
        <button >
            {count} / 111
        </button>
    </div>

    <div className="reset">
        <button onClick={handleReset}>
            Reset
        </button>
    </div>

    </div>
  )
}

export default P11
