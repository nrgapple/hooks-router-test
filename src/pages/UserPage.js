import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Grid, List, ListItem, ListItemIcon, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectList from "../components/ProjectList";

const UserPageStyle = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    titlePaper: {
        padding: theme.spacing(2),
        flexGrow: 1,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        overflow: 'auto',
        height: '10vh'
    },
    heightPaper: {
        padding: theme.spacing(2),
        flexGrow: 1,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '60vh',
        overflow: 'auto',
    }
}));

export default (props) => {
    const classes = UserPageStyle();

    //Setting the initial state.
    const initialUserState = {
        user: {},
        loading: true,
    };

    const initialProjectsState = {
        projects: [],
        loading: true,
    }

    // Getter and setter for user state
    const [user, setUser] = useState(initialUserState);
    const [projects, setProjects] = useState(initialProjectsState);

    //Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
    useEffect(() => {
        const getUser = async () => {
            // Pass our param (:id) to the API call
            const {data} = await axios(`https://api.github.com/users/${props.match.params.id}`);
            setUser(data);
            console.log(user);
        };
        
        // invoke the async func.
        getUser();
    }, []); // [] which will prevent useEffect from running in an infinite loop.

    useEffect(() => {
        const getUserRepos = async () => {
            const {data} = await axios(`https://api.github.com/users/${props.match.params.id}/repos`);

            setProjects({projects: data});
            console.log(projects);
        };

        getUserRepos();
    }, []);

    return user.loading ? (
        <div>Loading...</div>
    ) : (
        <Grid container spacing={3} height="100vh">
            <Grid item xs={12}>
                <Paper className={classes.titlePaper}>
                    <h1>{props.match.params.id}</h1>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.heightPaper}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Website</th>
                                <th>Followers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.location}</td>
                                <td>
                                    <a href={user.blog}>{user.blog}</a>
                                </td>
                                <td>{user.followers}</td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper className={classes.heightPaper}>
                    <ProjectList
                        projects={projects.projects}
                        loading={projects.loading}
                    />
                </Paper>
            </Grid>
        </Grid>
    )
}