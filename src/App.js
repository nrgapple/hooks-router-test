import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import UserPage from "./pages/UserPage";
import Hooks from "./pages/Hooks";
import { AppBar, Container, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  title: {
    flexGrow: 1
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container id="scroll-container">
      <AppBar>
        <Toolbar>
          <Typography position="fixed" className={classes.title}>
            Hooks and router
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hooks/" component={Hooks} />
        <Route path="/:id" component={UserPage} />
      </Switch>
    </Container>
  );
}

export default App;
