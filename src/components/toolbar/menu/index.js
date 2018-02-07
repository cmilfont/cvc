import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';
// import actions from 'api/actions';

class UserMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { logout, user: { displayName, photoURL, email } } = this.props;
    return (
      <div>
        <IconButton
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Avatar alt={displayName} src={photoURL}
          />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>{email}</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch({ type: actions.LOGOUT_USER }),
// });

const mapStateToProps = state => ({ user: {} });

export default connect(mapStateToProps)(UserMenu);