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


class Frutas extends Component {
    
    constructor(props) {
        super(props);   
        this.state = {
            edit: false,
            idFruta: 0,
            frutas1: []
        }
    }
    state = {

    }
  
    titulo = "LISTA DE FRUTAS";


    frmcodigo = React.createRef();
    frmdescripcion = React.createRef();
    frmTipo = React.createRef();

  addFruta = event => {
    event.preventDefault();


    const data = { codigo:this.frmcodigo.value, descripcion:this.frmdescripcion.value,tipo:this.frmTipo.value }

    
    if(!this.state.edit) {
        const url ='http://localhost:5000/frutas';

        axios.post(url, data)
	        .then(res => console.log(res.data));


        this.frmcodigo.value = "";
        this.frmdescripcion.value = "";
        this.frmTipo.value = "";
        this.frmcodigo.focus();
        this.frmdescripcion.focus();
        this.frmTipo.focus();
    }
    else {

        const url ='http://localhost:5000/frutas/'+this.state.id;

        const data = { codigo:this.frmcodigo.value, descripcion:this.frmdescripcion.value,tipo:this.frmTipo.value }

        axios.put(url, data)
            .then(res => console.log(res.data));
        
        console.log(url);
    
        }
    

        this.loadFruta();
    
  }

  viewFruta = (id) => event => {
    event.preventDefault();

    this.frmcodigo.value = "";
    this.frmdescripcion.value = "";
    this.frmTipo.value = "";
    this.frmcodigo.focus();
    this.frmdescripcion.focus();
    this.frmTipo.focus();
    this.frmdescripcion.value = this.state.frutas[id];
  }


  editFruta = (id, row) => event => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmcodigo.focus();
    this.frmcodigo.value = this.state.frutas1[row].id;
    this.frmdescripcion.focus();
    this.frmdescripcion.value = this.state.frutas1[row].descripcion;
    this.frmTipo.focus();
    this.frmTipo.value = this.state.frutas1[row].tipo;

  }

  deleteFruta = (id) => event => {
        event.preventDefault();

        const url ='http://localhost:5000/frutas/'+id;

        axios.delete(url)
            .then(res => console.log(res.data));
        
        
        this.loadFruta();
        
        console.log(url);
    }  

  loadFruta () {

    axios.get('http://localhost:5000/frutas')
    .then(res => {
      //const emps = res.data;
      this.setState({ frutas1: res.data });
      console.log(res.data);
    })



  }

  componentDidMount() {
    this.loadFruta();
  }
   

    render() { 
        return ( 
            <div className="App-Fruta">
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
                <form autoComplete="off" onSubmit={this.addFruta}>    
                    <TextField
                        label="Id"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmcodigo = e)}
                    />
                    <TextField
                        label="descripcion"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmdescripcion = e)}
                    />
                    <TextField
                        label="Tipo"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmTipo = e)}
                    />
                    <Fab
                        color="primary"
                        size="medium"
                        //className="dish-form-icon"
                        onClick={this.addFruta}
                    >
                        <AddIcon />
                    </Fab>
                </form>

              <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                   {this.state.frutas1.map((fruta, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon onClick={this.viewFruta(index)}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText inset primary={fruta.codigo} />
                            <ListItemText inset primary={fruta.descripcion} />
                            <ListItemText inset primary={fruta.tipo} />
                            <ListItemIcon onClick={this.editFruta(fruta.id, index)}>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemIcon onClick={this.deleteFruta(fruta.id)}>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                    
                </List> 



            </div>
         );
    }
}
 
export default Frutas;