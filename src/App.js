import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthContextComponent } from './contexts/authContext';
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
          <Route path='/login' element={<Login/>}/>
          <Route path='/feed' element={<Feed/>}/>
        </Routes>
      </BrowserRouter>
    </AuthContextComponent>
    </div>
  );
}

export default App;
