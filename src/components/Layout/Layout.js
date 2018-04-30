import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
// eslint-disable-next-line
import semantic from '../../../semantic/dist/semantic.min.css';
import s from './Layout.css';
import Header from '../Header';
import Sidebar from '../Sidebar';

class Layout extends React.Component {
  static defaultProps = {
    path: '',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.node,
  };

  state = {
    sidebarActiveItem: this.props.path ? this.props.path : '',
    headerNotifications: [{ type: 'message' }],
  };

  changeSidebarActiveItem(name) {
    this.setState({
      sidebarActiveItem: name,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <Header notifications={this.state.headerNotifications} />
        <div className={s.body}>
          <Sidebar
            activeItem={this.state.sidebarActiveItem}
            changeActiveItem={this.changeSidebarActiveItem.bind(this)}
          />
          <div className={s.main}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(normalizeCss, semantic, s)(Layout);
