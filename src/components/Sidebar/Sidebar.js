import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';

class Sidebar extends Component {
  static propTypes = {
    activeItem: PropTypes.node.isRequired,
    changeActiveItem: PropTypes.func.isRequired,
  };

  sidebarItemClicked = (e, { name }) => {
    this.props.changeActiveItem(name);
  };

  render() {
    const activeItem = this.props.activeItem ? this.props.activeItem : 'home';
    return (
      <div className={s.sidebar}>
        <Menu pointing secondary vertical fluid>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.sidebarItemClicked}
          />
          <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={this.sidebarItemClicked}
          />
          <Menu.Item
            name="friends"
            active={activeItem === 'friends'}
            onClick={this.sidebarItemClicked}
          />
        </Menu>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
