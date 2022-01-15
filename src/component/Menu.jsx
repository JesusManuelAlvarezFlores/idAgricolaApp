import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/app.css';

// Importar Componentes
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

var alumnos = ["JESUS MANUEL ALVAREZ FLORES", 
"MARIANO ROMERO"];
class Menu extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            alumnos: alumnos
        }
    }
    state = {
            }
    render() { 
        return ( 
            <div>
                <Header name="ID-RECEPCION" />
                <Content data={ this.state.data } />
                <Footer />
            </div>
         );
    }
}
 
export default Menu;