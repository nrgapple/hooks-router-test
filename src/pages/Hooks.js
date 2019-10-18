import React, {useState} from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserTable from '../components/UserTable'
import AddUserForm from "../forms/AddUserForm";
import EditUserForm from "../forms/EditUserForm";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}))

export default () => {
    const classes = useStyles();
    const userData = [
        { id: 1, name: 'ag', username: 'nrgapple'},
        { id: 2, name: 'alex', username: 'acramer'}
    ]
    const initialFormState = {
        id: null,
        name: '',
        username: ''
    };

    const [users, setUsers] = useState(userData);
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurentUser] = useState(initialFormState);
    
    const editRow = user => {
        setEditing(true);

        setCurentUser({ 
            id: user.id, 
            name: user.name,
            username: user.username
        });
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false);

        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    }

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user])
    }

    const deleteUser = id => {
        // set users as an array of user without a user with id [id].
        setUsers(users.filter(user => user.id !== id));
    }

    return (
        <Grid className={classes.root} container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Button href="https://www.taniarascia.com/crud-app-in-react-with-hooks/" variant="contained">
                        <Typography>
                            Based on tutorial
                        </Typography>
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                {editing ? (
                    <Paper className={classes.paper}>
                        <h2>Edit user</h2>
                        <EditUserForm 
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </Paper>
                ) : (
                    <Paper className={classes.paper}>
                        <h2>Add user</h2>
                        <AddUserForm addUser={addUser} />
                    </Paper>
                )}
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <h2>View users</h2>
                    <UserTable 
                        users={users}
                        deleteUser={deleteUser}
                        editRow={editRow}
                    />
                </Paper>
            </Grid>
        </Grid>
    )
    
    
}
