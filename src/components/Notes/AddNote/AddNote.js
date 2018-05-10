import React from 'react';
import { Button, Select, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
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
    addNote: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
    this.classChange = this.classChange.bind(this);
    // this.submit = this.submit.bind(this);

    this.state = {
      title: '',
      body: '',
      items: { comments: [], checklists: [] },
      class: '',
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

  submit(note) {
    this.props.addNote(note);
  }

  render() {
    const noteObj = {
      title: this.state.title,
      body: this.state.body,
      items: {
        comments: this.state.items.comments,
        checklists: this.state.items.checklists,
      },
      class: this.state.class,
      date: new Date(),
    };

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
          <Button type="submit">Add Note</Button>
        </Form>
      </div>
    );
  }
}

export default withStyles(s)(AddNote);
