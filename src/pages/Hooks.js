import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    return (
        <Grid className={classes.root} container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <h2>Add user</h2>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <h2>View users</h2>
                </Paper>
            </Grid>
        </Grid>
    )
}