import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";

export default ({addUser}) => {
    const initialFormState = {
        id: null,
        name: '',
        username: '',
    };
    const [user, setUser] = useState(initialFormState);
    
    const handleInputChange = name => event => {
        setUser({ ...user, [name]: event.target.value });
    }

    // material-ui button submit: https://github.com/mui-org/material-ui/issues/231#issuecomment-69703903
    return (
        <form
            onSubmit={event => {
                console.log(user);
                event.preventDefault();
                if (!user.name || !user.username)
                    return;
                
                addUser(user);
                setUser(initialFormState);
            }}
        >
            <TextField
                id="standard-name"
                label="Name"
                value={user.name}
                onChange={handleInputChange('name')}
                margin="normal"
            >
            </TextField>
            <TextField
                id="standard-username"
                label="Username"
                value={user.username}
                onChange={handleInputChange('username')}
                margin="normal"
            ></TextField>
            <Button type="submit">
                Add new user
            </Button>
        </form>
    )
}