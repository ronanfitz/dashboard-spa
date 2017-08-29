import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  TRANSIT_WIDGET_ID,
  SLACK_WIDGET_ID,
  GITHUB_WIDGET_ID
} from '../../constants';
import {
  addTransitWidget,
  addGithubWidget,
  addSlackWidget
} from '../../actions';

const ModalAddWidget = (props) => (
  <Modal basic size='small' open={props.showAddWidgetModal}>
    <Header icon='archive' content='Choose a widget' />
    <Modal.Content>
      <p>You may only display one of each widget at this time.</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='blue' onClick={props.addTransitWidget} inverted>
        <Icon name='remove' /> Transit
      </Button>
      <Button basic color='blue' onClick={props.addGithubWidget} inverted>
        <Icon name='remove' /> GitHub
      </Button>
      <Button basic color='blue' onClick={props.addSlackWidget} inverted>
        <Icon name='remove' /> Slack
      </Button>
    </Modal.Actions>
  </Modal>
);

const mapStateToProps = (state, ownProps) => {
  const showAddWidgetModal  = state.widgets.showAddWidgetModal;
  return { showAddWidgetModal };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  addTransitWidget,
  addGithubWidget,
  addSlackWidget,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddWidget);