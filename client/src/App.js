import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import Info from './components/loading/Info'
import CreatePokemon from './components/form/CreatePokemon';
import DetailPage from './pages/DetailPage';
import NavBar from './components/navBar/NavBar';
function App() {

 

  return (

    <BrowserRouter>
    
      <Routes>
            <Route path='/' element={<StartPage/>}/>
            <Route path='/home' element={<MainPage/>}/>
            <Route path='/create' element={<CreatePokemon/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
            <Route path='/loading' element={<Info/>}/>
            <Route path='/navbar' element={<NavBar/>}/>


      </Routes>

    </BrowserRouter>


  );
}

export default App;
