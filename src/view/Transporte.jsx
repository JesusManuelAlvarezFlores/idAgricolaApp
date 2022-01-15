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


class Transporte extends Component {
    
    constructor(props) {
        super(props);   
        this.state = {
            edit: false,
            idTransporte: 0,
            Transportes1: []
        }
    }
    state = {

    }
  
    titulo = "LISTA DE TRANSPORTES";


    frmclave = React.createRef();
    frmnombre = React.createRef();
    frmTipo = React.createRef();
    frmCapacidad = React.createRef();

  addTransporte = event => {
    event.preventDefault();


    const data = { clave:this.frmclave.value, nombre:this.frmnombre.value, tipo:this.frmTipo.value, capacidad:this.frmCapacidad.value }

    
    if(!this.state.edit) {
        const url ='http://localhost:5000/transportes';

        axios.post(url, data)
	        .then(res => console.log(res.data));


        this.frmclave.value = "";
        this.frmnombre.value = "";
        this.frmTipo.value = "";
        this.frmCapacidad.value = "0.0";
        this.frmclave.focus();
        this.frmnombre.focus();
        this.frmTipo.focus();
        this.frmCapacidad.focus();
    }
    else {

        const url ='http://localhost:5000/transportes/'+this.state.id;

        const data = { clave:this.frmclave.value, nombre:this.frmnombre.value,tipo:this.frmTipo.value,capacidad:this.frmCapacidad.value }

        axios.put(url, data)
            .then(res => console.log(res.data));
        
        console.log(url);
    
        }
    

        this.loadTransporte();
    
  }

  viewTransporte = (id) => event => {
    event.preventDefault();

    this.frmclave.value = "";
    this.frmnombre.value = "";
    this.frmTipo.value = "";
    this.frmCapacidad.value="0.0"
    this.frmclave.focus();
    this.frmnombre.focus();
    this.frmTipo.focus();
    this.frmCapacidad.focus();
    this.frmnombre.value = this.state.Transportes[id];
  }


  editTransporte = (id, row) => event => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmclave.focus();
    this.frmclave.value = this.state.Transportes1[row].id;
    this.frmnombre.focus();
    this.frmnombre.value = this.state.Transportes1[row].nombre;
    this.frmTipo.focus();
    this.frmTipo.value = this.state.Transportes1[row].tipo;
    this.frmCapacidad.focus();
    this.frmCapacidad.value = this.state.Transportes1[row].capacidad;

  }

  deleteTransporte = (id) => event => {
        event.preventDefault();

        const url ='http://localhost:5000/transportes/'+id;

        axios.delete(url)
            .then(res => console.log(res.data));
        
        
        this.loadTransporte();
        
        console.log(url);
    }  

  loadTransporte () {

    axios.get('http://localhost:5000/transportes')
    .then(res => {
      //const emps = res.data;
      this.setState({ Transportes1: res.data });
      console.log(res.data);
    })



  }

  componentDidMount() {
    this.loadTransporte();
  }
   

    render() { 
        return ( 
            <div className="App-Transporte">
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
                <form autoComplete="off" onSubmit={this.addTransporte}>    
                    <TextField
                        label="Clave"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmclave = e)}
                    />
                    <TextField
                        label="Nombre"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmnombre = e)}
                    />
                    <TextField
                        label="Tipo"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmTipo = e)}
                    />
                    <TextField
                        label="capacidad"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmCapacidad = e)}
                    />
                    <Fab
                        color="primary"
                        size="medium"
                        //className="dish-form-icon"
                        onClick={this.addTransporte}
                    >
                        <AddIcon />
                    </Fab>
                </form>

              <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                   {this.state.Transportes1.map((Transporte, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon onClick={this.viewTransporte(index)}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText inset primary={Transporte.clave} />
                            <ListItemText inset primary={Transporte.nombre} />
                            <ListItemText inset primary={Transporte.tipo} />
                            <ListItemText inset primary={Transporte.capacidad} />
                            <ListItemIcon onClick={this.editTransporte(Transporte.id, index)}>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemIcon onClick={this.deleteTransporte(Transporte.id)}>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                    
                </List> 



            </div>
         );
    }
}
 
export default Transporte;