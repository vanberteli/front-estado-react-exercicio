import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Exercicio1 from './Exercicio1';
import Exercicio2 from './Exercicio2';
import Exercicio3 from './Exercicio3';

ReactDOM.render(
  <React.StrictMode>  
    <Exercicio1 />
    <hr/>
    <Exercicio2 />
    <hr/>
    <Exercicio3 />
  </React.StrictMode>,
  document.getElementById('root')
);

