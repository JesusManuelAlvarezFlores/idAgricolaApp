import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route,Routes } from "react-router-dom";


import Fruta from './component/Fruta';
import Huerta from './component/Huerta';
import Transporte  from './component/Transporte'
import Menu from './component/Menu';
import './styles/app.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}  />
          <Route path="/Fruta" element={<Fruta/>} />
          <Route path="/Huerta" element={<Huerta/>} />
          <Route path="/Transporte" element={<Transporte/>} />
          <Route path="/prueba" element={<div>hola mundo</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
