import React from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import update from 'immutability-helper';
import s from './NoteChecklist.css';

class NoteChecklist extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
    list: PropTypes.instanceOf(Array).isRequired,
    titleChanged: PropTypes.func.isRequired,
    taskChanged: PropTypes.func.isRequired,
    taskToggled: PropTypes.func.isRequired,
    // addTaskItem: PropTypes.func.isRequired,
  };

  state = {
    title: this.props.title,
    list: this.props.list,
  };

  // titleChange(id, e) {
  //   this.props.titleChanged(e.currentTarget.value, id);
  // }

  titleChange = id => e => {
    this.props.titleChanged(e.currentTarget.value, id);
  };

  // taskChange(checklistId, taskId, e) {
  //   this.props.taskChanged(e.currentTarget.value, checklistId, taskId);
  // }

  taskChange = (checklistId, taskId) => e => {
    this.props.taskChanged(e.currentTarget.value, checklistId, taskId);
  };

  // checkboxLabelClick(index) {
  //   this.setState({
  //     list: update(this.state.list, { [index]: { editing: { $set: true } } }),
  //   });
  // }

  checkboxLabelClick = index => () => {
    this.setState({
      list: update(this.state.list, { [index]: { editing: { $set: true } } }),
    });
  };

  // checkboxLabelBlur(index, e) {
  //   const prevLabel = this.state.list[index].label;
  //   const newLabel = e.currentTarget.value;
  //   if (prevLabel !== newLabel) {
  //     this.setState({
  //       list: update(this.state.list, {
  //         [index]: { label: { $set: newLabel }, editing: { $set: false } },
  //       }),
  //     });
  //   } else {
  //     this.setState({
  //       list: update(this.state.list, {
  //         [index]: { editing: { $set: false } },
  //       }),
  //     });
  //   }
  // }

  checkboxLabelBlur = index => e => {
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
  };

  // checkboxToggled(index, item, data) {
  //   this.props.taskToggled(this.props.id, index);
  //   this.setState({
  //     list: update(this.state.list, {
  //       [index]: { checked: { $set: data.checked } },
  //     }),
  //   });
  // }

  checkboxToggled = index => (item, data) => {
    this.props.taskToggled(this.props.id, index);
    this.setState({
      list: update(this.state.list, {
        [index]: { checked: { $set: data.checked } },
      }),
    });
  };

  renderCheckbox(index) {
    if (this.state.list[index].editing) {
      return (
        <input
          type="text"
          name="checkobx-input"
          defaultValue={
            this.state.list[index].label
              ? this.state.list[index].label
              : 'Enter text'
          }
          onBlur={this.checkboxLabelBlur.bind(this, index)}
          className={s.checkboxLabel}
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
          onChange={this.taskChange(this.props.id, index)}
        />
      );
    }
    return (
      <div
        role="presentation"
        onClick={this.checkboxLabelClick(index)}
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
          <input
            type="text"
            placeholder="Enter your checklist title..."
            defaultValue={this.state.title}
            onChange={this.titleChange(this.props.id)}
          />
        </div>
        <div className={s.list}>
          {this.state.list.map((box, i) => (
            <div className={s.checkbox} key={i.toString()}>
              <Checkbox
                onChange={this.checkboxToggled(i)}
                defaultChecked={box.checked}
              />
              {this.renderCheckbox(i)}
            </div>
          ))}
        </div>
        {/* <div className={s.addListItem} onClick={this.props.addTaskItem()}> */}
        <div>
          <Icon name="plus" />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NoteChecklist);
