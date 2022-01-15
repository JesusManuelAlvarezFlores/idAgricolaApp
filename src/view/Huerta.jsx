import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';

import {
    Button,
    Container,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";


class Huertas extends Component {
    
    constructor(props) {
        super(props);   
        this.state = {
            edit: false,
            idHuerta: 0,
            Huertas1: []
        }
    }
    state = {

    }
  
    titulo = "LISTA DE HUERTAS";


    frmclave = React.createRef();
    frmnombre = React.createRef();
    frmidProductor = React.createRef();

  addHuerta = event => {
    event.preventDefault();


    const data = { clave:this.frmclave.value, nombre:this.frmnombre.value,idProductor:this.frmidProductor.value }

    
    if(!this.state.edit) {
        const url ='http://localhost:5000/Huertas';

        axios.post(url, data)
	        .then(res => console.log(res.data));


        this.frmclave.value = "";
        this.frmnombre.value = "";
        this.frmidProductor.value = "";
        this.frmclave.focus();
        this.frmnombre.focus();
        this.frmidProductor.focus();
    }
    else {

        const url ='http://localhost:5000/Huertas/'+this.state.id;

        const data = { clave:this.frmclave.value, nombre:this.frmnombre.value,idProductor:this.frmidProductor.value }

        axios.put(url, data)
            .then(res => console.log(res.data));
        
        console.log(url);
    
        }
    

        this.loadHuerta();
    
  }

  viewHuerta = (id) => event => {
    event.preventDefault();

    this.frmclave.value = "";
    this.frmnombre.value = "";
    this.frmidProductor.value = "";
    this.frmclave.focus();
    this.frmnombre.focus();
    this.frmidProductor.focus();
    this.frmnombre.value = this.state.Huertas[id];
  }


  editHuerta = (id, row) => event => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmclave.focus();
    this.frmclave.value = this.state.Huertas1[row].id;
    this.frmnombre.focus();
    this.frmnombre.value = this.state.Huertas1[row].nombre;
    this.frmidProductor.focus();
    this.frmidProductor.value = this.state.Huertas1[row].idProductor;

  }

  deleteHuerta = (id) => event => {
        event.preventDefault();

        const url ='http://localhost:5000/Huertas/'+id;

        axios.delete(url)
            .then(res => console.log(res.data));
        
        
        this.loadHuerta();
        
        console.log(url);
    }  

  loadHuerta () {

    axios.get('http://localhost:5000/Huertas')
    .then(res => {
      //const emps = res.data;
      this.setState({ Huertas1: res.data });
      console.log(res.data);
    })



  }

  componentDidMount() {
    this.loadHuerta();
  }
   

    render() { 
        return ( 
            <div className="App-Huerta">
                <Container maxWidth="xs">
                    <Link to="/">
                        <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />} > Regresar
                        </Button>
                    </Link>
                </Container>
                <form autoComplete="off" onSubmit={this.addHuerta}>    
                    <TextField
                        label="Id"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmclave = e)}
                    />
                    <TextField
                        label="nombre"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmnombre = e)}
                    />
                    <TextField
                        label="idProductor"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmidProductor = e)}
                    />
                    <Fab
                        color="primary"
                        size="medium"
                        //className="dish-form-icon"
                        onClick={this.addHuerta}
                    >
                        <AddIcon />
                    </Fab>
                </form>

              <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                   {this.state.Huertas1.map((Huerta, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon onClick={this.viewHuerta(index)}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText inset primary={Huerta.clave} />
                            <ListItemText inset primary={Huerta.nombre} />
                            <ListItemText inset primary={Huerta.idProductor} />
                            <ListItemIcon onClick={this.editHuerta(Huerta.id, index)}>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemIcon onClick={this.deleteHuerta(Huerta.id)}>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                    
                </List> 



            </div>
         );
    }
}
 
export default Huertas;