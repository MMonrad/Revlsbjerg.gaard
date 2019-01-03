import { Component } from 'react';
import * as React from 'react';
import TopAppBar from "src/react/_Layout/TopAppBar"
import { Route, Switch } from 'react-router-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
});

interface IAppProps {
  classes: {
    root: any;
  }
}

class App extends Component<IAppProps> {

  renderLoader = () => {
    return (<CircularProgress/>);
  }

  render() {
    const { classes } = this.props; 

    return (
      <div className={classes.root}>
        <TopAppBar/>
        <Grid style={{marginTop:"115px"}}>
          <Switch>
            <Route path="*" render={this.renderLoader} />
            <Route path="/contact*" render={null} />
          </Switch>
        </Grid>
    </div>
    );
  }
}

export default withStyles(styles)(App);
