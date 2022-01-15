import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import RecepcionFrutaView from '../view/RecepcionFrutas';
import Footer from './Footer';



class RecepcionFruta extends Component {
    state = {  }

    RecepcionFrutasArray = ["JESUS MANUEL ALVAREZ FLORES", 
    "MARIANO ROMERO", ];
    
    render() { 
        return ( 
            <div>
            <Header name="RecepcionFruta" />
               {/*  <RecepcionFrutasView data={ this.RecepcionFrutasArray }/> */}
                <Footer />
            </div>
         );
    }
}
 
export default RecepcionFruta;