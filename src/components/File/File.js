import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import s from './File.css';

class File extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    uploadedBy: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.file}>
        <Link className={s.fileLink} to="/file/file">
          <div className={s.title}>{this.props.title}</div>
        </Link>
        <div className={s.uploader}>
          <span className={s.by}>By: </span>
          <Link to="/user/user">{this.props.uploadedBy}</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(File);
