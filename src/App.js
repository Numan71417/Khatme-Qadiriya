
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Yaseen from './Pages/Yaseen';

function App() {
  return (
    <div className="App">
      <Routes>

          <Route path='/' element={ <Home/>}/>
          <Route path='/yaseen' element={<Yaseen/>}/>

      </Routes>

    </div>
  );
}

export default App;
