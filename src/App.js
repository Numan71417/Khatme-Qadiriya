
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Yaseen from './Pages/Yaseen';
import P1 from './Tasbeeh/P1';
import P2 from './Tasbeeh/P2';
import P3 from './Tasbeeh/P3';
import P4 from './Tasbeeh/P4';
import P5 from './Tasbeeh/P5';
import P6 from './Tasbeeh/P6';
import P7 from './Tasbeeh/P7';
import P8 from './Tasbeeh/P8';
import P9 from './Tasbeeh/P9';
import P10 from './Tasbeeh/P10';
import P11 from './Tasbeeh/P11';
import P12 from './Tasbeeh/P12';
import P13 from './Tasbeeh/P13';
import P14 from './Tasbeeh/P14';
import P15 from './Tasbeeh/P15';
import P16 from './Tasbeeh/P16';
import P17 from './Tasbeeh/P17';
import P18 from './Tasbeeh/P18';
import P19 from './Tasbeeh/P19';
import Qaseeda from './Pages/Qaseeda';
import Lastpage from './Pages/Lastpage';
import { useState } from 'react';
import Counter from './Pages/Counter';


function App() {
  
  const [open, setOpen] = useState(true);
  var [n, setNum] = useState(1);
  var [num, setTotal] = useState({s:111,d:0});
  
  const handleplus = ()=>{

    if(n<30){
    setNum(n+=1)
    setTotal({ s:111/n,d:111%n });
    console.log(num);
    }
  }


  const handleminus = ()=>{
    if(n>1){
    setNum(n-=1);
    setTotal({ s:111/n,d:111%n });
    console.log(num);

    }
   
  }
  const handleopen = ()=>{
    if(open){
      setOpen(false);
    }else setOpen(true);
  }


  return (
    <div className="App">
      
      
      
          <div className="add">

            <button onClick={handleopen} style={{width:'20px',height:'20px',background:'red'}}>x</button>
          
          { open &&
          <div className="tcount">
            
              <label >No of peoples //extra:{num.d}</label>

              <button className="minus" onClick={handleminus}>-</button>
              <input type="number"  placeholder='1' value={n} onChange={(e)=>{setNum(e.target.value)}} />
              <button className="plus" onClick={handleplus}>+</button>
            </div>
          }

          </div>

      <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/yaseen' element={<Yaseen/>}/>
          <Route path='/p1' element={<P1 num={num.s} />}/>
          <Route path='/p2' element={<P2 num={num.s} />}/>
          <Route path='/p3' element={<P3 num={num.s} />}/>
          <Route path='/p4' element={<P4 num={num.s} />}/>
          <Route path='/p5' element={<P5 num={num.s} />}/>
          <Route path='/p6' element={<P6 num={num.s} />}/>
          <Route path='/p7' element={<P7 num={num.s} />}/>
          <Route path='/p8' element={<P8 num={num.s} />}/>
          <Route path='/p9' element={<P9 num={num.s} />}/>
          <Route path='/p10' element={<P10 num={num.s} />}/>
          <Route path='/p11' element={<P11 num={num.s} />}/>
          <Route path='/p12' element={<P12 num={num.s} />}/>
          <Route path='/p13' element={<P13 num={num.s} />}/>
          <Route path='/p14' element={<P14 num={num.s} />}/>
          <Route path='/p15' element={<P15 num={num.s} />}/>
          <Route path='/p16' element={<P16 num={num.s} />}/>
          <Route path='/p17' element={<P17 num={num.s} />}/>
          <Route path='/p18' element={<P18 num={num.s} />}/>
          <Route path='/p19' element={<P19 num={num.s} />}/>
          <Route path='/qaseeda' element={<Qaseeda/>}/>
          <Route path='/last' element={<Lastpage num={num.s} />}/>
          <Route path='/counter' element={<Counter/>}/>
          

      </Routes>

    </div>
  );
}

export default App;
