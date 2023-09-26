import React,{useState} from 'react'
import Header from '../components/Header';

const Counter = () => {

    var [count, setCount] = useState(0);
    const handleClick = ()=>{
        if(count=== 999999){
            setCount(count=0);
        }
        setCount(count+=1)
    }

    const handleReset = ()=>{
        setCount(0)
    } 
  return (
    <div>
        <Header navl='' navr='' head='Tasbeeh Counter'/>

      <div className="tasbeeh-btn" onClick={handleClick}>
        <button style={{height:'550px',width:'100vw'}}>
            {count} 
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

export default Counter
