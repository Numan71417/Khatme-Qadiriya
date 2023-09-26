
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


function App() {
  return (
    <div className="App">
      <Routes>

          <Route path='/' element={ <Home/>}/>
          <Route path='/yaseen' element={<Yaseen/>}/>
          <Route path='/p1' element={<P1/>}/>
          <Route path='/p2' element={<P2/>}/>
          <Route path='/p3' element={<P3/>}/>
          <Route path='/p4' element={<P4/>}/>
          <Route path='/p5' element={<P5/>}/>
          <Route path='/p6' element={<P6/>}/>
          <Route path='/p7' element={<P7/>}/>
          <Route path='/p8' element={<P8/>}/>
          <Route path='/p9' element={<P9/>}/>
          <Route path='/p10' element={<P10/>}/>
          <Route path='/p11' element={<P11/>}/>
          <Route path='/p12' element={<P12/>}/>
          <Route path='/p13' element={<P13/>}/>
          <Route path='/p14' element={<P14/>}/>
          <Route path='/p15' element={<P15/>}/>
          <Route path='/p16' element={<P16/>}/>
          <Route path='/p17' element={<P17/>}/>
          <Route path='/p18' element={<P18/>}/>
          <Route path='/p19' element={<P19/>}/>
          

      </Routes>

    </div>
  );
}

export default App;
