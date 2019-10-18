import React, {useState, useEffect} from 'react';
import { TextField, Button } from "@material-ui/core";

export default ({currentUser, updateUser, setEditing}) => {
    const [user, setUser] = useState(currentUser);

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);

    const handleInputChange = name => event => {
        setUser({...user, [name]: event.target.value });
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                updateUser(user.id, user);
            }}
        >
            <TextField
                id="standard-name"
                value={user.name}
                onChange={handleInputChange('name')}
                label="Name"
                margin="normal"
            />
            <TextField
                id="standard-username"
                value={user.username}
                onChange={handleInputChange('username')}
                label="Username"
                margin="normal"
            />
            <Button type="submit">Update user</Button>
            <Button
                onClick={() => setEditing(false)}
            >
                Cancel
            </Button>
        </form>
    );
}