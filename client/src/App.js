import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import CreatePokemon from './components/form/CreatePokemon';
import DetailPage from './pages/DetailPage';
import NavBar from './components/navBar/NavBar';

function App() {

 

  return (

    <BrowserRouter>
    
      <Routes>
            <Route path='/' element={<StartPage/>}/>
            <Route path='/home' element={<MainPage/>}/>
            <Route path='/navbar' element={<NavBar/>}/>
            <Route path='/home/:id' element={<DetailPage/>}/>
      </Routes>

    </BrowserRouter>


  );
}

export default App;

//<Route path='/home/create' element={<CreatePokemon/>}/>
//<Route path="/home/:id" element={<DetailPage/>}/> 