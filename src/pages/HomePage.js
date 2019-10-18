import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Button, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Button to="/nrgapple" component={Link} color="secondary" variant="contained">
                <Typography>
                    nrgapple
                </Typography>
            </Button>
            <Button to="/hooks" component={Link} color="primary" variant="contained">
                <Typography>
                    hooks example
                </Typography>
            </Button>
        </Paper>
    )
}