import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import NoteComment from '../NoteComment/NoteComment';
// import Link from '../Link/Link';
import s from './NoteFull.css';

class NoteFull extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    body: PropTypes.node,
    items: PropTypes.instanceOf(Object),
  };

  static defaultProps = {
    body: '',
    items: {},
  };

  state = {
    title: this.props.title,
    body: this.props.body,
    items: this.props.items,
    editTitle: false,
  };

  titleClick() {
    this.setState({
      editTitle: true,
    });
  }

  titleBlur(e) {
    const prevTitle = this.state.title;
    const newTitle = e.currentTarget.value;
    if (prevTitle !== newTitle) {
      this.setState({
        title: newTitle,
      });
    }
    this.setState({
      editTitle: false,
    });
  }

  bodyBlur(e) {
    const prevBody = this.state.body;
    const newBody = e.currentTarget.value;
    if (prevBody !== newBody) {
      this.setState({
        body: newBody,
      });
    }
  }

  renderTitle() {
    if (this.state.editTitle) {
      return (
        <input
          type="text"
          name="title-input"
          defaultValue={this.state.title}
          onBlur={this.titleBlur.bind(this)}
          className={s.title}
        />
      );
    }
    return (
      <div
        role="presentation"
        onClick={this.titleClick.bind(this)}
        className={s.title}
        onKeyPress=""
      >
        {this.state.title}
      </div>
    );
  }

  render() {
    return (
      <div className={s.note}>
        <div className={s.top}>
          <div>{this.renderTitle()}</div>
        </div>
        <div className={s.main}>
          <div>
            <Textarea
              placeholder="Give me your notes."
              className={s.textArea}
              defaultValue={this.state.body}
              onBlur={this.bodyBlur.bind(this)}
            />
          </div>
        </div>
        <div className={s.extra}>
          {this.state.items.comments.map((comment, i) => (
            <NoteComment
              body={comment.body}
              date={new Date()}
              key={i.toString()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NoteFull);
