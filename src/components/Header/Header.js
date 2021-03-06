import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import NotificationsComponent from './Notifications/Notifications';
import s from './Header.css';
import Link from '../Link';

class Header extends React.Component {
  state = {
    searchFocus: false,
  };

  searchFocused = () => {
    this.setState({ searchFocus: true });
  };

  // searchFocused() {
  //   this.setState({ searchFocus: true });
  // }

  searchBlurred = () => {
    this.setState({ searchFocus: false });
  };

  // searchBlurred() {
  //   this.setState({ searchFocus: false });
  // }

  isFocused = () => {
    if (this.state.searchFocus) {
      return s.searchFocus;
    }
    return '';
  };

  // isFocused() {
  //   if (this.state.searchFocus) {
  //     return s.searchFocus;
  //   }
  //   return '';
  // }

  render() {
    return (
      <Menu attached="top">
        <Menu.Menu position="right">
          <div
            className={`${'ui right aligned category search item' +
              ' '}${this.isFocused()}`}
          >
            <div className={`ui transparent icon input ${s.searchWrapper}`}>
              <input
                className="prompt"
                type="text"
                placeholder="Search classes, assignments, etc"
                onFocus={this.searchFocused}
                onBlur={this.searchBlurred}
              />
              <i className="search link icon" />
              <div className="results" />
            </div>
          </div>
          <Dropdown item icon="user outline" className={s.userIcon} simple>
            <Dropdown.Menu>
              <NotificationsComponent />
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/profile" className={s.moreLink}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/settings">
                Setting
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withStyles(s)(Header);
