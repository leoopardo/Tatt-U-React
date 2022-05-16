import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthContextComponent } from './contexts/authContext';
import { Artist } from './Pages/artist';
import { Feed } from './Pages/feed';
import { Login } from './Pages/login';
import { Signup } from './Pages/signup';

function App() {
  return (
    <div className='App'>
    <AuthContextComponent>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='artist' element={<Artist/>}/>
        </Routes>
      </BrowserRouter>
    </AuthContextComponent>
    </div>
  );
}

export default App;
