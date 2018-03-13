import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';

class Header extends React.Component {
  state = {
    searchFocus: false,
  };

  searchFocused() {
    this.setState({ searchFocus: true });
  }

  searchBlurred() {
    this.setState({ searchFocus: false });
  }

  isFocused() {
    if (this.state.searchFocus) {
      return s.searchFocus;
    }
    return '';
  }

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
                onFocus={this.searchFocused.bind(this)}
                onBlur={this.searchBlurred.bind(this)}
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
          <Dropdown item icon="user outline" simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>More</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withStyles(s)(Header);
