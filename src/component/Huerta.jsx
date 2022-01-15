import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import HuertaView from '../view/Huerta';
import Footer from './Footer';



class Huerta extends Component {
    state = {  }

    FrutaArray = ["huerta 1", 
    "huerta 2", ];
    
    render() { 
        return ( 
            <div>
            <Header name="Huerta" />
               <HuertaView data={ this.HuertaArray }/>               
                <Footer />
            </div>
         );
    }
}
 
export default Huerta;