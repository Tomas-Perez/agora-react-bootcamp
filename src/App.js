import {Component} from 'react';
import Home from './Home';
import NotificationPage from './NotificationPage';
import UserPage from './UserPage';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Badge} from '@material-ui/core';
import {Mail as MailIcon, Notifications as NotificationsIcon, AccountCircle} from '@material-ui/icons';
import history from './history';


class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
        <AppBar position="static">
          <Toolbar>
            <Typography style={{cursor: 'pointer'}} variant="h6" noWrap onClick={() => history.push('/')}>
              Material-UI
            </Typography>
            <div style={{flexGrow: 1}}></div>
            <IconButton 
              aria-label="show 17 new notifications" 
              color="inherit"
              onClick={() => history.push('/notifications')}
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={() => history.push('/user')}
              >
                <AccountCircle />
              </IconButton>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/notifications">
            <NotificationPage />
          </Route>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
