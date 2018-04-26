import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import update from 'immutability-helper';
import s from './NoteChecklist.css';

class NoteChecklist extends React.Component {
  state = {
    list: [
      {
        checked: false,
        label: 'The 1st one',
        editing: false,
      },
      {
        checked: true,
        label: 'The second one',
        editing: false,
      },
    ],
  };

  checkboxLabelClick(index) {
    this.setState({
      list: update(this.state.list, { [index]: { editing: { $set: true } } }),
    });
  }

  checkboxLabelBlur(index, e) {
    const prevLabel = this.state.list[index].label;
    const newLabel = e.currentTarget.value;
    if (prevLabel !== newLabel) {
      this.setState({
        list: update(this.state.list, {
          [index]: { label: { $set: newLabel }, editing: { $set: false } },
        }),
      });
    } else {
      this.setState({
        list: update(this.state.list, {
          [index]: { editing: { $set: false } },
        }),
      });
    }
  }

  checkboxToggled(index, item, data) {
    this.setState({
      list: update(this.state.list, {
        [index]: { checked: { $set: data.checked } },
      }),
    });
  }

  renderCheckbox(index) {
    if (this.state.list[index].editing) {
      return (
        <input
          type="text"
          name="checkobx-input"
          defaultValue={this.state.list[index].label}
          onBlur={this.checkboxLabelBlur.bind(this, index)}
          className={s.checkboxLabel}
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        />
      );
    }
    return (
      <div
        role="presentation"
        onClick={this.checkboxLabelClick.bind(this, index)}
        className={s.checkboxLabel}
      >
        {this.state.list[index].label}
      </div>
    );
  }

  render() {
    return (
      <div className={s.checklist}>
        <div>
          <input type="text" placeholder="Enter your checklist title..." />
        </div>
        <div className={s.list}>
          {this.state.list.map((box, i) => (
            <div className={s.checkbox} key={i.toString()}>
              <Checkbox
                onChange={this.checkboxToggled.bind(this, i)}
                defaultChecked={box.checked}
              />
              {this.renderCheckbox(i)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NoteChecklist);
