import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import NoteComment from '../NoteComment/NoteComment';
// import NoteChecklist from '../NoteChecklist/NoteChecklist';
// import Link from '../Link/Link';
import s from './NoteFull.css';

class NoteFull extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    body: PropTypes.node,
    items: PropTypes.instanceOf(Object),
  };

  static defaultProps = {
    title: '',
    body: '',
    items: {},
  };

  state = {
    title: this.props.title,
    body: this.props.body,
    editTitle: false,
  };

  titleClick = () => {
    this.setState({
      editTitle: true,
    });
  };

  titleBlur = () => e => {
    const prevTitle = this.props.title;
    const newTitle = e.currentTarget.value;
    if (prevTitle !== newTitle) {
      this.setState({
        title: newTitle,
      });
    }
    this.setState({
      editTitle: false,
    });
  };

  bodyBlur = () => e => {
    const prevBody = this.state.body;
    const newBody = e.currentTarget.value;
    if (prevBody !== newBody) {
      this.setState({
        body: newBody,
      });
    }
  };

  commentBodyChanged = () => () => {};

  renderTitle() {
    if (this.state.editTitle) {
      return (
        <input
          type="text"
          name="title-input"
          defaultValue={this.state.title}
          onBlur={this.titleBlur}
          className={s.title}
        />
      );
    }
    return (
      <div role="presentation" onClick={this.titleClick} className={s.title}>
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
              onBlur={this.bodyBlur()}
            />
          </div>
        </div>
        <div className={s.extra}>
          <div>
            {this.props.items.comments
              ? this.props.items.comments.map((comment, i) => (
                  <NoteComment
                    body={comment.body}
                    date={new Date()}
                    key={i.toString()}
                    id={i.toString()}
                    bodyChanged={this.commentBodyChanged}
                  />
                ))
              : ''}
          </div>
          <div>{/* <NoteChecklist /> */}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NoteFull);
