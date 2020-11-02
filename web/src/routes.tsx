 import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CreatePoint from './pages/Cadastro';
//import Cadastrar from './pages/Cadastro';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Route component={CreatePoint} path="/" exact/>
        </BrowserRouter>
    )
}

export default Routes;