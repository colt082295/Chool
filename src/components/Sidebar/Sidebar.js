import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
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
            as={Link}
            name="home"
            to="/"
            active={activeItem === 'home'}
            onClick={this.sidebarItemClicked}
            className={s.sidebarItem}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="classes"
            to="/classes"
            active={activeItem === 'classes'}
            onClick={this.sidebarItemClicked}
            className={s.sidebarItem}
          >
            Classes
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="assignments"
            to="/assignments"
            active={activeItem === 'assignments'}
            onClick={this.sidebarItemClicked}
            className={s.sidebarItem}
          >
            Assignments
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
