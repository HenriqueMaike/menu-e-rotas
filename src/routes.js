import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import HeaderApp from "./componets/Header";
import Erro from "./pages/Erro";

function RoutesApp(){
    return(
        <BrowserRouter>
            <HeaderApp/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='sobre' element={<Sobre/>}/>
                <Route path='contato' element={<Contato/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;