import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './compo/About/About';
import Friends from './compo/Friends/Friends';
import Home from './compo/Home/Home';
import NotFound from './compo/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my routing experience</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
