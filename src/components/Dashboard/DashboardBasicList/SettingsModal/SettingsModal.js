import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SettingsModal.css';

class SettingsModal extends React.Component {
  static propTypes = {
    closeSettingModal: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    title: PropTypes.node.isRequired,
  };

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
            onClick={this.props.closeSettingModal}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default withStyles(s)(SettingsModal);
