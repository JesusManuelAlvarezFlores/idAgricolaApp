import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import ProductorView from '../view/Productor';
import Footer from './Footer';



class Productor extends Component {
    state = {  }

    FrutaArray = ["Productor 1", 
    "Productor 2", ];
    
    render() { 
        return ( 
            <div>
            <Header name="Productor" />
               <ProductorView data={ this.ProductorArray }/>               
                <Footer />
            </div>
         );
    }
}
 
export default Productor;