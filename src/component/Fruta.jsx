import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import FrutaView from '../view/Fruta';
import Footer from './Footer';



class Fruta extends Component {
    state = {  }

    FrutaArray = ["FRESA", 
    "DURAZNO", ];
    
    render() { 
        return ( 
            <div>
            <Header name="Fruta" />
               <FrutaView data={ this.FrutaArray }/>               
                <Footer />
            </div>
         );
    }
}
 
export default Fruta;