import './App.css'
import Headers from './component/Headers';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import  Chat  from './pages/Chat';
import Login from './pages/Login'
import Notfound from './pages/Notfound';

function App() {

  return (
    <>
      <main>
        <Headers/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/chat' element={<Chat/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/notfound' element={<Notfound/>} />
        </Routes>
      </main>
    </>
  )
}

export default App;
