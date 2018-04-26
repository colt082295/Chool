import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'semantic-ui-react';
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
          <Dropdown item text="Classes" className={s.sidebarItem}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to="/class/english"
                onClick={this.sidebarItemClicked}
                active={activeItem === 'class-english'}
              >
                English
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/class/math"
                active={activeItem === 'class-math'}
              >
                Math
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/class/geography"
                active={activeItem === 'class-geography'}
              >
                Geography
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
          <Menu.Item
            as={Link}
            name="grades"
            to="/grades"
            active={activeItem === 'grades'}
            onClick={this.sidebarItemClicked}
            className={s.sidebarItem}
          >
            Grades
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="messages"
            to="/messages"
            active={activeItem === 'messages'}
            onClick={this.sidebarItemClicked}
            className={s.sidebarItem}
          >
            Messages
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
