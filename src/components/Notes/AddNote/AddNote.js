import React from 'react';
import { Button, Select, Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import NoteComment from '../NoteComment/NoteComment';
import NoteChecklist from '../NoteChecklist/NoteChecklist';
import s from './AddNote.css';

const classes = [
  {
    key: 'none',
    value: 'none',
    text: 'None',
  },
  {
    key: 'english',
    value: 'english',
    text: 'English',
  },
  {
    key: 'math',
    value: 'math',
    text: 'Math',
  },
];

class AddNote extends React.Component {
  static propTypes = {
    note: PropTypes.instanceOf(Object).isRequired,
    // addNote: PropTypes.func.isRequired,
    comments: PropTypes.instanceOf(Array).isRequired,
    checklists: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
    this.classChange = this.classChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addChecklist = this.addChecklist.bind(this);
    // this.commentBodyChanged = this.commentBodyChanged.bind(this);

    this.state = {
      title: '',
      body: '',
      class: '',
      comments: [],
      checklists: [],
    };
  }

  titleChange(e) {
    this.setState({
      title: e.currentTarget.value,
    });
  }

  bodyChange(e) {
    this.setState({
      body: e.currentTarget.value,
    });
  }

  classChange(e, data) {
    this.setState({
      class: data.value,
    });
  }

  addComment() {
    const newComments = [
      ...this.state.comments,
      {
        body: '',
        date: new Date(),
      },
    ];

    this.setState({
      comments: newComments,
    });
  }

  commentBodyChanged(text, id) {
    const newComments = this.state.comments.map((comment, i) => {
      if (id === i) {
        return {
          ...this.state.comments[id],
          body: text,
        };
      }
      return comment;
    });

    this.setState({
      comments: newComments,
    });
  }

  checkListTitleChanged(text, id) {
    const newChecklists = this.state.checklists.map((checklist, i) => {
      if (id === i) {
        return {
          ...this.state.checklists[id],
          title: text,
        };
      }
      return checklist;
    });

    this.setState({
      checklists: newChecklists,
    });
  }

  checkListTaskChanged(text, checklistId, taskId) {
    const newChecklists = this.state.checklists.map((checklist, i) => {
      if (checklistId === i) {
        return {
          ...this.state.checklists[checklistId],
          list: checklist.list.map((task, index) => {
            if (index === taskId) {
              return {
                ...this.state.checklists[checklistId].list[taskId],
                label: text,
              };
            }
            return task;
          }),
        };
      }
      return checklist;
    });

    this.setState({
      checklists: newChecklists,
    });
  }

  checkListTaskToggled(checklistId, taskId) {
    const newChecklists = this.state.checklists.map((checklist, i) => {
      if (checklistId === i) {
        return {
          ...this.state.checklists[checklistId],
          list: checklist.list.map((task, index) => {
            if (index === taskId) {
              return {
                ...this.state.checklists[checklistId].list[taskId],
                checked: !this.state.checklists[checklistId].list[taskId]
                  .checked,
              };
            }
            return task;
          }),
        };
      }
      return checklist;
    });

    this.setState({
      checklists: newChecklists,
    });
  }

  addChecklist() {
    const newChecklists = [
      ...this.state.checklists,
      {
        title: '',
        list: [
          {
            checked: false,
            label: 'Your comment',
            editing: true,
          },
        ],
      },
    ];

    this.setState({
      checklists: newChecklists,
    });
  }

  // taskItemAdd(id) {
  //   /*

  //     Working On

  //   */
  //   // const newChecklists = [
  //   //   ...this.state.checklists,
  //   //   {
  //   //     title: '',
  //   //     list: this.state.checklists.list.map((task, index) => {
  //   //       if (index === id) {
  //   //         return {
  //   //           ...this.state.checklists[checklistId].list[taskId],
  //   //           checked: !this.state.checklists[checklistId].list[taskId]
  //   //             .checked,
  //   //         };
  //   //       }
  //   //       return task;
  //   //     }),
  //   //   },
  //   // ];
  //   // this.setState({
  //   //   checklists: newChecklists,
  //   // });
  // }

  submit() {
    // this.props.addNote(note);
    // Find best way to get the data from the comments and checklists components. Do I update redux on keystrokes? Seems there must be a better way. Look @ Redux Form. Maybe I keep track of the content+index in state in this component and prop functions run in the children to update the state.
    // this.props.note.items.comments.map((comment, i) => {
    //   console.log('comment:', comment);
    // });
    /* eslint-disable no-console  */
    console.log('STATE:', this.state);
    /* eslint-enable no-console  */
  }

  render() {
    const noteObj = {
      title: this.state.title,
      body: this.state.body,
      items: {
        comments: this.props.note.items.comments,
        checklists: this.props.note.items.checklists,
      },
      class: this.state.class,
      date: new Date(),
    };

    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */
    return (
      <div>
        <Form onSubmit={this.submit.bind(this, noteObj)}>
          <Form.Field>
            <label htmlFor="title">
              Title{' '}
              <input
                id="title"
                placeholder="Enter Title"
                onChange={this.titleChange}
              />
            </label>
          </Form.Field>
          <Form.TextArea
            label="Description"
            placeholder="Give me note data..."
            onChange={this.bodyChange}
          />
          <Form.Field
            control={Select}
            label="Class"
            options={classes}
            onChange={this.classChange}
            placeholder="Select class"
          />
          <div className={s.addWrapper}>
            <div className={s.addItem} onClick={this.addChecklist}>
              <Icon name="checkmark box" />
              Add Checklist
            </div>
            <div className={s.addItem} onClick={this.addComment}>
              <Icon name="comment" />
              Add Comment
            </div>
          </div>
          <div>
            {this.state.comments.map((comment, i) => (
              <NoteComment
                body={comment.body}
                date={comment.date}
                key={i.toString()}
                bodyChanged={this.commentBodyChanged.bind(this)}
                id={i}
              />
            ))}
          </div>
          <div>
            {this.state.checklists.map((checklist, i) => (
              <NoteChecklist
                title={checklist.title}
                list={checklist.list}
                key={i.toString()}
                id={i}
                titleChanged={this.checkListTitleChanged.bind(this)}
                taskChanged={this.checkListTaskChanged.bind(this)}
                taskToggled={this.checkListTaskToggled.bind(this)}
                addTaskItem={this.taskItemAdd.bind(this)}
              />
            ))}
          </div>
          <Button type="submit">Add Note</Button>
        </Form>
      </div>
    );
  }
}

export default withStyles(s)(AddNote);
