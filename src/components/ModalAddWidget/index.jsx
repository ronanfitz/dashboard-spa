import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  TRANSIT_WIDGET_ID,
  SLACK_WIDGET_ID,
  GITHUB_WIDGET_ID,
} from '../../constants';
import {
  addTransitWidget,
  addGithubWidget,
  addSlackWidget,
  hideAddWidgetModal,
} from '../../actions';

const ModalAddWidget = props => (
  <Modal basic size="small" open={props.showAddWidgetModal}>
    <Header icon="new pied piper" content="Choose a widget" />
    <Modal.Content>
      <p>You may only display one of each widget at this time.</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        basic
        color="blue"
        onClick={props.addTransitWidget}
        inverted
        disabled={props.ids.includes(TRANSIT_WIDGET_ID)}
      >
        <Icon name="rocket" size="large" />Transit
      </Button>
      <Button
        basic
        color="blue"
        onClick={props.addGithubWidget}
        inverted
        disabled={props.ids.includes(GITHUB_WIDGET_ID)}
      >
        <Icon name="github" size="large" /> GitHub
      </Button>
      <Button
        basic
        color="blue"
        onClick={props.addSlackWidget}
        inverted
        disabled={props.ids.includes(SLACK_WIDGET_ID)}
      >
        <Icon name="slack" size="large" /> Slack
      </Button>
      <Button
        basic
        color="red"
        onClick={props.hideAddWidgetModal}
        inverted
      >
        <Icon name="cancel" size="large" /> Cancel
      </Button>
    </Modal.Actions>
  </Modal>
);

ModalAddWidget.propTypes = {
  showAddWidgetModal: PropTypes.bool.isRequired,
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  addTransitWidget: PropTypes.func.isRequired,
  addGithubWidget: PropTypes.func.isRequired,
  addSlackWidget: PropTypes.func.isRequired,
  hideAddWidgetModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const showAddWidgetModal = state.widgets.showAddWidgetModal;
  const ids = state.widgets.ids;
  return { showAddWidgetModal, ids };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  addTransitWidget,
  addGithubWidget,
  addSlackWidget,
  hideAddWidgetModal,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAddWidget);
