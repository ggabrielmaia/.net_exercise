import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Este componente fornece a barra de navegação superior para o aplicativo, incluindo links para a página inicial e para adicionar novas tarefas.

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Task Manager
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/add">Add Task</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

