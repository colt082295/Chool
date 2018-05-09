import React from 'react';
import { Button, Modal, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SettingsModal.css';

class SettingsModal extends React.Component {
  static propTypes = {
    id: PropTypes.node.isRequired,
    closeSettingModal: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    title: PropTypes.node.isRequired,
    // type: PropTypes.node.isRequired,
    updateSettings: PropTypes.func.isRequired,
    // list: PropTypes.instanceOf(Array).isRequired,
    settings: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    // Map all the setting values to local state.
    /* eslint-disable array-callback-return */
    const vals = [];
    this.props.settings.map(setting => {
      vals.push(setting.value);
    });
    this.state = {
      settings: this.props.settings,
      values: vals,
    };
  }

  saveSettings() {
    const settings = [...this.props.settings];
    this.props.settings.map((setting, i) => {
      if (setting.element === 'dropdown') {
        settings[i] = {
          ...this.props.settings[i],
          value: this.state.values[i],
        };
      }
    });
    this.setState({
      settings,
    });
    this.props.updateSettings(this.props.id, settings);
    this.props.closeSettingModal();
  }

  /* eslint-disable class-methods-use-this */

  dropdownChange(index, event, data) {
    const newState = [...this.state.values];
    newState[index] = data.value;
    this.setState({ values: newState });
  }

  renderElem(obj) {
    if (obj.element === 'dropdown') {
      return (
        <div className={s.item} key={obj.index.toString()}>
          {obj.description ? (
            <p className={s.itemDescription}>{obj.description}</p>
          ) : (
            ''
          )}
          <Dropdown
            placeholder={obj.placeholder}
            fluid
            search
            defaultValue={obj.value}
            selection
            options={obj.options}
            onChange={this.dropdownChange.bind(this, obj.index)}
          />
        </div>
      );
    }
    return '';
  }

  /* eslint-enable class-methods-use-this */

  render() {
    return (
      <Modal
        size="large"
        open={this.props.modalOpen}
        onClose={this.props.closeSettingModal}
      >
        <Modal.Header>{`${this.props.title} settings`}</Modal.Header>
        <Modal.Content>
          <p>You are editing the {this.props.title} settings.</p>
          {this.state.settings.map((setting, i) => {
            const obj = {
              element: setting.element,
              description: this.state.settings[i].description,
              options: setting.options,
              value: setting.value,
              name: setting.name,
              index: i,
            };
            return this.renderElem(obj);
          })}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.props.closeSettingModal}>
            Cancel
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Sumbit"
            onClick={this.saveSettings.bind(this)}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default withStyles(s)(SettingsModal);
