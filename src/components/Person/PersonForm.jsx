import React from 'react';
import TextField from '@material-ui/core/TextField';


export default (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nome"
                type="text"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                value={props && props.name}
            />
            <TextField
                margin="dense"
                id="name"
                label="Data de Nascimento"
                type="date"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                value={props && props.dob}
            />
            <TextField
                margin="dense"
                id="name"
                label="Endereço de e-mail"
                type="email"
                value={props && props.email}
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}