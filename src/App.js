import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SecondQuestion from './components/SecondQuestion';
import ThirdQuestion from './components/ThirdQuestion';
import FourthQuestion from './components/FourthQuestion';
import Final from './components/Final';
import First from './components/First';


function App() {
  return (
   
    <Router>
    <Routes>
      <Route exact path='/' element={<First/>}></Route>
      <Route exact path='/second' element={<SecondQuestion/>}></Route>
      <Route exact path='/third' element={<ThirdQuestion/>}></Route>
      <Route exact path='/fourth' element={<FourthQuestion/>}></Route>
      <Route exact path='/final' element={<Final/>}></Route>
    </Routes>
    </Router>
   

   
  );
}

export default App;
