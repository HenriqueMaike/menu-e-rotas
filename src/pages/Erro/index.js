import React from 'react';
import { Link } from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
        <div className='erro'>
            <h1>404</h1>
            <h2>Esta pagina não existe.</h2>
            <Link to={'/'}>Voltar a pagina inicial</Link>
        </div>
    );
}

export default Erro;