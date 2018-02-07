import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  Toolbar,
} from 'react-dashboard-mui/Components';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import PollIcon from 'material-ui-icons/Poll';
import AppSearch from 'components/toolbar/search';
import UserMenu from 'components/toolbar/menu';

const styles = theme => ({
  logo: {
    fontSize: '2.1rem',
    margin: '9px 5px 0 5px',
    color: '#fff',
    '&:before': {
      content: '\'\\0041\'',
      display: 'inline-block',
      fontFamily: 'zonaextrema',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: 1,
    }
  },
  flex: {
    flex: 1,
  },
  button: {
    color: '#607d8b',
    minWidth: 40,
    marginRight: 5,
    marginLeft: 5,
  },
  poll: {
    fontSize: '1.5rem',
    border: 0,
    boxShadow: 'none',
  },
});

const GenericToolbar = ({ children, classes }) => (
  <Toolbar>
    <Link to="/" className={classes.logo} />
    <AppSearch />
    {children}
    <Typography type="title" color="inherit" className={classes.flex} />
    <Button
      fab
      mini
      color="contrast"
      aria-label="add"
      className={classes.button}
      component={Link}
      to="/new"
    >
      <AddIcon />
    </Button>
    <Button
      fab
      mini
      color="primary"
      aria-label="poll"
      className={classes.poll}
      component={Link}
      to="/charts"
    >
      <PollIcon style={{ width: 48, height: 48 }} />
    </Button>
    <Typography type="title" color="inherit" className={classes.flex} />
    <UserMenu />
  </Toolbar>
);

export default withStyles(styles)(GenericToolbar);