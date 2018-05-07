import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TestMultipleChoice.css';

class TestMultipleChoice extends React.Component {
  static propTypes = {
    choices: PropTypes.instanceOf(Array).isRequired,
    currentAnswer: PropTypes.node.isRequired,
    updateAnswer: PropTypes.func.isRequired,
  };

  handleChange = (e, { value }) => {
    this.props.updateAnswer(value);
  };

  render() {
    return (
      <div className={s.answers}>
        <Form>
          <Form.Field>
            Selected value: <b>{this.props.currentAnswer}</b>
          </Form.Field>
          {this.props.choices.map((choice, i) => (
            <Form.Field key={i.toString()}>
              <Checkbox
                radio
                label={choice}
                name="checkboxRadioGroup"
                value={choice}
                checked={this.props.currentAnswer === choice}
                onChange={this.handleChange}
              />
            </Form.Field>
          ))}
        </Form>
      </div>
    );
  }
}

export default withStyles(s)(TestMultipleChoice);
