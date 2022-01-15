import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from "@material-ui/core";


class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-content">
                <Container maxWidth="xs">
                <Link to="/Fruta">
                    <Button variant="contained" color="default">
                        Fruta
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/transporte">
                    <Button variant="contained" color="default">
                        Transportes
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/huertas">
                    <Button variant="contained" color="default">
                        Huertas
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/recepcionFruta">
                    <Button variant="contained" color="default">
                        Recepcion de Fruta
                    </Button>
                </Link>
            </Container>
            </div>
         );
    }
}
 
export default Content;