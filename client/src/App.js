import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import CreatingPage from './pages/CreatingPage';


function App() {

 

  return (

    <BrowserRouter>
    
      <Routes>
            <Route path='/' element={<StartPage/>}/>
            <Route path='/home' element={<MainPage/>}/>
            <Route path='/home/create' element={<CreatingPage/>}/>
            <Route path='/home/:id' element={<DetailPage/>}/>
           

      </Routes>

    </BrowserRouter>


  );
}

export default App;
