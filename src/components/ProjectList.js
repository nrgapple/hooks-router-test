import React from "react";
import { List, ListItem, ListItemIcon, Checkbox, Typography, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default ({projects, loading}) => {
    const classes = useStyles();
    console.log(projects);
    return loading ? (
        <Typography>
            Loading...
        </Typography>
    ) : (
        <List
            className={classes.root}
        >
            {projects.map(project => {
                const labelId = `checkbox-list-label-${project.id}`
                return (
                    <ListItem 
                        key={project.id} 
                        role={undefined}
                        dense
                    >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={false}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId}}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={project.name} />
                    </ListItem>
                );
            })}
        </List>
    );
}