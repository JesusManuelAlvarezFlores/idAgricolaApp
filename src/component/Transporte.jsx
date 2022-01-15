import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import TransporteView from '../view/Transporte';
import Footer from './Footer';



class Transporte extends Component {
    state = {  }

    TransportesArray = ["JESUS MANUEL ALVAREZ FLORES", 
    "MARIANO ROMERO", ];
    
    render() { 
        return ( 
            <div>
            <Header name="Transporte" />
                <TransporteView data={ this.TransportesArray }/>
                <Footer />
            </div>
         );
    }
}
 
export default Transporte;