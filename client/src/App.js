import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import NavBar from './components/navBar/NavBar';
import CreatePage from './pages/CreatePage';
import SearchBar from './components/searchBar/SearchBar';

function App() {

 

  return (

    <BrowserRouter>
    
      <Routes>
            <Route path='/' element={<StartPage/>}/>
            <Route path='/home' element={<MainPage/>}/>
            <Route path='/navbar' element={<NavBar/>}/>
            <Route path='/home/create' element={<CreatePage/>}/>
            <Route path='/home/:id' element={<DetailPage/>}/>
            <Route path='/search' element={<SearchBar/> }/>
           

      </Routes>

    </BrowserRouter>


  );
}

export default App;
