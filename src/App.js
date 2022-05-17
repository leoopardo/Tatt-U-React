import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthContextComponent } from './contexts/authContext';
import { Chat } from './Pages/chat';
import { Artist } from './Pages/artist';
import { Feed } from './Pages/feed';
import { Followings } from './Pages/followings';
import { Login } from './Pages/login';
import { SearchNewArtist } from './Pages/searchNewArtist';
import { Signup } from './Pages/signup';
import { NewPost } from './Pages/newPost';

function App() {
  return (
    <div className='App'>
    <AuthContextComponent>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/followings' element={<Followings/>} />
          <Route path='/chat' element={<Chat/>} />
          <Route path='/search' element={<SearchNewArtist/>} />
          <Route path='artist' element={<Artist/>}/>
          <Route path='/new-post' element={<NewPost/>}/>
        </Routes>
      </BrowserRouter>
    </AuthContextComponent>
    </div>
  );
}

export default App;
